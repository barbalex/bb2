import React, {
  useContext,
  useRef,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'

import storeContext from '../../storeContext'
import Publication from './Publication'
import ModalRemovePublication from './ModalRemovePublication'
import { navigate } from 'gatsby'

const PanelHeading = styled.div`
  position: relative;
`
const PanelBody = styled.div`
  max-height: ${typeof window !== `undefined` ? window.innerHeight - 127 : 1}px;
  overflow-y: auto;
`
const ToggleDraftGlyphicon = styled(Glyphicon)`
  position: absolute !important;
  right: 40px !important;
  top: 6px !important;
  font-size: 1.5em;
  color: ${(props) => props['data-color']};
`
const RemoveGlyphicon = styled(Glyphicon)`
  position: absolute !important;
  right: 8px !important;
  top: 6px !important;
  font-size: 1.5em;
`

const PublicationPanel = ({ id, activeId, category }) => {
  const { data } = useQuery(
    gql`
      query PublicationForPublicationPanel($id: uuid!) {
        publication_by_pk(id: $id) {
          id
          title
        }
      }
    `,
    { variables: { id } },
  )
  const doc = data?.publication_by_pk ?? {}
  const store = useContext(storeContext)
  const { toggleDraftOfPublication } = store.publications

  const isActivePublication = id === activeId
  const showEditingGlyphons = !!store.login.user

  console.log('PublicationPanel', { id, activeId, data, doc, category })

  const [docToRemove, setDocToRemove] = useState(null)

  const ref = useRef(null)
  const scrollToActivePanel = useCallback(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo({
        left: 0,
        top: ref.current ? ref.current.offsetTop - 55 : 55,
        behavior: 'smooth',
      })
    }
  }, [])
  useEffect(() => {
    if (isActivePublication) {
      window.setTimeout(() => {
        scrollToActivePanel()
      }, 50)
    }
  }, [isActivePublication, scrollToActivePanel])

  const onClickPublication = useCallback(
    (e) => {
      // prevent higher level panels from reacting
      e.stopPropagation()
      navigate(`/publications/${category}/${id}`)
    },
    [category, id],
  )
  const onClickEventCollapse = useCallback((event) => {
    // prevent higher level panels from reacting
    event.stopPropagation()
  }, [])
  const onToggleDraft = useCallback(
    (doc, event) => {
      event.preventDefault()
      event.stopPropagation()
      toggleDraftOfPublication(doc)
    },
    [toggleDraftOfPublication],
  )
  const removePublication = useCallback(
    (remove) => {
      if (remove) store.publications.removePublication(docToRemove)
      setDocToRemove(null)
    },
    [docToRemove, store.publications],
  )
  const onRemovePublication = useCallback((docToRemove, event) => {
    event.preventDefault()
    event.stopPropagation()
    setDocToRemove(docToRemove)
  }, [])

  if (!doc) return null

  // use pure bootstrap.
  // advantage: can add edit icon to panel-heading
  return (
    <div key={`container${id}`} className="panel panel-default month">
      <PanelHeading
        className="panel-heading"
        role="tab"
        id={`heading${id}`}
        onClick={onClickPublication}
        ref={ref}
      >
        <h4 className="panel-title">
          <a
            role="button"
            data-toggle="collapse"
            data-parent={`#${category}`}
            href={`#collapse${id}`}
            aria-expanded="false"
            aria-controls={`#collapse${id}`}
          >
            {doc.title}
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
              data-color={doc.draft ? 'red' : 'green'}
              onClick={onToggleDraft.bind(this, doc)}
            />
          </OverlayTrigger>
        )}
        {showEditingGlyphons && (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="removeThisPublication">remove</Tooltip>}
          >
            <RemoveGlyphicon
              glyph="remove-circle"
              onClick={onRemovePublication.bind(this, doc)}
            />
          </OverlayTrigger>
        )}
      </PanelHeading>
      {isActivePublication && (
        <div
          id={`#collapse${id}`}
          className="panel-collapse collapse in"
          role="tabpanel"
          aria-labelledby={`heading${id}`}
          onClick={onClickEventCollapse}
        >
          <PanelBody className="panel-body">
            <Publication />
          </PanelBody>
        </div>
      )}
      {docToRemove && (
        <ModalRemovePublication
          doc={docToRemove}
          removePublication={removePublication}
        />
      )}
    </div>
  )
}

export default observer(PublicationPanel)
