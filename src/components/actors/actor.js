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

const enhance = compose(
  inject(`store`),
  withState('showMeta', 'changeShowMeta', false),
  withHandlers({
    onClickMeta: props => () => props.changeShowMeta(!props.showMeta),
    onCloseMeta: props => () => props.changeShowMeta(false),
  }),
  observer,
)

const Actor = ({
  store,
  activeActor,
  editing,
  showMeta,
  onClickMeta,
  onCloseMeta,
}: {
  store: Object,
  activeActor: Object,
  editing: boolean,
  showMeta: boolean,
  onClickMeta: () => void,
  onCloseMeta: () => void,
}) => {
  const articleEncoded = activeActor.article
  const articleDecoded = Base64.decode(articleEncoded)
  const metaButtonStyle = {
    position: 'fixed',
    bottom: 10,
    right: 10,
  }
  if (editing) {
    return (
      <div className="actor">
        {showMeta && <Meta doc={activeActor} onCloseMeta={onCloseMeta} />}
        <Editor
          doc={activeActor}
          docType="actor"
          articleDecoded={articleDecoded}
        />
        <Button style={metaButtonStyle} onClick={onClickMeta}>
          images
        </Button>
      </div>
    )
  }
  const createMarkup = () => ({ __html: articleDecoded })
  return (
    <div className="actor col500">
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

Actor.displayName = 'Actor'

export default enhance(Actor)
