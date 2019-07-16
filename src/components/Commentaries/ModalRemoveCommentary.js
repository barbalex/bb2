// @flow
import React, { useContext, useCallback } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import storeContext from '../../storeContext'

const ModalRemoveCommentary = () => {
  const store = useContext(storeContext)
  const {
    commentaryToRemove,
    removeCommentary,
    setCommentaryToRemove,
  } = store.commentaries

  const abort = useCallback(event => setCommentaryToRemove(null), [setCommentaryToRemove])
  const remove = useCallback(() => {
    removeCommentary(commentaryToRemove)
    setCommentaryToRemove(null)
  }, [commentaryToRemove, removeCommentary, setCommentaryToRemove])

  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
            Remove commentary "{commentaryToRemove.title}"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to remove commentary "
            {commentaryToRemove.title}
            "?
          </p>
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

ModalRemoveCommentary.displayName = 'ModalRemoveCommentary'

export default observer(ModalRemoveCommentary)
