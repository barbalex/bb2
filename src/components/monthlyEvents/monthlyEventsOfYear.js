// @flow
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PanelGroup, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import has from 'lodash/has'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import MonthlyEvent from './monthlyEvent.js'
import getYearFromEventId from '../../modules/getYearFromEventId.js'
import getMonthFromEventId from '../../modules/getMonthFromEventId.js'
import ModalRemoveMonthlyEvent from './modalRemoveMonthlyEvent.js'

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
    onClickMonthlyEvent: props => (id: string, event: Object): void => {
      const { activeMonthlyEvent, store } = props
      // prevent higher level panels from reacting
      event.stopPropagation()
      const idToGet = !activeMonthlyEvent ||
        (activeMonthlyEvent._id && activeMonthlyEvent._id !== id)
        ? id
        : null
      store.monthlyEvents.getMonthlyEvent(idToGet)
    },
    onClickEventCollapse: props => (event: Object): void => {
      // prevent higher level panels from reacting
      event.stopPropagation()
    },
    onRemoveMonthlyEvent: props => (
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
      props.store.monthlyEvents.toggleDraftOfMonthlyEvent(doc)
    },
    removeMonthlyEvent: props => (remove: boolean): void => {
      const { docToRemove, changeDocToRemove, store } = props
      if (remove) {
        store.monthlyEvents.removeMonthlyEvent(docToRemove)
      }
      changeDocToRemove(null)
    },
  }),
  observer,
)

class MonthlyEventsOfYear extends Component {
  displayName: 'MonthlyEventsOfYear'

  props: {
    store: Object,
    year: string,
    monthlyEvents: Array<Object>,
    activeMonthlyEvent: Object,
    editing: boolean,
    email: string,
    docToRemove: Object,
    changeDocToRemove: () => void,
    onSaveMonthlyEventArticle: () => void,
    onClickMonthlyEvent: () => void,
    onClickEventCollapse: () => void,
    onRemoveMonthlyEvent: () => void,
    onToggleDraft: () => void,
    removeMonthlyEvent: () => void,
  }

  componentDidMount() {
    // somehow on first load the panel does not scroll up far enough
    // call for more
    this.scrollToActivePanel('more')
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeMonthlyEvent) {
      const activeMonthlyEventChanged =
        !prevProps.activeMonthlyEvent ||
        this.props.activeMonthlyEvent._id !== prevProps.activeMonthlyEvent._id
      if (activeMonthlyEventChanged) {
        // this is later rerender
        // only scroll into view if the active item changed last render
        this.scrollToActivePanel()
      }
    }
  }

  scrollToActivePanel(more) {
    // $FlowIssue
    const node = ReactDOM.findDOMNode(this._activeMonthlyEventPanel)
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

  removeMonthlyEventGlyph(doc) {
    const { onRemoveMonthlyEvent } = this.props

    return (
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="removeThisMonthlyEvent">
            remove
          </Tooltip>
        }
      >
        <Glyphicon
          glyph="remove-circle"
          style={glyphStyle}
          onClick={onRemoveMonthlyEvent.bind(this, doc)}
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

  monthlyEventsComponent(year) {
    const {
      activeMonthlyEvent,
      editing,
      email,
      onSaveMonthlyEventArticle,
      onClickMonthlyEvent,
      onClickEventCollapse,
    } = this.props
    let { monthlyEvents } = this.props
    // filter only events of current year
    monthlyEvents = monthlyEvents.filter(
      monthlyEvent => getYearFromEventId(monthlyEvent._id) === year,
    )
    return monthlyEvents.map((doc, dIndex) => {
      const isActiveMonthlyEvent = has(activeMonthlyEvent, '_id')
        ? doc._id === activeMonthlyEvent._id
        : false
      const month = getMonthFromEventId(doc._id)
      const showEditingGlyphons = !!email
      const panelHeadingStyle = {
        position: 'relative',
      }
      const panelBodyStyle = {
        maxHeight: window.innerHeight - 127,
        overflowY: 'auto',
      }
      const ref = isActiveMonthlyEvent
        ? '_activeMonthlyEventPanel'
        : `_monthlyEventPanel${doc._id}`

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
            onClick={onClickMonthlyEvent.bind(this, doc._id)}
            style={panelHeadingStyle}
          >
            <h4 className="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                data-parent={`#${year}`}
                href={`#collapse${dIndex}`}
                aria-expanded="false"
                aria-controls={`#collapse${dIndex}`}
              >
                {month}
              </a>
            </h4>
            {showEditingGlyphons && this.toggleDraftGlyph(doc)}
            {showEditingGlyphons && this.removeMonthlyEventGlyph(doc)}
          </div>
          {isActiveMonthlyEvent &&
            <div
              id={`#collapse${dIndex}`}
              className="panel-collapse collapse in"
              role="tabpanel"
              aria-labelledby={`heading${dIndex}`}
              onClick={onClickEventCollapse}
            >
              <div className="panel-body" style={panelBodyStyle}>
                <MonthlyEvent
                  activeMonthlyEvent={activeMonthlyEvent}
                  year={year}
                  month={month}
                  editing={editing}
                  onSaveMonthlyEventArticle={onSaveMonthlyEventArticle}
                />
              </div>
            </div>}
        </div>
      )
    })
  }

  render() {
    const {
      year,
      activeMonthlyEvent,
      docToRemove,
      removeMonthlyEvent,
    } = this.props
    const activeEventId = has(activeMonthlyEvent, '_id')
      ? activeMonthlyEvent._id
      : null

    return (
      <PanelGroup
        activeKey={activeEventId}
        id={year}
        ref={c => {
          // $FlowIssue
          this[year] = c
        }}
        accordion
      >
        {this.monthlyEventsComponent(year)}
        {docToRemove &&
          <ModalRemoveMonthlyEvent
            doc={docToRemove}
            removeMonthlyEvent={removeMonthlyEvent}
          />}
      </PanelGroup>
    )
  }
}

export default enhance(MonthlyEventsOfYear)
