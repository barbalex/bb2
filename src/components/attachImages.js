// @flow
import React from 'react'
import Dropzone from 'react-dropzone'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import styled from 'styled-components'

const DropzoneDiv = styled.div`
  width: 220px !important;
  margin-left: 5px;
  height: 147px !important;
  padding: 5px;
`

const enhance = compose(inject(`store`), observer)

const onDrop = (store, files, doc) => {
  const attachments = {}
  files.forEach(file => {
    /**
     * create an attachments object of this form:
     * {
     *   "att.txt": {
     *     "content_type": "image/png",
     *     "data": new Blob(
     *       ["And she's hooked to the silver screen"],
     *       {type: 'text/plain'})
     *   },
     *   "att2.txt": {
     *     "content_type": "text/plain",
     *     "data": new Blob(
     *       ["But the film is a saddening bore"],
     *       {type: 'text/plain'})
     *   }
     * }
     * note: react-dropzone built the blob itself! It is file
     */
    const name = file.name
    const type = file.type
    attachments[name] = {
      content_type: type,
      data: file,
    }
  })
  store.page.addPageAttachments(doc, attachments)
}

const AttachImages = ({ store, doc }: { store: Object, doc: Object }) =>
  <div className="dropzone">
    <Dropzone onDrop={event => onDrop(store, event, doc)}>
      <DropzoneDiv>
        Drop some files here.<br />
        Or click to select files to upload.
      </DropzoneDiv>
    </Dropzone>
  </div>

AttachImages.displayName = 'AttachImages'

export default enhance(AttachImages)
