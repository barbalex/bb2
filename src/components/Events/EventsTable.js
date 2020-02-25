//
import React from 'react'
import GeminiScrollbar from 'react-gemini-scrollbar'
import { observer } from 'mobx-react-lite'
import compose from 'recompose/compose'
import styled from 'styled-components'

import DateRows from './DateRows'

const Container = styled.div`
  width: 100%;
  margin-bottom: 0;
`
const Header = styled.div`
  position: absolute;
  top: ${props => props['data-top']}px;
  width: 100%;
  font-weight: bold;
`
const HeaderCell = styled.div`
  font-size: ${typeof window !== `undefined`
    ? window.innerWidth < 500
      ? 20
      : 24
    : 1}px !important;
  padding: 5px;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`
const HeaderCellDay = styled(HeaderCell)`
  width: 60px;
  max-width: 60px;
  padding-right: 20px;
  text-align: right;
`
const HeaderCellMigration = styled(HeaderCell)`
  width: 50%;
  max-width: 50%;
  word-wrap: break-word;
  padding-right: 10px;
`
const HeaderCellPolitics = styled(HeaderCell)`
  width: 50%;
  max-width: 50%;
  word-wrap: break-word;
  padding-left: 10px;
`
const Body = styled.div`
  overflow-x: visible;
  overflow-y: auto;
  height: calc(100vh - 94px);
  margin-top: 77px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  width: 100%;
`
const HeaderRow = styled.div`
  display: flex;
`

const enhance = compose(observer)

const Events = ({ introJumbotronHeight }) => {
  const headerTop = introJumbotronHeight ? introJumbotronHeight + 88 : 173

  return (
    <Container>
      <Header data-top={headerTop} className="eventsTable-header">
        <HeaderRow>
          <HeaderCellDay />
          <HeaderCellMigration>Maritime Events</HeaderCellMigration>
          <HeaderCellPolitics>Political Events</HeaderCellPolitics>
        </HeaderRow>
      </Header>
      <Body>
        <GeminiScrollbar id="eventsTableBody" autoshow>
          <DateRows />
        </GeminiScrollbar>
      </Body>
    </Container>
  )
}

Events.displayName = 'Events'

export default enhance(Events)
