//
import React, { useContext } from 'react'
import { Base64 } from 'js-base64'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { gql, useApolloClient, useQuery } from '@apollo/client'

import Editor from '../shared/Editor'
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

const Article = ({ id }) => {
  const store = useContext(storeContext)
  console.log('Article, id:', id)

  const { data } = useQuery(
    gql`
      query ArticleForArticle($id: uuid!) {
        article_by_pk(id: $id) {
          id
          title
          draft
          content
        }
      }
    `,
    { variables: { id } },
  )
  const doc = data?.article_by_pk
  console.log('Article, doc:', doc)

  if (!doc) return null

  const articleEncoded = doc.content
  console.log('Article, articleEncoded:', articleEncoded)
  const articleDecoded = articleEncoded ? Base64.decode(articleEncoded) : null
  console.log('Article, articleDecoded:', articleDecoded)

  if (store.editing) {
    return (
      <Container>
        <Editor docType="article" doc={doc} articleDecoded={articleDecoded} />
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

export default observer(Article)
