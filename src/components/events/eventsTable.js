// @flow
import React from 'react'
import GeminiScrollbar from 'react-gemini-scrollbar'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import styled from 'styled-components'

import DateRows from './dateRows'

const Container = styled.div`
  width: 100%;
  margin-bottom: 0;
`
const Header = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  width: 100%;
  font-weight: bold;
`
const HeaderCell = styled.div`
  font-size: ${props => props.fontSize}px;
  padding: 5px;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`
const headerCellFontSize = window.innerWidth < 500 ? 20 : 24
const Body = styled.div`
  overflow-x: visible;
  overflow-y: auto;
  height: calc(100vh - 94px);
  margin-top: 77px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  width: 100%;
`

const enhance = compose(inject(`store`), observer)

const Events = ({
  store,
  introJumbotronHeight,
}: {
  store: Object,
  introJumbotronHeight: number,
}) => {
  const headerTop = introJumbotronHeight ? introJumbotronHeight + 88 : 173

  return (
    <Container>
      <Header top={headerTop} className="eventsTable-header">
        <div className="eventsTable-header-row">
          <HeaderCell
            className="eventsTable-cell-day"
            fontSize={headerCellFontSize}
          />
          <HeaderCell
            className="eventsTable-cell-migration"
            fontSize={headerCellFontSize}
          >
            Maritime Events
          </HeaderCell>
          <HeaderCell
            className="eventsTable-cell-politics"
            fontSize={headerCellFontSize}
          >
            Political Events
          </HeaderCell>
        </div>
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
