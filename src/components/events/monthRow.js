// @flow
import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const BodyRow = styled.div`
  display: flex;
  border-top: 1px solid #ececec !important;
  border-radius: 4px;
  :hover {
    background-color: #f5f5f5;
  }
`
const BodyCell = styled.div`
  padding: 5px;
  flex: 1;
  padding-left: 10px;
`

const MonthRow = ({ dateRowObject: dRO }: { dateRowObject: Object }) => {
  const year = parseInt(moment(dRO.date).format('YYYY'), 0)
  const month = moment(dRO.date).format('MMMM')
  const text = `${month} ${year}`
  const className =
    month === 'December'
      ? `eventsTable-body-monthRow yearRow ${year}`
      : 'eventsTable-body-monthRow'

  return (
    <div className={['eventsTable-body-row', className].join(' ')}>
      <BodyCell>
        {text}
      </BodyCell>
    </div>
  )
}

MonthRow.displayName = 'MonthRow'

export default MonthRow
