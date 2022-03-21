//
import React from 'react'
import { PanelGroup, Panel } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'

import MonthlyEventsOfYear from './MonthlyEventsOfYear'
import oceanDarkImage from '../../images/oceanDark.jpg'
import years from './years'

const Container = styled.div`
  p,
  div {
    font-size: medium;
  }
  margin-bottom: 20px !important;
  .panel-body {
    padding: 0 0 !important;
  }
  .panel-group {
    margin-bottom: 0 !important;
  }
  .panel.month {
    margin-top: 0 !important;
    border-radius: 0 !important;
    border-top-width: 0 !important;
    border-right-width: 0 !important;
    border-left-width: 0 !important;
  }
  .panel.month > .panel-heading {
    background-color: transparent !important;
  }
  .panel.month .panel-heading:hover {
    background-color: #f5f5f5 !important;
  }
  .panel-heading {
    cursor: pointer !important;
  }
  .panel.month > .panel-heading h4 {
    font-weight: bold !important;
    z-index: 0 !important;
  }
  .panel.month:last-of-type {
    border-bottom-width: 0 !important;
  }
  .panel.month .panel-body table {
    margin-left: 0 !important;
    width: 100% !important;
  }
`
const StyledPanelHeading = styled(Panel.Heading)`
  background-image: url(${oceanDarkImage});
  border-radius-top-left: 3px;
  border-radius-top-right: 3px;
  color: #edf4f8 !important;
  font-weight: bold !important;
`

const MonthlyEvents = ({ year: activeYear, month: activeMonth }) => {
  return (
    <DocumentTitle title="Events">
      <Container id="monthlyEvents">
        <h1>Events Archive</h1>
        <PanelGroup
          id={`monthlyEvents`}
          defaultActiveKey={activeYear}
          accordion
        >
          {years.map((year) => (
            <Panel key={year} header={year} eventKey={year}>
              <StyledPanelHeading>{year}</StyledPanelHeading>
              <MonthlyEventsOfYear
                year={year}
                activeYear={activeYear}
                activeMonth={activeMonth}
              />
            </Panel>
          ))}
        </PanelGroup>
      </Container>
    </DocumentTitle>
  )
}

export default observer(MonthlyEvents)
