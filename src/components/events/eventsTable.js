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
`
const HeaderCell = styled.div`font-size: ${props => props.fontSize}px;`
const headerCellFontSize = window.innerWidth < 500 ? 20 : 24

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
            className="eventsTable-header-cell eventsTable-cell-day"
            fontSize={headerCellFontSize}
          />
          <HeaderCell
            className="eventsTable-header-cell eventsTable-cell-migration"
            fontSize={headerCellFontSize}
          >
            Maritime Events
          </HeaderCell>
          <HeaderCell
            className="eventsTable-header-cell eventsTable-cell-politics"
            fontSize={headerCellFontSize}
          >
            Political Events
          </HeaderCell>
        </div>
      </Header>
      <div className="eventsTable-body">
        <GeminiScrollbar id="eventsTableBody" autoshow>
          <DateRows />
        </GeminiScrollbar>
      </div>
    </Container>
  )
}

Events.displayName = 'Events'

export default enhance(Events)
