//
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { gql, useQuery } from '@apollo/client'

import Editor from './shared/Editor'
import storeContext from '../storeContext'
import hex2a from '../modules/hex2a'

const Container = styled.div`
  p,
  div {
    font-size: medium;
  }
  h1 {
    font-size: 36px;
    font-weight: 500;
  }
  h2 {
    font-size: x-large;
    font-weight: 700;
  }
  h3 {
    font-size: large;
    font-weight: 700;
  }
`

const AboutUs = () => {
  const store = useContext(storeContext)
  let title = 'About us'

  const { data } = useQuery(
    gql`
      query AboutUsForAboutUs($id: uuid!) {
        page_by_pk(id: $id) {
          id
          name
          content
        }
      }
    `,
    { variables: { id: '24c9db53-6d7d-4a97-98b4-666c9aaa85c9' } },
  )
  const doc = data?.page_by_pk
  const contentEncoded = doc?.content
  const contentDecoded = hex2a(contentEncoded)
  // console.log('AboutUs, contentEncoded:', contentEncoded)
  // console.log('AboutUs, contentDecoded:', contentDecoded)

  if (!data) return null

  if (store.editing) {
    return (
      <div className="page">
        <Editor docType="page" doc={doc} contentDecoded={contentDecoded} />
      </div>
    )
  }

  const createMarkup = () => ({ __html: contentDecoded })

  return (
    <DocumentTitle title={title}>
      <Container className="page">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </Container>
    </DocumentTitle>
  )
}

AboutUs.displayName = 'Page'

export default observer(AboutUs)
