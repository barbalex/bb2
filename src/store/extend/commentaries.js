// @flow
import { extendObservable, action, computed } from 'mobx'
import app from 'ampersand-app'
import moment from 'moment'

import getCommentaries from '../../modules/getCommentaries.js'
import getPathFromDoc from '../../modules/getPathFromDoc.js'
import sortCommentaries from '../../modules/sortCommentaries.js'

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

    updateCommentariesInCache: action(
      'updateCommentariesInCache',
      (commentary: Object): void => {
        // first update the commentary in store.commentaries.commentaries
        store.commentaries.commentaries = store.commentaries.commentaries.filter(
          c => c._id !== commentary._id,
        )
        store.commentaries.commentaries.push(commentary)
        store.commentaries.commentaries = sortCommentaries(
          store.commentaries.commentaries,
        )
      },
    ),

    revertCache: action(
      'revertCache',
      (oldCommentaries: Object, oldActiveCommentaryId: string): void => {
        store.commentaries.commentaries = oldCommentaries
        store.commentaries.activeCommentaryId = oldActiveCommentaryId
      },
    ),

    saveCommentary: action('saveCommentary', (commentary: Object): void => {
      // keep old cache in case of error
      const oldCommentaries = store.commentaries.commentaries
      const oldActiveCommentaryId = store.commentaries.activeCommentaryId
      // optimistically update in cache
      store.commentaries.updateCommentariesInCache(commentary)
      app.db
        .put(commentary)
        .then(resp => {
          // resp.rev is new rev
          commentary._rev = resp.rev
          // definitely update in cache
          store.commentaries.updateCommentariesInCache(commentary)
        })
        .catch(error => {
          store.commentaries.revertCache(oldCommentaries, oldActiveCommentaryId)
          app.Actions.showError({
            title: 'Error saving commentary:',
            msg: error,
          })
        })
    }),
    removeCommentaryFromCache: action(
      'removeCommentaryFromCache',
      (commentary: Object): void => {
        // first update the commentary in store.commentaries.commentaries
        store.commentaries.commentaries = store.commentaries.commentaries.filter(
          thisCommentary => thisCommentary._id !== commentary._id,
        )
        store.commentaries.commentaries = sortCommentaries(
          store.commentaries.commentaries,
        )
        // now update store.commentaries.activeCommentaryId if it is the active commentary's _id
        const isActiveCommentary =
          store.commentaries.activeCommentaryId === commentary._id
        if (isActiveCommentary) store.commentaries.activeCommentaryId = null
      },
    ),

    removeCommentary: action('removeCommentary', (commentary: Object): void => {
      // keep old cache in case of error
      const oldCommentaries = store.commentaries.commentaries
      const oldActiveCommentaryId = store.commentaries.activeCommentaryId
      // optimistically remove event from cache
      store.commentaries.removeCommentaryFromCache(commentary)
      app.db.remove(commentary).catch(error => {
        // oops. Revert optimistic removal
        store.commentaries.revertCache(oldCommentaries, oldActiveCommentaryId)
        app.Actions.showError({
          title: 'Error removing commentary:',
          msg: error,
        })
      })
    }),

    toggleDraftOfCommentary: action(
      'toggleDraftOfCommentary',
      (commentary: Object): void => {
        if (commentary.draft === true) {
          delete commentary.draft
        } else {
          commentary.draft = true
        }
        store.commentaries.saveCommentary(commentary)
      },
    ),
  })
}
