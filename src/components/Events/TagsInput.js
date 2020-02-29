//
import React, { useContext } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import allTags from './tags'
import storeContext from '../../storeContext'

const Container = styled.div`
  margin-bottom: 20px;
`
const Label = styled.div`
  font-weight: bold;
  margin-bottom: 2px;
`
const StyledGlyphicon = styled(Glyphicon)`
  top: ${props => props['data-top']} !important;
  font-size: 1.5em;
`

const EventTags = ({ onChangeTag }) => {
  const store = useContext(storeContext)
  const { activeEvent, saveEvent } = store.events

  return (
    <Container>
      <Label>Tags</Label>
      <div className="event-tags">
        {allTags.map((option, index) => (
          <div key={index} className="form-group event-tag">
            <label>
              <input
                type="checkbox"
                checked={activeEvent.tags.includes(option.tag)}
                onChange={event => {
                  const checked = event.target.checked
                  if (checked) {
                    activeEvent.tags.push(option.tag)
                    saveEvent(activeEvent)
                  } else {
                    activeEvent.tags = activeEvent.tags.filter(
                      _tag => _tag !== option.tag,
                    )
                    saveEvent(activeEvent)
                  }
                }}
              />
              {option.iconText && (
                <StyledGlyphicon
                  glyph={option.iconText}
                  data-top={option.top ? `${option.top}px` : 0}
                />
              )}
              &nbsp;{option.tag}
            </label>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default observer(EventTags)
