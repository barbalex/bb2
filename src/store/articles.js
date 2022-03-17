import { action } from 'mobx'
import app from 'ampersand-app'
import moment from 'moment'
import slug from 'speakingurl'
import { navigate } from '@reach/router'

import getArticles from '../modules/getArticles'
import getPathFromDocId from '../modules/getPathFromDocId'
import sortArticles from '../modules/sortArticles'
import slugOptions from '../modules/slugOptions'

export default (store) => ({
  articles: [],

  // cache the id, not the entire doc
  // advantage: on first load articles is empty so no activeArticle can be gotten
  // but if id is used, this can be cached
  activeArticleId: null,
  setActiveArticleId: action('activeArticleId', (val) => {
    store.articles.activeArticleId = val
  }),

  get activeArticle() {
    return store.articles.articles.find(
      (article) => article._id === store.articles.activeArticleId,
    )
  },

  getArticlesCallback: null,

  getArticles: action('getArticles', async () => {
    let articles
    try {
      articles = await getArticles(store)
    } catch (error) {
      store.error.showError({
        msg: error,
      })
    }
    store.articles.articles = articles
    if (store.articles.getArticlesCallback) {
      store.articles.getArticlesCallback()
      store.articles.getArticlesCallback = null
    }
  }),

  showNewArticle: false,

  toggleShowNewArticle: action(
    'toggleShowNewArticle',
    () => (store.articles.showNewArticle = !store.articles.showNewArticle),
  ),

  newArticle: action('newArticle', (title, date) => {
    const year = moment(date).year()
    const month = moment(date).format('MM')
    const day = moment(date).format('DD')
    const titleSlugified = slug(title, slugOptions)
    const _id = `commentaries_${year}_${month}_${day}_${titleSlugified}`
    const draft = true
    const article = 'IA=='
    const type = 'articles'
    const articleO = { _id, title, draft, article, type }
    store.articles.saveArticle(articleO)
  }),
})
