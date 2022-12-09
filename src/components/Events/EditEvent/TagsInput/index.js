//
import React from 'react'
import styled from '@emotion/styled'

import TagInput from './TagInput'
import tags from './tags'

const Container = styled.div`
  margin-bottom: 20px;
`
const Label = styled.div`
  font-weight: bold;
  margin-bottom: 2px;
`

const TagsInput = ({ event, setError }) => (
  <Container>
    <Label>Tags</Label>
    <div className="event-tags">
      {tags.map((tag) => (
        <TagInput key={tag.tag} event={event} tag={tag} setError={setError} />
      ))}
    </div>
  </Container>
)

export default TagsInput
