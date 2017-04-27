// @flow
import app from 'ampersand-app'
import map from 'lodash/map'
import sortCommentaries from './sortCommentaries.js'

const options = {
  include_docs: true,
  startkey: 'commentaries_',
  endkey: 'commentaries_\uffff',
}

export default (store: Object): Promise<Array<Object>> =>
  app.db
    .allDocs(options)
    .then(result => {
      let commentaries = map(result.rows, 'doc')
      commentaries = sortCommentaries(commentaries)
      return commentaries
    })
    .catch(error =>
      store.error.showError('Error fetching commentaries:', error),
    )
