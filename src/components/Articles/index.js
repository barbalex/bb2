import React, { Component, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { PanelGroup } from 'react-bootstrap'
import has from 'lodash/has'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'

import ArticlePanel from './ArticlePanel'
import NewArticle from './NewArticle'
import ModalRemoveArticle from './ModalRemoveArticle'
import SwallowPanelGroupProps from '../shared/SwallowPanelGroupProps'
import oceanDarkImage from '../../images/oceanDark.jpg'

const Container = styled.div`
  p,
  div {
    font-size: medium;
  }
  a.list-group-item {
    padding-right: 50px !important;
  }
  .h2-subtitle {
    text-align: center !important;
    font-size: large !important;
    font-weight: 800 !important;
    margin-top: -10px !important;
    margin-bottom: 0 !important;
  }

  .h2-subtitle-top {
    text-align: center !important;
    font-size: large !important;
    font-weight: 800 !important;
    margin-bottom: -40px !important;
  }
  .panel-heading {
    background-image: url(${oceanDarkImage});
  }
  .panel-heading a {
    color: #edf4f8;
    font-weight: bold;
  }
`
const Copyright = styled.p`
  margin-top: 70px;
`

const enhance = compose(inject('store'), withHandlers({}), observer)

class Articles extends Component {
  componentDidMount() {
    const { year, month, day, title, store } = this.props
    store.page.getPage('pages_commentaries')
    if (!!year && !!month && !!day && !!title) {
      store.articles.activeArticleId = `commentaries_${year}_${month}_${day}_${title}`
    }
    this.props.store.articles.getArticles()
  }

  componentDidUpdate() {
    const { year, month, day, title, store } = this.props
    if (!!year && !!month && !!day && !!title) {
      store.articles.activeArticleId = `commentaries_${year}_${month}_${day}_${title}`
    }
    const { activeArticle } = this.props.store.articles
    if (activeArticle && typeof window !== `undefined`) {
      window.setTimeout(() => {
        this.scrollToActivePanel()
      }, 200)
    }
  }

  scrollToActivePanel = () => {
    const node = ReactDOM.findDOMNode(this._activeArticlePanel)
    if (node) {
      const navWrapperOffsetTop = document.getElementById('nav-wrapper')
        .offsetTop
      const reduce = navWrapperOffsetTop > 0 ? navWrapperOffsetTop - 33 : 55
      if (node.offsetTop && typeof window !== `undefined`) {
        window.scroll({ top: node.offsetTop - reduce, behavior: 'smooth' })
      }
    }
  }

  render() {
    const { store } = this.props
    const {
      articles,
      activeArticle,
      showNewArticle,
      articleToRemove,
    } = store.articles
    const activeArticleId = has(activeArticle, '_id') ? activeArticle._id : null

    return (
      <DocumentTitle title="Articles">
        <Container>
          <h1>Articles</h1>
          <PanelGroup
            defaultActiveKey={activeArticleId}
            id="articlesAccordion"
            accordion
          >
            <SwallowPanelGroupProps>
              {articles.map((article, index) => (
                <ArticlePanel
                  key={article._id}
                  doc={article}
                  index={index}
                  year={this.props.year}
                  month={this.props.month}
                  day={this.props.day}
                  title={this.props.title}
                />
              ))}
            </SwallowPanelGroupProps>
          </PanelGroup>
          {showNewArticle && <NewArticle />}
          {articleToRemove && <ModalRemoveArticle />}
          <Copyright>© Jürg Martin Gabriel. All Rights Reserved.</Copyright>
        </Container>
      </DocumentTitle>
    )
  }
}

export default enhance(Articles)
