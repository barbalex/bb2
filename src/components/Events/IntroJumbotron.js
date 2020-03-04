/**
 * can't convert to es6 function because this is referenced
 */

import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'
import ReactResizeDetector from 'react-resize-detector'

const StyledJumbotron = styled(Jumbotron)`
  hyphens: manual !important;
  padding-left: 30px !important;
  padding-right: 30px !important;
  padding-top: 20px !important;
  padding-bottom: 15px !important;
  margin-top: 30px !important;
  margin-bottom: 20px !important;
  text-align: center !important;
  background-color: transparent !important;
  border: 0 solid #ddd !important;
  border-radius: 4px !important;
`
const P = styled.p`
  margin-bottom: 0 !important;
  font-size: 18px !important;
`

const IntroJumbotron = ({ onResize }) => (
  <StyledJumbotron className="eventsIntro">
    <ReactResizeDetector handleHeight onResize={onResize} />
    <P>
      Most migrants and refugees arriving in Europe cross the Mediterranean. The
      purpose of this website is to provide a rough overview by focusing mainly
      on the Central Med and by covering both maritime and political events.
    </P>
  </StyledJumbotron>
)
export default IntroJumbotron
