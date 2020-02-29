//
import React, { useContext, useState, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { Base64 } from 'js-base64'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import Editor from '../shared/Editor'
import MonthlyEventMeta from './MonthlyEventMeta'
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
const MetaButton = styled(Button)`
  position: fixed;
  bottom: 10px;
  right: 10px;
`

const MonthlyEvent = ({ year, month }) => {
  const store = useContext(storeContext)
  const articleEncoded = store.monthlyEvents.activeMonthlyEvent.article
  const articleDecoded = articleEncoded ? Base64.decode(articleEncoded) : null

  const [showMeta, setShowMeta] = useState(false)

  const onClickMeta = useCallback(() => setShowMeta(!showMeta), [showMeta])
  const onCloseMeta = useCallback(() => setShowMeta(false), [])

  if (store.editing) {
    return (
      <Container>
        {showMeta && (
          <MonthlyEventMeta
            year={year}
            month={month}
            onCloseMeta={onCloseMeta}
          />
        )}
        <Editor
          docType="monthlyEvent"
          doc={store.monthlyEvents.activeMonthlyEvent}
          articleDecoded={articleDecoded}
        />
        <MetaButton onClick={onClickMeta}>arrivals & victims</MetaButton>
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
