//
import React, { useCallback, useMemo } from 'react'
import { Glyphicon } from 'react-bootstrap'
import styled from 'styled-components'
import { gql, useApolloClient } from '@apollo/client'

const StyledGlyphicon = styled(Glyphicon)`
  top: ${(props) => props['data-top']} !important;
  font-size: 1.5em;
`

const TagInput = ({ event, tag, setError }) => {
  const client = useApolloClient()
  const tags = useMemo(() => [...(event?.tags ?? [])], [event.tags])

  const onChange = useCallback(
    (ev) => {
      const newTags = ev.target.checked
        ? [...tags, tag.tag]
        : tags.filter((t) => t !== tag.tag)
      try {
        client.mutate({
          mutation: gql`
            mutation mutateEvent($id: uuid!, $val: jsonb) {
              update_event_by_pk(
                pk_columns: { id: $id }
                _set: { tags: $val }
              ) {
                id
                tags
              }
            }
          `,
          variables: { id: event.id, val: newTags },
        })
      } catch (error) {
        setError(error)
      }
    },
    [client, event.id, setError, tag.tag, tags],
  )

  return (
    <div className="form-group event-tag">
      <label>
        <input
          type="checkbox"
          checked={tags?.includes(tag.tag)}
          onChange={onChange}
        />
        {tag.iconText && (
          <StyledGlyphicon
            glyph={tag.iconText}
            data-top={tag.top ? `${tag.top}px` : 0}
          />
        )}
        &nbsp;{tag.tag}
      </label>
    </div>
  )
}

export default TagInput
