// no more used since 3.2020
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import AttachedImagesList from './AttachedImagesList'
import AttachImages from './AttachImages'

const PageMeta = ({ doc, onCloseMeta }) => (
  <Modal show bsSize="large">
    <Modal.Header>
      <Modal.Title>
        Images for "{doc.title ? doc.title : doc.category}"
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <AttachedImagesList doc={doc} />
      <AttachImages doc={doc} />
    </Modal.Body>

    <Modal.Footer>
      <Button bsStyle="primary" onClick={onCloseMeta}>
        close
      </Button>
    </Modal.Footer>
  </Modal>
)

export default observer(PageMeta)
