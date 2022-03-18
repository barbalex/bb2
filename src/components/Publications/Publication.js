//
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import Editor from '../shared/Editor'
import storeContext from '../../storeContext'
import hex2a from '../../modules/hex2a'

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

const Publication = ({ id }) => {
  const { data } = useQuery(
    gql`
      query PublicationForPublication($id: uuid!) {
        publication_by_pk(id: $id) {
          id
          content
        }
      }
    `,
    { variables: { id } },
  )
  const doc = data?.publication_by_pk

  const store = useContext(storeContext)

  if (!doc) return null

  const contentDecoded = hex2a(doc.content)

  if (store.editing) {
    return (
      <Container>
        <Editor
          docType="publication"
          doc={doc}
          contentDecoded={contentDecoded}
        />
      </Container>
    )
  }

  const createMarkup = () => ({ __html: contentDecoded })
  return (
    <Container>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Container>
  )
}

Publication.displayName = 'Publication'

export default observer(Publication)
