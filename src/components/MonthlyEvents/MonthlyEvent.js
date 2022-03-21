//
import React, { lazy, Suspense } from 'react'
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
  const MyComponent = lazy(async () => {
    let comp
    try {
      comp = await import(`./${year}/${month}`)
    } catch (error) {
      return <p>archived events not found, something went wrong</p>
    }
    return comp
  })

  return (
    <Container>
      <Suspense fallback={<div />}>
        <MyComponent />
      </Suspense>
    </Container>
  )
}

export default MonthlyEvent
