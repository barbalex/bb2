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

const enhance = compose(
  inject(`store`),
  withHandlers({
    onClickGlyph: props => () => props.store.error.showError(),
  }),
  observer,
)

/**
 * BEWARE OF BOOTSTRAP
 * wanted to use styled-components to styled
 * but did not work AT ALL
 * styles for div with id = errors never even appeared!!!
 */
const glyphStyle = {
  position: 'absolute',
  top: 3,
  right: 3,
  fontSize: 18,
  cursor: 'pointer',
}

const Errors = ({
  store,
  onClickGlyph,
}: {
  store: Object,
  onClickGlyph: () => void,
}) => (
  <Overlay show={store.error.errors.length > 0}>
    <div id="errors">
      <Glyphicon
        glyph="remove-circle"
        style={glyphStyle}
        onClick={onClickGlyph}
      />
      {store.error.errors.map((error, index) => (
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
      ))}
    </div>
  </Overlay>
)

Errors.displayName = 'Errors'

export default enhance(Errors)
