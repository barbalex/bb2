/**
 * can't convert to es6 function because this is referenced
 */

import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import styled from '@emotion/styled'

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

const IntroJumbotron = () => (
  <StyledJumbotron className="eventsIntro">
    <P>
      Large numbers of migrants and refugees arriving in Europe cross some part
      of the Mediterranean. The purpose of this website is to take a look at the
      most important route, that of the Central Mediterranean by focusing on
      both maritime and political events.
    </P>
  </StyledJumbotron>
)
export default IntroJumbotron
