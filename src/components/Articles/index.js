import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Glyphicon, Tooltip, OverlayTrigger, PanelGroup } from 'react-bootstrap'
import has from 'lodash/has'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'

import Article from './Article'
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
const ToggleDraftGlyphicon = styled(Glyphicon)`
  position: absolute !important;
  right: 40px !important;
  top: 6px !important;
  font-size: 1.5em;
  color: ${props => props['data-color']};
`
const RemoveGlyphicon = styled(Glyphicon)`
  position: absolute !important;
  right: 10px !important;
  top: 6px !important;
  font-size: 1.5em;
  color: #edf4f8;
`
const PanelHeading = styled.div`
  position: relative;
  cursor: pointer;
  border-bottom-right-radius: ${props => (!props.isActiveArticle ? '3px' : 0)};
  border-bottom-left-radius: ${props => (!props.isActiveArticle ? '3px' : 0)};
`
const PanelBody = styled.div`
  margin-top: ${props => props['data-panelbodymargintop']};
  padding: ${props => props['data-panelbodypadding']};
  max-height: ${typeof window !== `undefined` ? window.innerHeight - 141 : 0}px;
  overflow-y: auto;
`
const Copyright = styled.p`
  margin-top: 70px;
`

const enhance = compose(
  inject('store'),
  withHandlers({
    onClickArticle: props => (id, e) => {
      const { activeArticle, getArticle } = props.store.articles
      // prevent higher level panels from reacting
      e.stopPropagation()
      const idToGet = !activeArticle || activeArticle._id !== id ? id : null
      getArticle(idToGet)
    },
    // prevent higher level panels from reacting
    onClickArticleCollapse: props => event => event.stopPropagation(),
    onRemoveArticle: props => (docToRemove, event) => {
      event.preventDefault()
      event.stopPropagation()
      props.store.articles.setArticleToRemove(docToRemove)
    },
    onToggleDraft: props => (doc, event) => {
      event.preventDefault()
      event.stopPropagation()
      props.store.articles.toggleDraftOfArticle(doc)
    },
  }),
  observer,
)

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

  removeArticleGlyph = doc => (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="removeThisArticle">remove</Tooltip>}
    >
      <RemoveGlyphicon
        glyph="remove-circle"
        onClick={this.props.onRemoveArticle.bind(this, doc)}
      />
    </OverlayTrigger>
  )

  toggleDraftGlyph = doc => {
    const { onToggleDraft } = this.props
    const glyph = doc.draft ? 'ban-circle' : 'ok-circle'
    const color = doc.draft ? 'red' : '#00D000'

    return (
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="toggleDraft">
            {doc.draft ? 'publish' : 'unpublish'}
          </Tooltip>
        }
      >
        <ToggleDraftGlyphicon
          glyph={glyph}
          data-color={color}
          onClick={onToggleDraft.bind(this, doc)}
        />
      </OverlayTrigger>
    )
  }

  articlesComponent = () => {
    const { store, onClickArticle, onClickArticleCollapse } = this.props
    const { articles, activeArticle } = store.articles

    if (articles.length > 0) {
      return articles.map((doc, index) => {
        const isArticle = !!activeArticle
        const isActiveArticle = isArticle
          ? doc._id === activeArticle._id
          : false
        const showEditingGlyphons = !!store.login.email
        const panelbodypadding = store.editing ? '0 !important' : '15px'
        const panelbodymargintop = store.editing ? '-1px' : 0

        // use pure bootstrap.
        // advantage: can add edit icon to panel-heading
        return (
          <div
            key={doc._id}
            ref={c => {
              if (isActiveArticle) {
                this._activeArticlePanel = c
              } else {
                this[`_articlePanel${doc._id}`] = c
              }
            }}
            className="panel panel-default"
          >
            <PanelHeading
              className="panel-heading"
              role="tab"
              id={`heading${index}`}
              onClick={onClickArticle.bind(this, doc._id)}
            >
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#articlesAccordion"
                  href={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`#collapse${index}`}
                >
                  {doc.title}
                </a>
              </h4>
              {showEditingGlyphons && this.toggleDraftGlyph(doc)}
              {showEditingGlyphons && this.removeArticleGlyph(doc)}
            </PanelHeading>
            {isActiveArticle && (
              <div
                id={`#collapse${index}`}
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby={`heading${index}`}
                onClick={onClickArticleCollapse}
              >
                <PanelBody
                  className="panel-body"
                  data-panelbodypadding={panelbodypadding}
                  data-panelbodymargintop={panelbodymargintop}
                >
                  <Article />
                </PanelBody>
              </div>
            )}
          </div>
        )
      })
    }
    return null
  }

  render() {
    const { store } = this.props
    const { activeArticle, showNewArticle, articleToRemove } = store.articles
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
              {this.articlesComponent()}
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
