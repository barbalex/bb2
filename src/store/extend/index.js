import extendPage from './page'
import extendMonthlyEvents from './monthlyEvents'
import extendYearsOfEvents from './yearsOfEvents'
import extendEvents from './events'

export default (store: Object): void => {
  extendPage(store)
  extendMonthlyEvents(store)
  extendYearsOfEvents(store)
  extendEvents(store)
}
