import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import { Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { gql, useApolloClient, useQuery } from '@apollo/client'

import Article from './Article'
import ModalRemoveArticle from './ModalRemoveArticle'
import storeContext from '../../storeContext'
import { navigate } from 'gatsby'
import RemoveArticleGlyph from './RemoveArticleGlyph'

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
const PanelHeading = styled.div`
  position: relative;
  cursor: pointer;
  border-bottom-right-radius: ${(props) =>
    !props.isActiveArticle ? '3px' : 0};
  border-bottom-left-radius: ${(props) => (!props.isActiveArticle ? '3px' : 0)};
  min-height: 37px;
`
const PanelBody = styled.div`
  margin-top: ${(props) => props['data-panelbodymargintop']};
  padding: ${(props) => props['data-panelbodypadding']};
  max-height: ${typeof window !== `undefined` ? window.innerHeight - 141 : 0}px;
  overflow-y: auto;
  overflow-x: hidden;
`

const ArticlePanel = ({ id, activeId }) => {
  const store = useContext(storeContext)
  const client = useApolloClient()

  const [remove, setRemove] = useState(false)

  const { data } = useQuery(
    gql`
      query ArticlesForArticlePanel($id: uuid!) {
        article_by_pk(id: $id) {
          id
          title
          draft
        }
      }
    `,
    { variables: { id } },
  )
  const doc = data?.article_by_pk

  const isActiveArticle = id === activeId
  const showEditingGlyphons = !!store.login.user
  const panelbodypadding = store.editing ? '0 !important' : '15px'
  const panelbodymargintop = store.editing ? '-1px' : 0

  const onClickArticle = useCallback(
    (e) => {
      // prevent higher level panels from reacting
      e.stopPropagation()
      if (id === activeId) {
        navigate(`/articles`)
      } else {
        navigate(`/articles/${id}`)
      }
    },
    [activeId, id],
  )
  // prevent higher level panels from reacting
  const onClickArticleCollapse = useCallback(
    (event) => event.stopPropagation(),
    [],
  )
  const onToggleDraft = useCallback(
    (event) => {
      event.preventDefault()
      event.stopPropagation()
      try {
        client.mutate({
          mutation: gql`
            mutation UpdateDraftForArticlePanel($id: uuid!, $draft: Boolean) {
              update_article_by_pk(
                pk_columns: { id: $id }
                _set: { draft: $draft }
              ) {
                id
              }
            }
          `,
          variables: { draft: !doc.draft, id },
          refetchQueries: ['ArticlesForArticlePanel'],
        })
      } catch (error) {
        store.showError(error)
      }
    },
    [client, doc.draft, id, store],
  )

  const ref = useRef(null)
  useEffect(() => {
    if (id && id === activeId) {
      window.setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: ref.current ? ref.current.offsetTop - 55 : 55,
          behavior: 'smooth',
        })
      }, 100)
    }
  }, [activeId, id, store.editing])

  // use pure bootstrap.
  // advantage: can add edit icon to panel-heading
  return (
    <div className="panel panel-default">
      <PanelHeading
        className="panel-heading"
        role="tab"
        id={`heading${id}`}
        ref={ref}
      >
        <PanelClickArea onClick={onClickArticle}>
          <h4 className="panel-title">
            <a
              role="button"
              data-toggle="collapse"
              data-parent="#articlesAccordion"
              href={`#collapse${id}`}
              aria-expanded="false"
              aria-controls={`#collapse${id}`}
            >
              {doc?.title}
            </a>
          </h4>
        </PanelClickArea>
        {showEditingGlyphons && (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="toggleDraft">
                {doc?.draft ? 'publish' : 'unpublish'}
              </Tooltip>
            }
          >
            <ToggleDraftGlyphicon
              glyph={doc?.draft ? 'ban-circle' : 'ok-circle'}
              data-color={doc?.draft ? 'red' : '#00D000'}
              onClick={onToggleDraft}
            />
          </OverlayTrigger>
        )}
        {showEditingGlyphons && <RemoveArticleGlyph article={doc} />}
      </PanelHeading>
      {isActiveArticle && id && (
        <div
          id={`#collapse${id}`}
          className="panel-collapse collapse in"
          role="tabpanel"
          aria-labelledby={`heading${id}`}
          onClick={onClickArticleCollapse}
        >
          <PanelBody
            className="panel-body"
            data-panelbodypadding={panelbodypadding}
            data-panelbodymargintop={panelbodymargintop}
          >
            <Article id={id} />
          </PanelBody>
        </div>
      )}
      {remove && <ModalRemoveArticle doc={doc} setRemove={setRemove} />}
    </div>
  )
}

export default observer(ArticlePanel)
