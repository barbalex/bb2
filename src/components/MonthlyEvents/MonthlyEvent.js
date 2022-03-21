//
import React, { lazy, Suspense, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { Base64 } from 'js-base64'

import storeContext from '../../storeContext'

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
  const store = useContext(storeContext)
  const articleEncoded = store.monthlyEvents.activeMonthlyEvent.article
  const articleDecoded = articleEncoded ? Base64.decode(articleEncoded) : null
  console.log('MonthlyEvent', { year, month, articleDecoded })

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </Container>
  )
}

export default observer(MonthlyEvent)
