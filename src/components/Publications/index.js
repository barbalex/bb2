//
import React from 'react'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { gql, useQuery } from '@apollo/client'

import PublicationsGroup from './PublicationsGroup'
import oceanDarkImage from '../../images/oceanDark.jpg'

const Container = styled.div`
  p,
  div {
    font-size: medium;
  }
  margin-bottom: 20px;
  .category > .panel-collapse > .panel-body {
    padding: 0 0 !important;
  }
  .panel.month {
    margin-top: 0 !important;
    border-radius: 0 !important;
    border-top-width: 0 !important;
    border-right-width: 0 !important;
    border-left-width: 0 !important;
  }
  .panel.month .panel-heading {
    background-color: transparent;
  }
  .panel.month .panel-heading:hover {
    background-color: #f5f5f5;
  }
  .panel-heading {
    cursor: pointer;
  }
  .panel.month > .panel-heading h4 {
    font-weight: bold;
    z-index: 0;
  }
  .panel.month:last-of-type {
    border-bottom-width: 0 !important;
  }
`
const PanelGroup = styled.div`
  margin-bottom: 0 !important;
  > div > .panel-heading {
    background-image: url(${oceanDarkImage});
  }
  &.not-active > .panel-heading {
    border-radius: 3px;
  }
  > div > .panel-heading a {
    color: #edf4f8;
    font-weight: bold;
  }
`

const Publications = ({ id: activeId }) => {
  const { data } = useQuery(
    gql`
      query PublicationCategoriesForPublications {
        categories: publication_aggregate(
          distinct_on: cat_sort
          order_by: { cat_sort: asc }
        ) {
          nodes {
            category
          }
        }
      }
    `,
  )
  const categories = (data?.categories?.nodes ?? []).map((c) => c.category)

  console.log('Publications, categories:', categories)

  return (
    <DocumentTitle title="Publications">
      <Container>
        <h1>Publications</h1>
        <PanelGroup
          className="panel-group"
          id="publicationsAccordion"
          role="tablist"
        >
          {categories.map((category) => (
            <PublicationsGroup
              key={category}
              category={category}
              activeId={activeId}
            />
          ))}
        </PanelGroup>
      </Container>
    </DocumentTitle>
  )
}

export default Publications
