// @flow
import React, { useContext, useState, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { Base64 } from 'js-base64'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import Editor from '../shared/Editor'
import Meta from '../Page/PageMeta'
import storeContext from '../../storeContext'

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
const MetaButton = styled(Button)`
  position: fixed;
  bottom: 10px;
  right: 10px;
`

const Article = () => {
  const store = useContext(storeContext)
  const { activeArticle } = store.articles

  const [showMeta, changeShowMeta] = useState(false)

  const onClickMeta = useCallback(() => changeShowMeta(!showMeta), [showMeta])
  const onCloseMeta = useCallback(() => changeShowMeta(false), [])

  const articleEncoded = activeArticle.article
  const articleDecoded = articleEncoded ? Base64.decode(articleEncoded) : null

  if (store.editing) {
    return (
      <Container>
        {showMeta && <Meta doc={activeArticle} onCloseMeta={onCloseMeta} />}
        <Editor
          docType="article"
          doc={activeArticle}
          articleDecoded={articleDecoded}
        />
        <MetaButton onClick={onClickMeta}>images</MetaButton>
      </Container>
    )
  }
  const createMarkup = () => ({ __html: articleDecoded })
  return (
    <Container>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Container>
  )
}

Article.displayName = 'Article'

export default observer(Article)