//
import React from 'react'
import { Glyphicon } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import allTags from './tags'

const Container = styled.div`
  margin-bottom: 20px;
`
const Label = styled.div`
  font-weight: bold;
  margin-bottom: 2px;
`
const StyledGlyphicon = styled(Glyphicon)`
  top: ${(props) => props['data-top']} !important;
  font-size: 1.5em;
`

const EventTags = ({ activeEvent, saveToDb }) => {
  return (
    <Container>
      <Label>Tags</Label>
      <div className="event-tags">
        {allTags.map((option, index) => (
          <div key={index} className="form-group event-tag">
            <label>
              <input
                type="checkbox"
                checked={activeEvent.tags?.includes(option.tag)}
                onChange={(event) => {
                  if (event.target.checked) {
                    saveToDb({
                      field: 'tags',
                      value: JSON.stringify([...activeEvent.tags, option.tag]),
                    })
                  } else {
                    saveToDb({
                      field: 'tags',
                      value: JSON.stringify(
                        activeEvent.tags.filter((t) => t !== option.tag),
                      ),
                    })
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
