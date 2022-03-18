//
import React, { useContext } from 'react'
import { Base64 } from 'js-base64'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import Editor from '../shared/Editor'
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
  const store = useContext(storeContext)
  const articleEncoded = store.monthlyEvents.activeMonthlyEvent.article
  const articleDecoded = articleEncoded ? Base64.decode(articleEncoded) : null

  if (store.editing) {
    return (
      <Container>
        <Editor
          docType="monthlyEvent"
          doc={store.monthlyEvents.activeMonthlyEvent}
          contentDecoded={articleDecoded}
        />
      </Container>
    )
  }
  const createMarkup = () => ({ __html: articleDecoded })
  return (
    <Container>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Container>
  )
}

export default observer(MonthlyEvent)
