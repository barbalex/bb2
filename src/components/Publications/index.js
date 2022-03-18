//
import React, { useContext, useEffect } from 'react'
import sortBy from 'lodash/sortBy'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'

import PublicationsGroup from './PublicationsGroup'
import NewPublication from './NewPublication'
import oceanDarkImage from '../../images/oceanDark.jpg'
import storeContext from '../../storeContext'

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
const orderByCategory = {
  Academic: 3,
  'European Union': 1,
  'IOs & NGOs': 2,
}

const Publications = ({ category, title }) => {
  const store = useContext(storeContext)
  const {
    publications,
    getPublications,
    getPublicationCategories,
    showNewPublication,
  } = store.publications
  const publicationCategories = publications ? getPublicationCategories() : []

  useEffect(() => {
    getPublications()
  }, [getPublications])

  useEffect(() => {
    if (!!category && !!title) {
      store.publications.activePublicationId = `publications_${category}_${title}`
    } else {
      store.publications.activePublicationId = null
    }
  }, [
    category,
    store.publications.activePublicationId,
    title,
    store.publications,
  ])

  return (
    <DocumentTitle title="Publications">
      <Container>
        <h1>Publications</h1>
        <PanelGroup
          className="panel-group"
          id="publicationsAccordion"
          role="tablist"
        >
          {sortBy(publicationCategories, (cat) => {
            let order = orderByCategory[cat]
            if (!order) order = 4
            return order
          }).map((category) => (
            <PublicationsGroup key={category} category={category} />
          ))}
        </PanelGroup>
        {showNewPublication && <NewPublication />}
      </Container>
    </DocumentTitle>
  )
}

export default observer(Publications)
