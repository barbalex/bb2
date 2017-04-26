/**
 * can't convert to es6 function because this is referenced
 */

import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'

const jumbotronStyle = {
  hyphens: 'manual',
}
const pStyle = { marginBottom: 0 }

class IntroJumbotron extends Component {
  displayName: 'IntroJumbotron'

  render() {
    return (
      <Jumbotron className="eventsIntro" style={jumbotronStyle}>
        <p style={pStyle}>
          Most mi­grants and re­fu­gees ar­ri­ving in Eu­ro­pe
          cross the blue bor­­ders of the Eas­­tern and Cen­­tral Me­diterrane­an.
          The flow is massive and high­ly com­plex. This web­­si­te provides a
          rough over­­view by co­ve­­ring chro­­no­­lo­­gi­­cal­­ly
          both ma­ri­­ti­me and political events.
        </p>
      </Jumbotron>
    )
  }
}
export default IntroJumbotron
