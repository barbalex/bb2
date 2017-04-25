// @flow
import { extendObservable, action, computed } from 'mobx'
import app from 'ampersand-app'
import moment from 'moment'

import getCommentaries from '../../modules/getCommentaries.js'
import getPathFromDoc from '../../modules/getPathFromDoc.js'

export default (store: Object): void => {
  extendObservable(store.commentaries, {
    commentaries: [],

    // cache the id, not the entire doc
    // advantage: on first load commentaries is empty so no activeCommentary can be gotten
    // but if id is used, this can be cached
    activeCommentaryId: null,

    activeCommentary: computed(
      (): ?Object =>
        store.commentaries.commentaries.find(
          commentary =>
            commentary._id === store.commentaries.activeCommentaryId,
        ),
      { name: `activeCommentary` },
    ),

    getCommentariesCallback: null,

    getCommentaries: action('getCommentaries', (): void =>
      getCommentaries()
        .then(commentaries => {
          store.commentaries.commentaries = commentaries
          if (store.commentaries.getCommentariesCallback) {
            store.commentaries.getCommentariesCallback()
            store.commentaries.getCommentariesCallback = null
          }
        })
        .catch(error =>
          app.Actions.showError({
            msg: error,
          }),
        ),
    ),

    newCommentary: action(
      'newCommentary',
      (title: string, date: Date): void => {
        const year = moment(date).year()
        const month = moment(date).format('MM')
        const day = moment(date).format('DD')
        const _id = `commentaries_${year}_${month}_${day}_${title}`
        const draft = true
        const article = 'IA=='
        const type = 'commentaries'
        const commentary = { _id, title, draft, article, type }
        store.commentaries.saveCommentary(commentary)
      },
    ),

    getCommentary: action('getCommentary', (id: ?string): void => {
      if (!id) {
        app.router.navigate('/commentaries')
        store.commentaries.activeCommentaryId = null
      } else {
        store.commentaries.activeCommentaryId = id
        if (store.commentaries.commentaries.length === 0) {
          // on first load commentaries is empty
          // need to wait until onGetCommentaries fires
          store.commentaries.getCommentariesCallback = () => {
            const commentary = store.commentaries.commentaries.find(
              c => c._id === id,
            )
            const path = getPathFromDoc(commentary)
            app.router.navigate(`/${path}`)
          }
        } else {
          const commentary = store.commentaries.commentaries.find(
            c => c._id === id,
          )
          const path = getPathFromDoc(commentary)
          app.router.navigate(`/${path}`)
        }
      }
    }),
  })
}
