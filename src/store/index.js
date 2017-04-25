// @flow
import extendStore from './extend'

function Store(): void {
  this.page = {
    activePage: null,
    editing: false,
    showMeta: false,
    getPage: null,
    savePage: null,
    addPageAttachments: null,
    removePageAttachment: null
  }
  this.monthlyEvents = {
    monthlyEvents: [],
    activeMonthlyEventId: null,
    activeMonthlyEvent: null,
    getMonthlyEventsCallback: null,
    getMonthlyEvents: null,
    getMonthlyEvent: null,
    updateMonthlyEventsInCache: null,
    revertCache: null,
    saveMonthlyEvent: null,
    removeMonthlyEventFromCache: null,
    removeMonthlyEvent: null,
    toggleDraftOfMonthlyEvent: null
  }
  this.yearsOfEvents = {
    yearsOfEvents: [],
    getYearsOfEvents: null
  }
  this.events = {}
}

const MyStore = new Store()

extendStore(MyStore)

export default MyStore
