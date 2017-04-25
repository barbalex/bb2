import React from 'react'
import { Button } from 'react-bootstrap'
import { Base64 } from 'js-base64'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

import Editor from '../editor.js'
import Meta from './pageMeta.js'

const enhance = compose(
  inject(`store`),
  withState('showMeta', 'changeShowMeta', false),
  withHandlers({
    onClickMeta: props => props.changeShowMeta(!props.showMeta),
    onCloseMeta: props => props.changeShowMeta(false)
  }),
  observer
)

const Page = ({
  activePage,
  editing,
  showMeta,
  onClickMeta,
  onCloseMeta
}: {
  activePage: Object,
  editing: boolean,
  showMeta: boolean,
  onClickMeta: () => void,
  onCloseMeta: () => void
}) => {
  const articleEncoded = activePage.article
  const articleDecoded = Base64.decode(articleEncoded)
  let title = activePage.title ? activePage.title : activePage.category
  const metaButtonStyle = {
    position: 'fixed',
    bottom: 10,
    right: 10
  }
  if (editing && activePage._id !== 'pages_actors') {
    return (
      <div className="page">
        {showMeta && <Meta doc={activePage} onCloseMeta={onCloseMeta} />}
        <Editor doc={activePage} articleDecoded={articleDecoded} />
        <Button style={metaButtonStyle} onClick={onClickMeta}>
          images
        </Button>
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
