/**
 * can't convert to es6 function because this is referenced
 */

import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'

const StyledJumbotron = styled(Jumbotron)`
  hyphens: manual;
`
const P = styled.p`margin-bottom: 0;`

class IntroJumbotron extends Component {
  displayName: 'IntroJumbotron'

  render() {
    return (
      <StyledJumbotron className="eventsIntro">
        <P>
          Most mi­grants and re­fu­gees ar­ri­ving in Eu­ro­pe cross the blue
          bor­­ders of the Eas­­tern and Cen­­tral Me­diterrane­an. The flow is
          massive and high­ly com­plex. This web­­si­te provides a rough
          over­­view by co­ve­­ring chro­­no­­lo­­gi­­cal­­ly both ma­ri­­ti­me
          and political events.
        </P>
      </StyledJumbotron>
    )
  }
}
export default IntroJumbotron
