// @flow
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

import AttachedImages from '../attachedImages.js'

const enhance = compose(inject(`store`), observer)

const PageMeta = ({
  doc,
  onCloseMeta,
}: { doc: Object, onCloseMeta: () => void }) => (
  <Modal show bsSize="large">
    <Modal.Header>
      <Modal.Title>
        Images for "{doc.title ? doc.title : doc.category}"
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <AttachedImages doc={doc} />
    </Modal.Body>

    <Modal.Footer>
      <Button bsStyle="primary" onClick={onCloseMeta}>
        close
      </Button>
    </Modal.Footer>

  </Modal>
)

PageMeta.displayName = 'PageMeta'

export default enhance(PageMeta)
