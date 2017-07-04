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

const Container = styled.div`
  table.new {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;
  }
  .new thead {
    background-color: rgb(250, 191, 143);
  }
  .new tr,
  .new th,
  .new td {
    border: 1px solid black;
    padding: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .new h1,
  .new h2,
  .new p {
    text-align: center;
  }
  .new h1 {
    font-size: 1em;
    font-weight: bold;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  .new h1 + h1 {
    margin-top: -15px;
  }
  .new h2 {
    font-size: 0.8em;
    font-weight: bold;
    text-decoration: underline;
    margin-top: 10px;
  }
  .new p {
    font-size: 0.8em;
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .new p.bold {
    font-weight: bold;
  }
  table.new {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;
  }
  .new thead {
    background-color: rgb(250, 191, 143);
  }
  .new tr,
  .new th,
  .new td {
    border: 1px solid black;
    padding: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .new h1,
  .new h2,
  .new p {
    text-align: center;
  }
  .new h1 {
    font-size: 1em;
    font-weight: bold;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  .new h1 + h1 {
    margin-top: -15px;
  }
  .new h2 {
    font-size: 0.8em;
    font-weight: bold;
    text-decoration: underline;
    margin-top: 10px;
  }
  .new p {
    font-size: 0.8em;
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .new p.bold {
    font-weight: bold;
  }
`
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
      <Container>
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

MonthlyEvent.displayName = 'MonthlyEvent'

export default enhance(MonthlyEvent)
