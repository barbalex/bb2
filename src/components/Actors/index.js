//
import React, { useContext, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { PanelGroup } from 'react-bootstrap'
import sortBy from 'lodash/sortBy'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'

import ActorPanel from './ActorPanel'
import NewActor from './NewActor'
import ModalRemoveActor from './ModalRemoveActor'
import SwallowPanelGroupProps from '../shared/SwallowPanelGroupProps'
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

const enhance = compose(
  inject('store'),
  withHandlers({
    onRemoveActor: props => (docToRemove, event) => {
      event.preventDefault()
      event.stopPropagation()
      props.store.actors.setActorToRemove(docToRemove)
    },
    onToggleDraft: props => (doc, event) => {},
  }),
  observer,
)

const Actors = ({ category }) => {
  const store = useContext(storeContext)
  const { activeActor, showNewActor, actors } = store.actors
  const activeId = activeActor ? activeActor._id : null

  const scrollToActivePanel = useCallback(() => {
    const node = ReactDOM.findDOMNode(this._activeActorPanel)
    if (node) {
      const navWrapperOffsetTop = document.getElementById('nav-wrapper')
        .offsetTop
      const reduce = navWrapperOffsetTop > 0 ? navWrapperOffsetTop - 33 : 55
      if (node.offsetTop && typeof window !== `undefined`) {
        window.scroll({ top: node.offsetTop - reduce, behavior: 'smooth' })
      }
    }
  }, [])

  useEffect(() => {
    store.page.getPage('pages_actors')
    store.actors.getActors()
  }, [store.actors, store.page])
  useEffect(() => {
    if (!!category) store.actors.activeActorId = `actors_${category}`
    if (activeActor) {
      window.setTimeout(() => {
        scrollToActivePanel()
      }, 200)
    }
  }, [
    activeId,
    category,
    scrollToActivePanel,
    activeActor,
    store.actors.activeActorId,
  ])

  const actorsSorted = sortBy(actors, actor => {
    if (actor.order) return actor.order
    return 100
  })

  return (
    <DocumentTitle title="Actors">
      <Container>
        <h1>Actors</h1>
        <PanelGroup defaultActiveKey={activeId} id="actorsAccordion" accordion>
          <SwallowPanelGroupProps>
            {actorsSorted.map((doc, index) => (
              <ActorPanel doc={doc} index={index} />
            ))}
          </SwallowPanelGroupProps>
        </PanelGroup>
        {showNewActor && <NewActor />}
        {store.actors.actorToRemove && <ModalRemoveActor />}
      </Container>
    </DocumentTitle>
  )
}

export default enhance(Actors)
