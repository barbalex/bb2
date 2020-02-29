//
import React, { useContext, useCallback } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import storeContext from '../../storeContext'

const ModalRemovePublication = ({ doc }) => {
  const store = useContext(storeContext)
  const { removePublication } = store.publications

  const remove = useCallback(() => removePublication(true), [removePublication])
  const abort = useCallback(() => removePublication(false), [removePublication])

  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Remove publication "{doc.title}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to remove publication "{doc.title}"?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="danger" onClick={remove}>
            yes, remove!
          </Button>
          <Button onClick={abort}>no!</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

ModalRemovePublication.displayName = 'ModalRemovePublication'

export default observer(ModalRemovePublication)
