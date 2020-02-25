//      
import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

const enhance = compose(
  inject('store'),
  withHandlers({
    remove: props => () => props.removePublication(true),
    abort: props => () => props.removePublication(false),
  }),
  observer,
)

const ModalRemovePublication = ({
  store,
  doc,
  remove,
  abort,
}   
                
              
                     
                    
 ) => (
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

ModalRemovePublication.displayName = 'ModalRemovePublication'

export default enhance(ModalRemovePublication)
