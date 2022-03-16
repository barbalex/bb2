import React from 'react'
import styled from 'styled-components'

import Event from './Event'

const BodyCell = styled.div`
  padding: 5px;
  flex: 1;
`
const BodyCellDay = styled(BodyCell)`
  width: 60px;
  max-width: 60px;
  padding-right: 20px;
  text-align: right;
`
const BodyCellMigration = styled(BodyCell)`
  width: 50%;
  max-width: 50%;
  word-wrap: break-word;
  padding-right: 10px;
`
const BodyCellPolitics = styled(BodyCell)`
  width: 50%;
  max-width: 50%;
  word-wrap: break-word;
  padding-left: 10px;
`
const BodyRow = styled.div`
  display: flex;
  border-top: 1px solid #ececec !important;
  border-radius: 4px;
  background-color: rgba(0, 109, 255, 0.05) !important;
  &:hover {
    background-color: #f5f5f5;
  }
  ul {
    padding-left: 10px;
    margin-bottom: 0;
  }
  ul li {
    margin-bottom: 5px;
    margin-top: 5px;
  }
  ul li + li {
    margin-top: 10px;
  }
  p {
    margin-bottom: 0;
  }
  a {
    white-space: nowrap;
  }
`

const MonthlyStatisticsRow = ({ dateRowObject: dRO }) => {
  const dayHasEvents =
    dRO.migrationEvents.length > 0 || dRO.politicsEvents.length > 0

  if (dayHasEvents) {
    return (
      <BodyRow>
        <BodyCellDay>
          <p />
        </BodyCellDay>
        <BodyCellMigration>
          <ul>
            {dRO.migrationEvents.map((event, key) => (
              <Event key={key} event={event} />
            ))}
          </ul>
        </BodyCellMigration>
        <BodyCellPolitics>
          <ul>
            {dRO.politicsEvents.map((event, key) => (
              <Event key={key} event={event} />
            ))}
          </ul>
        </BodyCellPolitics>
      </BodyRow>
    )
  }
  return null
}

export default MonthlyStatisticsRow
