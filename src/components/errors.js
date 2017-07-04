// @flow
/*
 * receives an object with two keys: title, msg
 * displays it while the object is present
 *
 * if a view wants to inform of an error it
 * calls action showError and passes the object
 * the errorStore triggers, passing the error
 * ...then triggers again some time later, passing an empty error object
 */

import React from 'react'
import { Overlay, Glyphicon } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'

const StyledGlyphicon = styled(Glyphicon)`
  position: absolute !important;
  top: 3px !important;
  right: 3px;
  font-size: 18px;
  cursor: pointer;
`

const enhance = compose(
  inject(`store`),
  withHandlers({
    onClickGlyph: props => () => props.store.error.showError(),
  }),
  observer
)

const Errors = ({
  store,
  onClickGlyph,
}: {
  store: Object,
  onClickGlyph: () => void,
}) =>
  <Overlay show={store.error.errors.length > 0}>
    <div id="errors">
      <StyledGlyphicon glyph="remove-circle" onClick={onClickGlyph} />
      {store.error.errors.map((error, index) =>
        <div className="errorContainer" key={index}>
          <div className="error">
            {error.title &&
              <p>
                {error.title}
              </p>}
            <p>
              <em>
                {error.msg}
              </em>
            </p>
          </div>
          {index + 1 < store.error.errors.length && <hr />}
        </div>
      )}
    </div>
  </Overlay>

Errors.displayName = 'Errors'

export default enhance(Errors)
