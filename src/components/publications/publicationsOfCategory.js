// @flow
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import Publication from './publication.js'
import ModalRemovePublication from './modalRemovePublication.js'

const glyphStyle = {
  position: 'absolute',
  right: 8,
  top: 6,
  fontSize: '1.5em',
}

const enhance = compose(
  inject(`store`),
  withState('docToRemove', 'changeDocToRemove', null),
  withHandlers({
    onClickPublication: props => (id: string, e: Object): void => {
      // prevent higher level panels from reacting
      e.stopPropagation()
      const { activePublication, getPublication } = props.store.publications
      const idToGet = !activePublication || activePublication._id !== id
        ? id
        : null
      getPublication(idToGet)
    },
    onClickEventCollapse: props => (event: Object): void => {
      // prevent higher level panels from reacting
      event.stopPropagation()
    },
    onRemovePublication: props => (
      docToRemove: Object,
      event: Object,
    ): void => {
      event.preventDefault()
      event.stopPropagation()
      props.changeDocToRemove(docToRemove)
    },
    onToggleDraft: props => (doc: Object, event: Object): void => {
      event.preventDefault()
      event.stopPropagation()
      props.store.publications.toggleDraftOfPublication(doc)
    },
    removePublication: props => (remove: boolean): void => {
      const { docToRemove, changeDocToRemove, store } = props
      if (remove) store.publications.removePublication(docToRemove)
      changeDocToRemove(null)
    },
  }),
  observer,
)

class PublicationsOfCategory extends Component {
  displayName: 'PublicationOfCategory'

  propTypes: {
    store: Object,
    category: string,
    docToRemove: Object,
    changeDocToRemove: () => void,
    onClickPublication: () => void,
    onClickEventCollapse: () => void,
    onRemovePublication: () => void,
    onToggleDraft: () => void,
    removePublication: () => void,
  }

  componentDidMount() {
    // somehow on first load the panel does not scroll up far enough
    // call for more
    this.scrollToActivePanel('more')
  }

  componentDidUpdate(prevProps) {
    if (this.props.store.publications.activePublication) {
      if (
        !prevProps.store.publications.activePublication ||
        this.props.store.publications.activePublication._id !==
          prevProps.store.publications.activePublication._id
      ) {
        // this is later rerender
        // only scroll into view if the active item changed last render
        this.scrollToActivePanel()
      }
    }
  }

  scrollToActivePanel(more) {
    // $FlowIssue
    const node = ReactDOM.findDOMNode(this._activePublicationPanel)
    if (node) {
      const navWrapperOffsetTop = document.getElementById('nav-wrapper')
        .offsetTop
      let reduce = navWrapperOffsetTop > 0 ? navWrapperOffsetTop - 30 : 52
      // somehow on first load the panel does not scroll up far enough
      if (more) reduce -= 5
      if (node.offsetTop) {
        window.$('html, body').animate(
          {
            scrollTop: node.offsetTop - reduce,
          },
          500,
        )
      }
    }
  }

  removePublicationGlyph(doc) {
    const { onRemovePublication } = this.props

    return (
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="removeThisPublication">
            remove
          </Tooltip>
        }
      >
        <Glyphicon
          glyph="remove-circle"
          style={glyphStyle}
          onClick={onRemovePublication.bind(this, doc)}
        />
      </OverlayTrigger>
    )
  }

  toggleDraftGlyph(doc) {
    const { onToggleDraft } = this.props
    const glyph = doc.draft ? 'ban-circle' : 'ok-circle'
    const color = doc.draft ? 'red' : 'green'
    const glyphStyle = {
      position: 'absolute',
      right: 38,
      top: 6,
      fontSize: '1.5em',
      color,
    }
    return (
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="toggleDraft">
            {doc.draft ? 'publish' : 'unpublish'}
          </Tooltip>
        }
      >
        <Glyphicon
          glyph={glyph}
          style={glyphStyle}
          onClick={onToggleDraft.bind(this, doc)}
        />
      </OverlayTrigger>
    )
  }

  publicationsComponent(category) {
    const { store, onClickPublication, onClickEventCollapse } = this.props
    let { publications, activePublication } = store.publications
    // filter only publication of current category
    publications = publications.filter(
      publication => publication.category === category,
    )
    publications = publications.sort((a, b) => {
      if (a.order && b.order) {
        if (a.order < b.order) return -1
        return 1
      }
      if (a.title < b.title) return -1
      return 1
    })
    return publications.map((doc, dIndex) => {
      const isActivePublication = activePublication
        ? doc._id === activePublication._id
        : false
      const showEditingGlyphons = !!store.login.email
      const panelHeadingStyle = {
        position: 'relative',
      }
      const panelBodyStyle = {
        maxHeight: window.innerHeight - 127,
        overflowY: 'auto',
      }
      const ref = isActivePublication
        ? '_activePublicationPanel'
        : `_publicationPanel${doc._id}`

      // use pure bootstrap.
      // advantage: can add edit icon to panel-heading
      return (
        <div
          key={dIndex}
          ref={c => {
            // $FlowIssue
            this[ref] = c
          }}
          className="panel panel-default month"
        >
          <div
            className="panel-heading"
            role="tab"
            id={`heading${dIndex}`}
            onClick={onClickPublication.bind(this, doc._id)}
            style={panelHeadingStyle}
          >
            <h4 className="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                data-parent={`#${category}`}
                href={`#collapse${dIndex}`}
                aria-expanded="false"
                aria-controls={`#collapse${dIndex}`}
              >
                {doc.title}
              </a>
            </h4>
            {showEditingGlyphons && this.toggleDraftGlyph(doc)}
            {showEditingGlyphons && this.removePublicationGlyph(doc)}
          </div>
          {isActivePublication &&
            <div
              id={`#collapse${dIndex}`}
              className="panel-collapse collapse in"
              role="tabpanel"
              aria-labelledby={`heading${dIndex}`}
              onClick={onClickEventCollapse}
            >
              <div className="panel-body" style={panelBodyStyle}>
                <Publication />
              </div>
            </div>}
        </div>
      )
    })
  }

  render() {
    const { category, docToRemove, removePublication } = this.props

    return (
      <div
        className="panel-group"
        id={category}
        ref={c => {
          // $FlowIssue
          this[category] = c
        }}
      >
        {this.publicationsComponent(category)}
        {docToRemove &&
          <ModalRemovePublication
            doc={docToRemove}
            removePublication={removePublication}
          />}
      </div>
    )
  }
}
export default enhance(PublicationsOfCategory)
