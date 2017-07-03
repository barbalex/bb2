// @flow
import React from 'react'
import { Button } from 'react-bootstrap'
import { Base64 } from 'js-base64'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import styled from 'styled-components'

import Editor from '../editor.js'
import Meta from './pageMeta.js'

const MetaButton = styled(Button)`
  position: fixed;
  bottom: 10px;
  right: 10px;
`

const enhance = compose(
  inject(`store`),
  withState('showMeta', 'changeShowMeta', false),
  withHandlers({
    onClickMeta: props => () => props.changeShowMeta(!props.showMeta),
    onCloseMeta: props => () => props.changeShowMeta(false),
  }),
  observer
)

const Page = ({
  store,
  showMeta,
  onClickMeta,
  onCloseMeta,
  changeShowMeta,
}: {
  store: Object,
  showMeta: boolean,
  onClickMeta: () => void,
  onCloseMeta: () => void,
  changeShowMeta: () => void,
}) => {
  const { activePage } = store.page
  const articleEncoded = activePage.article
  const articleDecoded = Base64.decode(articleEncoded)
  let title = activePage.title ? activePage.title : activePage.category

  if (store.editing && activePage._id !== 'pages_actors') {
    return (
      <div className="page">
        {showMeta && <Meta doc={activePage} onCloseMeta={onCloseMeta} />}
        <Editor
          docType="page"
          doc={activePage}
          articleDecoded={articleDecoded}
        />
        <MetaButton onClick={onClickMeta}>images</MetaButton>
      </div>
    )
  }
  const createMarkup = () => ({ __html: articleDecoded })
  return (
    <div className="page">
      <h1>
        {title}
      </h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

Page.displayName = 'Page'

export default enhance(Page)
