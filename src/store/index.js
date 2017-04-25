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
    removePageAttachment: null,
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
    toggleDraftOfMonthlyEvent: null,
  }
  this.yearsOfEvents = {
    yearsOfEvents: [],
    getYearsOfEvents: null,
  }
  this.events = {
    events: [],
    activeEventId: null,
    activeEvent: null,
    getEventsCallback: null,
    getEvents: null,
    newEvent: null,
    getEvent: null,
    updateEventsInCache: null,
    revertCache: null,
    saveEvent: null,
    removeEventFromCache: null,
    removeEvent: null,
    replaceEvent: null,
  }
  this.commentaries = {
    commentaries: [],
    activeCommentaryId: null,
    activeCommentary: null,
    getCommentariesCallback: null,
    getCommentaries: null,
    newCommentary: null,
    getCommentary: null,
  }
}

const MyStore = new Store()

extendStore(MyStore)

export default MyStore
