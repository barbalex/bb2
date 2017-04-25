import extendPage from './page'
import extendMonthlyEvents from './monthlyEvents'
import extendYearsOfEvents from './yearsOfEvents'
import extendEvents from './events'
import extendCommentaries from './commentaries'
import extendPublications from './publications'
import extendActors from './actors'

export default (store: Object): void => {
  extendPage(store)
  extendMonthlyEvents(store)
  extendYearsOfEvents(store)
  extendEvents(store)
  extendCommentaries(store)
  extendPublications(store)
  extendActors(store)
}
