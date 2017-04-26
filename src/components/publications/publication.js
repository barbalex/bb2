// @flow
import React from 'react'
import { Base64 } from 'js-base64'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

import Editor from '../editor.js'

const enhance = compose(
  inject(`store`),
  withHandlers({
    onSavePublicationArticle: props => articleEncoded => {
      const { activePublication, savePublication } = props.store.publications
      activePublication.article = articleEncoded
      savePublication(activePublication)
    },
  }),
  observer,
)

const Publication = ({
  store,
  onSavePublicationArticle,
}: {
  store: Object,
  onSavePublicationArticle: () => void,
}) => {
  const articleEncoded = store.publications.activePublication.article
  const articleDecoded = Base64.decode(articleEncoded)

  if (store.editing) {
    return (
      <div className="publication">
        <Editor
          docType="publication"
          articleDecoded={articleDecoded}
          onSavePublicationArticle={onSavePublicationArticle}
        />
      </div>
    )
  }
  const createMarkup = () => ({ __html: articleDecoded })
  return (
    <div className="publication">
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

Publication.displayName = 'Publication'

export default enhance(Publication)
