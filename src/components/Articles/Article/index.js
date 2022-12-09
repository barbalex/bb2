//
import React, { useContext, useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import styled from '@emotion/styled'
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

  const { data, refetch, networkStatus } = useQuery(
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
  // console.log('Article', { networkStatus, loading })

  // need to know previous network status
  // to not refetch on first load (previous status 1)
  // but rather only on exiting editing mode
  const networkstatusRef = useRef()
  useEffect(() => {
    networkstatusRef.current = networkStatus
    // console.log('network status set to:', networkstatusRef.current)
  }, [networkStatus])
  useEffect(() => {
    if (
      !store.editing &&
      networkStatus === 7 &&
      networkstatusRef.current !== 1
    ) {
      // console.log('Article refetching, networkStatus:', networkStatus)
      refetch()
    }
  }, [networkStatus, refetch, store.editing])

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
