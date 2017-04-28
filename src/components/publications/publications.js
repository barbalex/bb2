// @flow
import React, { Component } from 'react'
import sortBy from 'lodash/sortBy'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

import PublicationsOfCategory from './publicationsOfCategory.js'
import NewPublication from './newPublication.js'

const containerStyle = {
  marginBottom: 20,
}
const orderByCategory = {
  Academic: 3,
  'European Union': 1,
  'IOs & NGOs': 2,
}

const enhance = compose(
  inject(`store`),
  withHandlers({
    onClickCategory: props => (activePublicationCategory: string): void =>
      props.store.publications.setPublicationCategory(
        activePublicationCategory,
      ),
  }),
  observer,
)

class Publications extends Component {
  displayName: 'Publications'

  props: {
    store: Object,
    onClickCategory: () => void,
  }

  componentDidMount() {
    this.props.store.publications.getPublications()
  }

  publicationCategoriesComponent(activePublicationCategory) {
    const { store, onClickCategory } = this.props
    let publicationCategories = store.publications.getPublicationCategories()
    const { publications } = store.publications

    if (publications.length > 0 && publicationCategories.length > 0) {
      publicationCategories = sortBy(publicationCategories, cat => {
        let order = orderByCategory[cat]
        if (!order) order = 4
        return order
      })
      return publicationCategories.map(category => {
        // deactivated when changed to showing open list:
        // const className = (
        //   category === activePublicationCategory ?
        //   'panel panel-default category active' :
        //   'panel panel-default category not-active'
        // )
        return (
          <div
            key={category}
            className="panel panel-default category active"
            onClick={onClickCategory.bind(this, category)}
          >
            <div className="panel-heading" role="tab" id={`heading${category}`}>
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#publicationsAccordion"
                  href={`#${category}`}
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {category}
                </a>
              </h4>
            </div>
            <PublicationsOfCategory category={category} />
          </div>
        )
      })
    }
    return null
  }

  render() {
    const {
      activePublicationCategory,
      showNewPublication,
    } = this.props.store.publications

    return (
      <div id="publications" style={containerStyle}>
        <h1>
          Publications
        </h1>
        <div className="panel-group" id="publicationsAccordion" role="tablist">
          {this.publicationCategoriesComponent(activePublicationCategory)}
        </div>
        {showNewPublication && <NewPublication />}
      </div>
    )
  }
}

export default enhance(Publications)
