// @flow
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

const enhance = compose(
  inject(`store`),
  withHandlers({
    remove: props => event =>
      props.store.commentaries.removeCommentary(props.doc),
    abort: props => event =>
      props.store.commentaries.setCommentaryToRemove(null),
  }),
  observer,
)

const ModalRemoveCommentary = ({
  doc,
  remove,
  abort,
}: { doc: Object, remove: () => void, abort: () => void }) => (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>
          Remove commentary "{doc.title}"
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to remove commentary "{doc.title}"?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="danger" onClick={remove}>
          yes, remove!
        </Button>
        <Button onClick={abort}>
          no!
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
)

ModalRemoveCommentary.displayName = 'ModalRemoveCommentary'

export default enhance(ModalRemoveCommentary)
