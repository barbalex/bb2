// @flow
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Glyphicon, Tooltip, OverlayTrigger, PanelGroup } from 'react-bootstrap'
import { has } from 'lodash'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import Commentary from './commentary.js'
import NewCommentary from './newCommentary.js'
import ModalRemoveCommentary from './modalRemoveCommentary.js'

const glyphStyle = {
  position: 'absolute',
  right: 10,
  top: 6,
  fontSize: '1.5em',
  color: '#edf4f8',
}

const enhance = compose(
  inject(`store`),
  withState('docToRemove', 'changeDocToRemove', null),
  withHandlers({
    onClickCommentary: props => (id, e) => {
      const { activeCommentary, store } = props
      // prevent higher level panels from reacting
      e.stopPropagation()
      const idToGet = !activeCommentary || activeCommentary._id !== id
        ? id
        : null
      store.commentaries.getCommentary(idToGet)
    },
    // prevent higher level panels from reacting
    onClickCommentaryCollapse: props => event => event.stopPropagation(),
    onRemoveCommentary: props => (docToRemove, event) => {
      event.preventDefault()
      event.stopPropagation()
      props.changeDocToRemove(docToRemove)
    },
    onToggleDraft: props => (doc, event) => {
      event.preventDefault()
      event.stopPropagation()
      props.store.commentaries.toggleDraftOfCommentary(doc)
    },
    removeCommentary: props => remove => {
      if (remove) {
        props.store.commentaries.removeCommentary(props.docToRemove)
      }
      props.changeDocToRemove(null)
    },
  }),
  observer,
)

class Commentaries extends Component {
  displayName: 'Commentaries'

  props: {
    store: Object,
    commentaries: Array<Object>,
    activeCommentary: Object,
    email: string,
    showNewCommentary: boolean,
    docToRemove: Object,
    onClickCommentary: () => void,
    onClickCommentaryCollapse: () => void,
    onRemoveCommentary: () => void,
    onToggleDraft: () => void,
    removeCommentary: () => void,
  }

  componentDidMount() {
    const { store } = this.props
    store.commentaries.getCommentaries()
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeCommentary) {
      if (!prevProps.activeCommentary) {
        /**
         * this is first render
         * componentDidUpdate and componentDidMount are actually executed
         * BEFORE the dom elements are done being drawn,
         * but AFTER they've been passed from React to the browser's DOM
         */
        window.setTimeout(() => {
          this.scrollToActivePanel()
        }, 200)
      } else if (
        this.props.activeCommentary._id !== prevProps.activeCommentary._id
      ) {
        // this is later rerender
        // only scroll into view if the active item changed last render
        this.scrollToActivePanel()
      }
    }
  }

  scrollToActivePanel() {
    // $FlowIssue
    const node = ReactDOM.findDOMNode(this._activeCommentaryPanel)
    if (node) {
      const navWrapperOffsetTop = document.getElementById('nav-wrapper')
        .offsetTop
      const reduce = navWrapperOffsetTop > 0 ? navWrapperOffsetTop - 33 : 55
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

  removeCommentaryGlyph = doc => (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id="removeThisCommentary">
          remove
        </Tooltip>
      }
    >
      <Glyphicon
        glyph="remove-circle"
        style={glyphStyle}
        onClick={this.props.onRemoveCommentary.bind(this, doc)}
      />
    </OverlayTrigger>
  )

  toggleDraftGlyph(doc) {
    const { onToggleDraft } = this.props
    const glyph = doc.draft ? 'ban-circle' : 'ok-circle'
    const color = doc.draft ? 'red' : '#00D000'
    const glyphStyle = {
      position: 'absolute',
      right: 40,
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

  commentariesComponent() {
    const {
      store,
      commentaries,
      activeCommentary,
      email,
      onClickCommentary,
      onClickCommentaryCollapse,
    } = this.props

    if (commentaries.length > 0) {
      return commentaries.map((doc, index) => {
        const isCommentary = !!activeCommentary
        const isActiveCommentary = isCommentary
          ? doc._id === activeCommentary._id
          : false
        const showEditingGlyphons = !!email
        const panelHeadingStyle = {
          position: 'relative',
          cursor: 'pointer',
        }
        const panelBodyPadding = store.editing ? 0 : 15
        const panelBodyMarginTop = store.editing ? '-1px' : 0
        const panelBodyStyle = {
          padding: panelBodyPadding,
          marginTop: panelBodyMarginTop,
          maxHeight: window.innerHeight - 141,
          overflowY: 'auto',
        }
        if (!isActiveCommentary) {
          // $FlowIssue
          Object.assign(panelHeadingStyle, {
            borderBottomRightRadius: 3,
            borderBottomLeftRadius: 3,
          })
        }

        // use pure bootstrap.
        // advantage: can add edit icon to panel-heading
        return (
          <div
            key={doc._id}
            ref={c => {
              if (isActiveCommentary) {
                // $FlowIssue
                this._activeCommentaryPanel = c
              } else {
                // $FlowIssue
                this[`_commentaryPanel${doc._id}`] = c
              }
            }}
            className="panel panel-default"
          >
            <div
              className="panel-heading"
              role="tab"
              id={`heading${index}`}
              onClick={onClickCommentary.bind(this, doc._id)}
              style={panelHeadingStyle}
            >
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#commentariesAccordion"
                  href={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`#collapse${index}`}
                >
                  {doc.title}
                </a>
              </h4>
              {showEditingGlyphons && this.toggleDraftGlyph(doc)}
              {showEditingGlyphons && this.removeCommentaryGlyph(doc)}
            </div>
            {isActiveCommentary &&
              <div
                id={`#collapse${index}`}
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby={`heading${index}`}
                onClick={onClickCommentaryCollapse}
              >
                <div className="panel-body" style={panelBodyStyle}>
                  <Commentary activeCommentary={activeCommentary} />
                </div>
              </div>}
          </div>
        )
      })
    }
    return null
  }

  render() {
    const {
      activeCommentary,
      showNewCommentary,
      docToRemove,
      removeCommentary,
    } = this.props
    const activeCommentaryId = has(activeCommentary, '_id')
      ? activeCommentary._id
      : null
    return (
      <div className="commentaries">
        <h1>
          Commentaries
        </h1>
        <PanelGroup
          activeKey={activeCommentaryId}
          id="commentariesAccordion"
          accordion
        >
          {this.commentariesComponent()}
        </PanelGroup>
        {showNewCommentary && <NewCommentary />}
        {docToRemove &&
          <ModalRemoveCommentary
            doc={docToRemove}
            removeCommentary={removeCommentary}
          />}
      </div>
    )
  }
}

export default enhance(Commentaries)
