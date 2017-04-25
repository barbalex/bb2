import extendPage from './page'
import extendMonthlyEvents from './monthlyEvents'
import extendYearsOfEvents from './yearsOfEvents'

export default (store: Object): void => {
  extendPage(store)
  extendMonthlyEvents(store)
  extendYearsOfEvents(store)
}
