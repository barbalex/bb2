import Reflux from 'reflux'

export default () =>
  Reflux.createActions({
    getEvents: {},
    getEvent: {},
    getYearsOfEvents: {},
    saveEvent: {},
    newEvent: {},
    removeEvent: {},
    replaceEvent: {},
    getCommentaries: {},
    getCommentary: {},
    saveCommentary: {},
    newCommentary: {},
    removeCommentary: {},
    toggleDraftOfCommentary: {},
    getPublications: {},
    getPublication: {},
    savePublication: {},
    newPublication: {},
    setPublicationCategory: {},
    removePublication: {},
    toggleDraftOfPublication: {},
    getActors: {},
    getActor: {},
    saveActor: {},
    newActor: {},
    removeActor: {},
    toggleDraftOfActor: {},
    login: {},
    logout: {},
    showError: {}
  })
