import React from 'react'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import { FormGroup, ControlLabel, InputGroup } from 'react-bootstrap'
import styled from '@emotion/styled'

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  min-height: 34px;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`

const dateFormat = [
  'dd.MM.yyyy',
  'd.MM.yyyy',
  'd.M.yyyy',
  'dd.M.yyyy',
  'dd.MM.yy',
  'd.MM.yy',
  'd.M.yy',
  'dd.M.yy',
  'd.M',
  'd.MM',
  'dd.M',
  'dd.MM',
  'd',
  'dd',
]

const EventDate = ({ date, onChangeDatePicker }) => {
  const selected = dayjs(date, 'DD.MM.YYYY').isValid()
    ? dayjs(date, 'DD.MM.YYYY').toDate()
    : null

  return (
    <FormGroup controlId="date">
      <ControlLabel>Date</ControlLabel>
      <InputGroup>
        <StyledDatePicker
          selected={selected}
          onChange={onChangeDatePicker}
          dateFormat={dateFormat}
          popperPlacement="auto"
        />
      </InputGroup>
    </FormGroup>
  )
}

export default EventDate
