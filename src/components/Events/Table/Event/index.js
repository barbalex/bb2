import React, { useContext, useMemo } from 'react'
import { Glyphicon } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import RemoveEventGlyph from './RemoveEventGlyph'
import EditEventGlyph from './EditEventGlyph'
import storeContext from '../../../../storeContext'

const StyledGlyphicon = styled(Glyphicon)`
  font-size: 0.7em;
  padding-right: 3px;
  vertical-align: 10%;
`
const OuterSpan = styled.span`
  padding-left: 5px;
`

const Event = ({ event }) => {
  const store = useContext(storeContext)
  const showEditingGlyphons = !!store.login.user
  const classNames = (event.tags ?? []).map((tag) => `event-${tag}`).join(' ')
  const links = useMemo(() => event.links ?? [], [event.links])

  console.log('Event, links', { links, map: links.map, id: event.id })

  const Links =
    links.map((l, key) => (
      <OuterSpan key={key}>
        {key > 0 && ' '}
        <a href={l.url} target="_blank" rel="noopener noreferrer">
          <StyledGlyphicon glyph="new-window" />
          {l.label}
        </a>
      </OuterSpan>
    )) ?? null

  return (
    <li className={classNames}>
      <p className={classNames}>
        {event.title} <span>{Links}</span>
        {showEditingGlyphons && <EditEventGlyph event={event} />}
        {showEditingGlyphons && <RemoveEventGlyph event={event} />}
      </p>
    </li>
  )
}

export default observer(Event)
