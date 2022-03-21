//
import React, { lazy, Suspense } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

const Container = styled.div`
  table > thead > tr > th {
    border-bottom: 0 solid #dddddd !important;
    line-height: 0.3;
  }
  table > thead > tr.totals > td {
    border-top: 0;
    border-bottom: 2px solid #dddddd !important;
    line-height: 0.6;
    color: #9c9c9c;
  }
`

const MonthlyEvent = ({ year, month }) => {
  const MyComponent = lazy(() => import(`./${year}/${month}`))

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </Container>
  )
}

export default observer(MonthlyEvent)
