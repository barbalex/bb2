import React, { useCallback, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import Actor from './Actor'
import storeContext from '../../storeContext'

const PanelHeading = styled.div`
  position: relative;
  cursor: pointer;
  border-bottom-right-radius: ${props => (!props.isActiveActor ? '3px' : 0)};
  border-bottom-left-radius: ${props => (!props.isActiveActor ? '3px' : 0)};
`
const PanelBody = styled.div`
  padding: ${props => props['data-panelbodypadding']};
  margin-top: ${props => props['data-panelbodymargintop']};
  max-height: ${typeof window !== `undefined` ? window.innerHeight - 141 : 0}px;
  overflow-y: auto;
`
const RemoveGlyphicon = styled(Glyphicon)`
  position: absolute !important;
  right: 10px !important;
  top: 6px !important;
  font-size: 1.5em;
  color: #edf4f8;
`
const ToggleDraftGlyphicon = styled(Glyphicon)`
  position: absolute !important;
  right: 40px !important;
  top: 6px !important;
  font-size: 1.5em;
  color: ${props => props['data-color']};
`

const ActorPanel = ({ doc, index, category }) => {
  const store = useContext(storeContext)
  const {
    activeActor,
    activeActorId,
    getActor,
    toggleDraftOfActor,
    setActorToRemove,
  } = store.actors
  const isActiveActor = activeActor ? doc._id === activeActor._id : false
  const showEditingGlyphons = !!store.login.email
  const panelbodypadding = store.editing ? '0 !important' : '15px'
  const panelbodymargintop = store.editing ? '-1px' : 0

  const scrollToActivePanel = useCallback(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo({
        left: 0,
        top: ref.current ? ref.current.offsetTop - 55 : 55,
        behavior: 'smooth',
      })
    }
  }, [])
  const onClickActor = useCallback(
    e => {
      // prevent higher level panels from reacting
      e.stopPropagation()
      const idToGet =
        !activeActor || activeActor._id !== doc._id ? doc._id : null
      getActor(idToGet)
    },
    [activeActor, doc._id, getActor],
  )
  const onClickActorCollapse = useCallback(event => {
    // prevent higher level panels from reacting
    event.stopPropagation()
  }, [])
  const onToggleDraft = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()
      toggleDraftOfActor(doc)
    },
    [doc, toggleDraftOfActor],
  )
  const onRemoveActor = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()
      setActorToRemove(doc)
    },
    [doc, setActorToRemove],
  )

  const ref = useRef(null)
  useEffect(() => {
    if (!!category) store.actors.activeActorId = `actors_${category}`
    if (activeActor && activeActorId === doc._id) {
      window.setTimeout(() => {
        scrollToActivePanel()
      }, 50)
    }
  }, [
    activeActor,
    activeActorId,
    category,
    doc._id,
    scrollToActivePanel,
    store.actors.activeActorId,
  ])

  // use pure bootstrap.
  // advantage: can add edit icon to panel-heading
  return (
    <div className="panel panel-default">
      <PanelHeading
        className="panel-heading"
        role="tab"
        id={`heading${index}`}
        onClick={onClickActor}
        isActiveActor={isActiveActor}
        ref={ref}
      >
        <h4 className="panel-title">
          <a
            role="button"
            data-toggle="collapse"
            data-parent="#actorsAccordion"
            href={`#collapse${index}`}
            aria-expanded="false"
            aria-controls={`#collapse${index}`}
          >
            {doc.category}
          </a>
        </h4>
        {showEditingGlyphons && (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="toggleDraft">
                {doc.draft ? 'publish' : 'unpublish'}
              </Tooltip>
            }
          >
            <ToggleDraftGlyphicon
              glyph={doc.draft ? 'ban-circle' : 'ok-circle'}
              onClick={onToggleDraft}
              data-color={doc.draft ? 'red' : '#00D000'}
            />
          </OverlayTrigger>
        )}
        {showEditingGlyphons && (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="removeThisActor">remove</Tooltip>}
          >
            <RemoveGlyphicon glyph="remove-circle" onClick={onRemoveActor} />
          </OverlayTrigger>
        )}
      </PanelHeading>
      {isActiveActor && (
        <div
          id={`#collapse${index}`}
          className="panel-collapse collapse in"
          role="tabpanel"
          aria-labelledby={`heading${index}`}
          onClick={onClickActorCollapse}
        >
          <PanelBody
            className="panel-body"
            data-panelbodypadding={panelbodypadding}
            data-panelbodymargintop={panelbodymargintop}
          >
            <Actor />
          </PanelBody>
        </div>
      )}
    </div>
  )
}

export default observer(ActorPanel)
