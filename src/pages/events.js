import React, { useContext } from 'react'
import { observer } from 'mobx-react'

import Events from '../components/Events'
import storeContext from '../storeContext'

/**
 * Weird thing:
 * cannot useContext to get store
 * Error is: hooks can only be used in function components...
 */
const MyEvents = () => {
  const store = useContext(storeContext)
  store.page.getPage('pages_events')
  return <Events />
}

export default observer(MyEvents)
