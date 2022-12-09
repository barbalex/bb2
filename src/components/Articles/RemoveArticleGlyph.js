//
import React, { useCallback, useState, useContext } from 'react'
import {
  Glyphicon,
  OverlayTrigger,
  Popover,
  ButtonToolbar,
  Button,
} from 'react-bootstrap'
import styled from '@emotion/styled'
import { gql, useApolloClient } from '@apollo/client'

import StoreContext from '../../storeContext'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 0.9em;
  color: red;
  padding-left: 8px;
  cursor: pointer;
`
const RemoveGlyphicon = styled(Glyphicon)`
  position: absolute !important;
  right: 10px !important;
  top: 6px !important;
  font-size: 1.5em;
  color: #edf4f8;
`

const RemoveArticleGlyph = ({ article }) => {
  const client = useApolloClient()
  const store = useContext(StoreContext)

  const [open, setOpen] = useState(true)

  const onClickYes = useCallback(async () => {
    try {
      await client.mutate({
        mutation: gql`
          mutation deleteArticle($id: uuid!) {
            delete_article_by_pk(id: $id) {
              id
            }
          }
        `,
        variables: { id: article.id },
        refetchQueries: ['ArticleIdsForArticles', 'ArticlesForArticlePanel'],
      })
    } catch (error) {
      store.showError(error)
    }
    setOpen(false)
  }, [client, article?.id, store])

  const onClickNo = useCallback(() => {
    setOpen(false)
    // trick to make overlay re-open-able
    setTimeout(() => setOpen(true))
  }, [])

  const popover = (
    <Popover id="popoverRemoveArticle" title="Delete this article?">
      <ButtonToolbar>
        <Button bsSize="small" bsStyle="danger" onClick={onClickYes}>
          Yes
        </Button>
        <Button bsSize="small" onClick={onClickNo}>
          No
        </Button>
      </ButtonToolbar>
    </Popover>
  )

  if (open) {
    return (
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <RemoveGlyphicon glyph="remove-circle" />
      </OverlayTrigger>
    )
  }
  return <StyledGlyphicon glyph="remove-circle" />
}

export default RemoveArticleGlyph
