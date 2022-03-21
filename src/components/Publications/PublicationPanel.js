import React, { useContext, useRef, useCallback, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { gql, useQuery, useApolloClient } from '@apollo/client'

import storeContext from '../../storeContext'
import Publication from './Publication'
import RemovePublicationGlyph from './RemovePublicationGlyph'
import { navigate } from 'gatsby'

const PanelHeading = styled.div`
  position: relative;
  min-height: 38px;
`
const PanelBody = styled.div`
  max-height: ${typeof window !== `undefined` ? window.innerHeight - 127 : 1}px;
  overflow-y: auto;
  overflow-x: hidden;
  ${(props) => props['data-editing'] && 'padding: 0 !important;'}
`
const ToggleDraftGlyphicon = styled(Glyphicon)`
  position: absolute !important;
  right: 40px !important;
  top: 6px !important;
  font-size: 1.5em;
  color: ${(props) => props['data-color']};
`
const PanelClickArea = styled.div`
  width: calc(100% - 45px);
  padding: 10px 15px;
  margin: -10px -15px;
`

const PublicationPanel = ({ id, activeId, category }) => {
  const client = useApolloClient()
  const { data } = useQuery(
    gql`
      query PublicationForPublicationPanel($id: uuid!) {
        publication_by_pk(id: $id) {
          id
          title
          draft
        }
      }
    `,
    { variables: { id } },
  )
  const doc = data?.publication_by_pk
  const store = useContext(storeContext)

  const isActivePublication = id === activeId
  const showEditingGlyphons = !!store.login.user

  const ref = useRef(null)

  useEffect(() => {
    if (isActivePublication) {
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: ref.current ? ref.current.offsetTop - 55 : 55,
          behavior: 'smooth',
        })
      }, 100)
    }
  }, [isActivePublication, store.editing])

  const onClickPublication = useCallback(() => {
    if (isActivePublication) {
      navigate(`/publications`)
    } else {
      navigate(`/publications/${category}/${id}`)
    }
  }, [category, id, isActivePublication])
  const onClickEventCollapse = useCallback((event) => {
    // prevent higher level panels from reacting
    event.stopPropagation()
  }, [])
  const onToggleDraft = useCallback(
    (event) => {
      event.preventDefault()
      event.stopPropagation()
      try {
        client.mutate({
          mutation: gql`
            mutation UpdateDraftForPublicationPanel(
              $id: uuid!
              $draft: Boolean
            ) {
              update_publication_by_pk(
                pk_columns: { id: $id }
                _set: { draft: $draft }
              ) {
                id
              }
            }
          `,
          variables: { draft: !doc.draft, id },
          refetchQueries: ['PublicationForPublicationPanel'],
        })
      } catch (error) {
        store.error.showError(error)
      }
    },
    [client, doc?.draft, id, store.error],
  )

  if (!doc) return null

  // use pure bootstrap.
  // advantage: can add edit icon to panel-heading
  return (
    <div key={`container${id}`} className="panel panel-default month">
      <PanelHeading
        className="panel-heading"
        role="tab"
        id={`heading${id}`}
        ref={ref}
      >
        <PanelClickArea onClick={onClickPublication}>
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
        </PanelClickArea>
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
              onClick={onToggleDraft}
            />
          </OverlayTrigger>
        )}
        {showEditingGlyphons && <RemovePublicationGlyph publication={doc} />}
      </PanelHeading>
      {isActivePublication && (
        <div
          id={`#collapse${id}`}
          className="panel-collapse collapse in"
          role="tabpanel"
          aria-labelledby={`heading${id}`}
          onClick={onClickEventCollapse}
        >
          <PanelBody className="panel-body" data-editing={store.editing}>
            <Publication id={id} />
          </PanelBody>
        </div>
      )}
    </div>
  )
}

export default observer(PublicationPanel)
