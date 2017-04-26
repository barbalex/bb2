// @flow
import React from 'react'
import { Button } from 'react-bootstrap'
import { Base64 } from 'js-base64'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import Editor from '../editor.js'
import Meta from '../pages/pageMeta.js'

const metaButtonStyle = {
  position: 'fixed',
  bottom: 10,
  right: 10,
}

const enhance = compose(
  inject(`store`),
  withState('showMeta', 'changeShowMeta', false),
  withHandlers({
    onClickMeta: props => () => props.changeShowMeta(!props.showMeta),
    onCloseMeta: props => () => props.changeShowMeta(false),
  }),
  observer,
)

const Commentary = ({
  activeCommentary,
  editing,
  showMeta,
  onSaveCommentaryArticle,
  onClickMeta,
  onCloseMeta,
}: {
  activeCommentary: Object,
  editing: boolean,
  showMeta: boolean,
  onSaveCommentaryArticle: () => void,
  onClickMeta: () => void,
  onCloseMeta: () => void,
}) => {
  const articleEncoded = activeCommentary.article
  const articleDecoded = Base64.decode(articleEncoded)

  if (editing) {
    return (
      <div className="commentary">
        {showMeta && <Meta doc={activeCommentary} onCloseMeta={onCloseMeta} />}
        <Editor
          doc={activeCommentary}
          articleDecoded={articleDecoded}
          onSaveCommentaryArticle={onSaveCommentaryArticle}
        />
        <Button style={metaButtonStyle} onClick={onClickMeta}>
          images
        </Button>
      </div>
    )
  }
  const createMarkup = () => ({ __html: articleDecoded })
  return (
    <div className="commentary">
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

Commentary.displayName = 'Commentary'

export default enhance(Commentary)
