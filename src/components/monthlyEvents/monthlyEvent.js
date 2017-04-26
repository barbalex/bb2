// @flow
import React from 'react'
import { Button } from 'react-bootstrap'
import { Base64 } from 'js-base64'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

import Editor from '../editor.js'
import MonthlyEventMeta from './monthlyEventMeta.js'

const metaButtonStyle = {
  position: 'fixed',
  bottom: 10,
  right: 10,
}

const enhance = compose(
  inject(`store`),
  withState('showMeta', 'changeShowMeta', false),
  withHandlers({
    onClickMeta: props => () => props.changeShowMeta(!props.showMeta),
    onCloseMeta: props => () => props.changeShowMeta(false),
    onSaveMonthlyEventArticle: props => articleEncoded => {
      const { activeMonthlyEvent, store } = props
      activeMonthlyEvent.article = articleEncoded
      store.monthlyEvents.saveMonthlyEvent(activeMonthlyEvent)
    },
  }),
  observer,
)

const MonthlyEvent = ({
  store,
  activeMonthlyEvent,
  year,
  month,
  showMeta,
  onSaveMonthlyEventArticle,
  onClickMeta,
  onCloseMeta,
}: {
  store: Object,
  activeMonthlyEvent: Object,
  year: string,
  month: string,
  showMeta: boolean,
  onSaveMonthlyEventArticle: () => void,
  onClickMeta: () => void,
  onCloseMeta: () => void,
}) => {
  const articleEncoded = activeMonthlyEvent.article
  const articleDecoded = Base64.decode(articleEncoded)

  if (store.editing) {
    return (
      <div className="monthlyEvent">
        {showMeta &&
          <MonthlyEventMeta
            activeMonthlyEvent={activeMonthlyEvent}
            year={year}
            month={month}
            onCloseMeta={onCloseMeta}
          />}
        <Editor
          doc={activeMonthlyEvent}
          docType="monthlyEvent"
          articleDecoded={articleDecoded}
          onSaveMonthlyEventArticle={onSaveMonthlyEventArticle}
        />
        <Button style={metaButtonStyle} onClick={onClickMeta}>
          arrivals & victims
        </Button>
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
