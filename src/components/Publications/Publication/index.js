//
import React, { useContext, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import storeContext from '../../../storeContext'
import hex2a from '../../../modules/hex2a'
import Editing from './Editing'

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
  const { data, refetch, networkStatus } = useQuery(
    gql`
      query PublicationForPublication($id: uuid!) {
        publication_by_pk(id: $id) {
          id
          title
          category
          content
        }
      }
    `,
    { variables: { id } },
  )
  const doc = data?.publication_by_pk

  const store = useContext(storeContext)

  // need to know previous network status
  // to not refetch on first load (previous status 1)
  // but rather only on exiting editing mode
  const networkstatusRef = useRef()
  useEffect(() => {
    networkstatusRef.current = networkStatus
  }, [networkStatus])
  useEffect(() => {
    if (
      !store.editing &&
      networkStatus === 7 &&
      networkstatusRef.current !== 1
    ) {
      refetch()
    }
  }, [networkStatus, refetch, store.editing])

  if (!doc) return null

  const contentDecoded = hex2a(doc.content)

  if (store.editing) {
    return <Editing doc={doc} />
  }

  const createMarkup = () => ({ __html: contentDecoded })
  return (
    <Container>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Container>
  )
}

export default observer(Publication)
