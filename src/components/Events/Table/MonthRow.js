import React from 'react'
import dayjs from 'dayjs'
import styled from '@emotion/styled'

import oceanDarkImage from '../../../images/oceanDark.jpg'

const BodyRow = styled.div`
  display: flex;
  border-top: 1px solid #ececec !important;
  border-radius: 4px;
  &:hover {
    background-color: #f5f5f5;
  }
  background-image: url(${oceanDarkImage});
  color: #edf4f8;
  font-weight: bold;
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
const BodyCell = styled.div`
  padding: 5px;
  flex: 1;
  padding-left: 10px;
`

const MonthRow = ({ dateRowObject: dRO }) => {
  const year = parseInt(dayjs(dRO.date).format('YYYY'), 0)
  const month = dayjs(dRO.date).format('MMMM')
  const text = `${month} ${year}`

  return (
    <BodyRow>
      <BodyCell>{text}</BodyCell>
    </BodyRow>
  )
}

export default MonthRow
