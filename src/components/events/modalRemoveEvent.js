import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

const enhance = compose(
  inject(`store`),
  withState('showMeta', 'changeShowMeta', false),
  withHandlers({
    remove: props => () => {
      props.store.events.removeEvent(props.doc)
      props.store.events.setShowNewEvent(false)
    },
    abort: props => () => props.store.events.setShowNewEvent(false),
  }),
  observer,
)

const ModalRemoveEvent = ({
  store,
  doc,
  remove,
  abort,
}: { store: Object, doc: Object, remove: () => void, abort: () => void }) => (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>
          Remove event "{doc.title}"
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to remove event "{doc.title}"?
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

ModalRemoveEvent.displayName = 'ModalRemoveEvent'

export default enhance(ModalRemoveEvent)
