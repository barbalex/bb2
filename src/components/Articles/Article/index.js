//
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import storeContext from '../../../storeContext'
import hex2a from '../../../modules/hex2a'
import Editing from './Editing'

const Container = styled.div`
  p,
  .row,
  table {
    margin-bottom: 20px;
  }
  h2 {
    text-align: center;
    font-size: x-large;
    font-weight: 800;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  h3 {
    text-align: center;
    font-size: large;
    font-weight: 800;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`

const Article = ({ id }) => {
  const store = useContext(storeContext)

  const { data } = useQuery(
    gql`
      query ArticleForArticle($id: uuid!) {
        article_by_pk(id: $id) {
          id
          title
          datum
          draft
          content
        }
      }
    `,
    { variables: { id } },
  )
  const doc = data?.article_by_pk

  if (!doc) return null

  if (store.editing) {
    return <Editing doc={doc} />
  }

  const contentDecoded = hex2a(doc.content)
  const createMarkup = () => ({ __html: contentDecoded })

  return (
    <Container>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Container>
  )
}

export default observer(Article)
