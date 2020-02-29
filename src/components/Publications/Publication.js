//
import React, { useContext } from 'react'
import { Base64 } from 'js-base64'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import Editor from '../shared/Editor'
import storeContext from '../../storeContext'

const Container = styled.div`
  h2 {
    font-size: medium;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .mce-tinymce {
    margin: -15px;
    width: calc(100% + 27px) !important;
  }
`

const Publication = () => {
  const store = useContext(storeContext)
  const { activePublication } = store.publications
  const articleEncoded = activePublication.article
  const articleDecoded = articleEncoded ? Base64.decode(articleEncoded) : null

  if (store.editing) {
    return (
      <Container>
        <Editor
          docType="publication"
          doc={activePublication}
          articleDecoded={articleDecoded}
        />
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

Publication.displayName = 'Publication'

export default observer(Publication)
