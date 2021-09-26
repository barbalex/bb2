//
import React, { useContext, useEffect } from 'react'
import { PanelGroup } from 'react-bootstrap'
import sortBy from 'lodash/sortBy'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'

import ActorPanel from './ActorPanel'
import NewActor from './NewActor'
import ModalRemoveActor from './ModalRemoveActor'
import oceanDarkImage from '../../images/oceanDark.jpg'
import storeContext from '../../storeContext'

const Container = styled.div`
  p,
  div {
    font-size: medium;
  }
  font-size: x-large;
  font-weight: 700;
  h2 {
    font-size: large;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .panel-heading {
    background-image: url(${oceanDarkImage});
  }
  .panel-heading a {
    color: #edf4f8;
    font-weight: bold;
  }
`

const Actors = ({ category }) => {
  const store = useContext(storeContext)
  const { activeActor, showNewActor, actors } = store.actors
  const activeId = activeActor ? activeActor._id : null

  useEffect(() => {
    store.page.getPage('pages_actors')
    store.actors.getActors()
  }, [store.actors, store.page])

  const actorsSorted = sortBy(actors, (actor) => {
    if (actor.order) return actor.order
    return 100
  })

  return (
    <DocumentTitle title="Actors">
      <Container>
        <h1>Actors</h1>
        <PanelGroup defaultActiveKey={activeId} id="actorsAccordion" accordion>
          {actorsSorted.map((doc, index) => (
            <ActorPanel
              key={doc._id}
              doc={doc}
              index={index}
              category={category}
            />
          ))}
        </PanelGroup>
        {showNewActor && <NewActor />}
        {store.actors.actorToRemove && <ModalRemoveActor />}
      </Container>
    </DocumentTitle>
  )
}

export default observer(Actors)
