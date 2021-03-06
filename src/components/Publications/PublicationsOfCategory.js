//
import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import PublicationPanel from './PublicationPanel'
import storeContext from '../../storeContext'

const PanelGroup = styled.div`
  margin-bottom: 0 !important;
`

const PublicationsOfCategory = ({ category }) => {
  const store = useContext(storeContext)
  let { publications } = store.publications

  return (
    <PanelGroup className="panel-group" id={category}>
      {publications
        .filter(publication => publication.category === category)
        .sort((a, b) => {
          if (a.order && b.order) {
            if (a.order < b.order) return -1
            return 1
          }
          if (a.title < b.title) return -1
          return 1
        })
        .map((doc, dIndex) => (
          <PublicationPanel
            key={doc._id}
            category={category}
            doc={doc}
            dIndex={dIndex}
          />
        ))}
    </PanelGroup>
  )
}
export default observer(PublicationsOfCategory)
