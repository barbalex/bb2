// @flow
import React from 'react'
import { Button } from 'react-bootstrap'
import { Base64 } from 'js-base64'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'

import Editor from '../editor'
import MonthlyEventMeta from './monthlyEventMeta'

const MetaButton = styled(Button)`
  position: fixed;
  bottom: 10px;
  right: 10px;
`

const enhance = compose(
  inject(`store`),
  withState('showMeta', 'changeShowMeta', false),
  withHandlers({
    onClickMeta: props => () => props.changeShowMeta(!props.showMeta),
    onCloseMeta: props => () => props.changeShowMeta(false),
  }),
  observer
)

const MonthlyEvent = ({
  store,
  year,
  month,
  showMeta,
  onClickMeta,
  onCloseMeta,
}: {
  store: Object,
  year: string,
  month: string,
  showMeta: boolean,
  onClickMeta: () => void,
  onCloseMeta: () => void,
}) => {
  const articleEncoded = store.monthlyEvents.activeMonthlyEvent.article
  const articleDecoded = Base64.decode(articleEncoded)

  if (store.editing) {
    return (
      <div className="monthlyEvent">
        {showMeta &&
          <MonthlyEventMeta
            year={year}
            month={month}
            onCloseMeta={onCloseMeta}
          />}
        <Editor
          docType="monthlyEvent"
          doc={store.monthlyEvents.activeMonthlyEvent}
          articleDecoded={articleDecoded}
        />
        <MetaButton onClick={onClickMeta}>arrivals & victims</MetaButton>
      </div>
    )
  }
  const createMarkup = () => ({ __html: articleDecoded })
  return (
    <div className="monthlyEvent">
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

MonthlyEvent.displayName = 'MonthlyEvent'

export default enhance(MonthlyEvent)
