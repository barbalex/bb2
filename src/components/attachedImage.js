// @flow
import React from 'react'
import {
  Button,
  Glyphicon,
  FormGroup,
  FormControl,
  InputGroup,
} from 'react-bootstrap'
import CopyToClipboard from 'react-copy-to-clipboard'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

import getCouchUrl from '../modules/getCouchUrl.js'

const divStyle = {
  padding: 5,
}
const imgStyle = {
  width: 220,
}
const glyphStyle = {
  position: 'absolute',
  top: 10,
  left: 175,
  fontSize: '2em',
  color: 'red',
  cursor: 'pointer',
}
const mediaLeftStyle = {
  position: 'relative',
}

const enhance = compose(inject(`store`), observer)

const AttachedImage = ({
  store,
  doc,
  attName,
  urlCopied,
  onCopyUrl,
}: {
  store: Object,
  doc: Object,
  attName: string,
  urlCopied: string,
  onCopyUrl: () => void,
}) => {
  const id = doc._id
  const url = `${getCouchUrl()}/${id}/${attName}`
  const urlCopiedButtonBsStyle = urlCopied === url ? 'success' : 'default'

  return (
    <div key={id} style={divStyle}>
      <div className="media-left" style={mediaLeftStyle}>
        <img
          src={url}
          className="media-object"
          alt={attName}
          style={imgStyle}
        />
        <Glyphicon
          glyph="remove-circle"
          style={glyphStyle}
          onClick={() => store.page.removePageAttachment(doc, attName)}
        />
      </div>
      <div className="media-body media-middle">
        <FormGroup>
          <InputGroup>
            <FormControl type="text" value={url} disabled />
            <InputGroup.Button>
              <CopyToClipboard text={url} onCopy={() => onCopyUrl(url)}>
                <Button bsStyle={urlCopiedButtonBsStyle}>
                  {urlCopied === url ? 'copied' : 'copy'}
                </Button>
              </CopyToClipboard>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    </div>
  )
}

AttachedImage.displayName = 'AttachedImage'

export default enhance(AttachedImage)
