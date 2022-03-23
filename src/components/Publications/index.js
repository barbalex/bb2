//
import React from 'react'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'

import PublicationsGroup from './PublicationsGroup'
import oceanDarkImage from '../../images/oceanDark.jpg'
import categories from './categories'

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

const Publications = ({ id: activeId }) => (
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

export default Publications
