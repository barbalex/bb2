import React, { useCallback, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import Article from './Article'
import storeContext from '../../storeContext'

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

const ArticlePanel = ({ doc, index, year, month, day, title }) => {
  const store = useContext(storeContext)
  const {
    activeArticle,
    activeArticleId,
    getArticle,
    toggleDraftOfArticle,
    setArticleToRemove,
  } = store.articles
  const isArticle = !!activeArticle
  const isActiveArticle = isArticle ? doc._id === activeArticle._id : false
  const showEditingGlyphons = !!store.login.email
  const panelbodypadding = store.editing ? '0 !important' : '15px'
  const panelbodymargintop = store.editing ? '-1px' : 0

  const onClickArticle = useCallback(
    e => {
      // prevent higher level panels from reacting
      e.stopPropagation()
      const idToGet =
        !activeArticle || activeArticle._id !== doc._id ? doc._id : null
      getArticle(idToGet)
    },
    [activeArticle, doc._id, getArticle],
  )
  // prevent higher level panels from reacting
  const onClickArticleCollapse = useCallback(
    event => event.stopPropagation(),
    [],
  )
  const onToggleDraft = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()
      toggleDraftOfArticle(doc)
    },
    [doc, toggleDraftOfArticle],
  )
  const onRemoveArticle = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()
      setArticleToRemove(doc)
    },
    [doc, setArticleToRemove],
  )

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
    if (!!year && !!month && !!day && !!title) {
      store.articles.activeArticleId = `commentaries_${year}_${month}_${day}_${title}`
    }
    if (activeArticle && activeArticleId === doc._id) {
      window.setTimeout(() => {
        scrollToActivePanel()
      }, 50)
    }
  }, [
    activeArticle,
    activeArticleId,
    day,
    doc._id,
    month,
    scrollToActivePanel,
    store.actors.activeArticleId,
    store.articles.activeArticleId,
    title,
    year,
  ])

  // use pure bootstrap.
  // advantage: can add edit icon to panel-heading
  return (
    <div className="panel panel-default">
      <PanelHeading
        className="panel-heading"
        role="tab"
        id={`heading${index}`}
        onClick={onClickArticle}
        ref={ref}
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
              data-color={doc.draft ? 'red' : '#00D000'}
              onClick={onToggleDraft}
            />
          </OverlayTrigger>
        )}
        {showEditingGlyphons && (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="removeThisArticle">remove</Tooltip>}
          >
            <RemoveGlyphicon glyph="remove-circle" onClick={onRemoveArticle} />
          </OverlayTrigger>
        )}
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
}

export default observer(ArticlePanel)
