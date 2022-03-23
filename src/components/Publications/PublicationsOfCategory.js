import React from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

import PublicationPanel from './PublicationPanel'

const PanelGroup = styled.div`
  margin-bottom: 0 !important;
`

const PublicationsOfCategory = ({ category, activeId }) => {
  const { data } = useQuery(
    gql`
      query PublicationsForPublicationsOfCategory($category: String) {
        publication(
          order_by: [{ sort: asc }, { title: asc }]
          where: { category: { _eq: $category } }
        ) {
          id
        }
      }
    `,
    { variables: { category } },
  )
  const publications = data?.publication ?? []

  return (
    <PanelGroup className="panel-group" id={category}>
      {publications.map((doc) => (
        <PublicationPanel
          key={doc.id}
          id={doc.id}
          category={category}
          activeId={activeId}
        />
      ))}
    </PanelGroup>
  )
}
export default PublicationsOfCategory
