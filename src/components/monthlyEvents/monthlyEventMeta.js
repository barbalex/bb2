// @flow
import React, { Component } from 'react'
import {
  Modal,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'

const enhance = compose(inject(`store`), observer)

class MonthlyEventsMeta extends Component {
  constructor(props) {
    super(props)
    const { activeMonthlyEvent } = props
    // $FlowIssue
    this.state = {
      arrivals: activeMonthlyEvent.arrivals,
      victims: activeMonthlyEvent.victims,
    }
  }

  displayName: 'MonthlyEventsMeta'

  props: {
    store: Object,
    activeMonthlyEvent: Object,
    year: string,
    month: string,
    arrivals: number,
    victims: number,
    onCloseMeta: () => void,
  }

  onChangeValue(property, event) {
    const { activeMonthlyEvent, store } = this.props
    const value = parseInt(event.target.value, 10)
    activeMonthlyEvent[property] = value
    store.events.saveMonthlyEvent(activeMonthlyEvent)
    this.setState({ [property]: value })
  }

  close() {
    const { onCloseMeta } = this.props
    onCloseMeta()
  }

  render() {
    const { year, month } = this.props
    // $FlowIssue
    const { arrivals, victims } = this.state

    return (
      <Modal show onHide={this.close} bsSize="medium">
        <Modal.Header>
          <Modal.Title>
            Arrivals & Victims in {month} {year}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormGroup controlId="arrivals">
            <ControlLabel>Arrivals</ControlLabel>
            <FormControl
              type="number"
              defaultValue={arrivals}
              onBlur={this.onChangeValue.bind(this, 'arrivals')}
              autoFocus
            />
          </FormGroup>
          <FormGroup controlId="victims">
            <ControlLabel>Victims</ControlLabel>
            <FormControl
              type="number"
              defaultValue={victims}
              onBlur={this.onChangeValue.bind(this, 'victims')}
              autoFocus
            />
          </FormGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.close}>
            close
          </Button>
        </Modal.Footer>

      </Modal>
    )
  }
}

export default enhance(MonthlyEventsMeta)
