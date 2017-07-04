// @flow
import React from 'react'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'

import AttachedImage from './attachedImage'

const Container = styled.div`
  overflow: auto;
  max-height: 400px;
  padding-bottom: 5px;
`

const images = ({
  doc,
  onCopyUrl,
  urlCopied,
}: {
  doc: Object,
  onCopyUrl: () => void,
  urlCopied: string,
}) => {
  const wantedContentTypes = ['image/jpeg', 'image/png']
  const imageNameArray = []
  if (!doc._attachments || Object.keys(doc._attachments).length === 0) {
    return []
  }
  Object.keys(doc._attachments).forEach(key => {
    if (wantedContentTypes.includes(doc._attachments[key].content_type)) {
      imageNameArray.push(key)
    }
  })
  const images = imageNameArray.map((imageName, index) =>
    <AttachedImage
      key={index}
      doc={doc}
      attName={imageName}
      urlCopied={urlCopied}
      onCopyUrl={onCopyUrl}
    />
  )
  return images
}

const enhance = compose(
  inject(`store`),
  withState('urlCopied', 'changeUrlCopied', null),
  withHandlers({
    onCopyUrl: props => urlCopied => {
      props.changeUrlCopied(urlCopied)
    },
  }),
  observer
)

const AttachedImagesList = ({
  doc,
  urlCopied,
  onCopyUrl,
  changeUrlCopied,
}: {
  doc: Object,
  urlCopied: string,
  onCopyUrl: () => void,
  changeUrlCopied: () => void,
}) =>
  <Container className="media">
    {images({ doc, onCopyUrl, urlCopied })}
  </Container>

AttachedImagesList.displayName = 'AttachedImagesList'

export default enhance(AttachedImagesList)
