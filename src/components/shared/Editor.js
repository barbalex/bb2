//
import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Base64 } from 'js-base64'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

const enhance = compose(
  inject('store'),
  withHandlers({
    onSavePageArticle: props => articleEncoded => {
      const { activePage } = props.store.page
      activePage.article = articleEncoded
      props.store.page.savePage(activePage)
    },
    onSaveArticleArticle: props => articleEncoded => {
      const { activeArticle } = props.store.articles
      activeArticle.article = articleEncoded
      props.store.articles.saveArticle(activeArticle)
    },
    onSaveActorArticle: props => articleEncoded => {
      const { activeActor } = props.store.actors
      activeActor.article = articleEncoded
      props.store.actors.saveActor(activeActor)
    },
    onSavePublicationArticle: props => articleEncoded => {
      const { activePublication } = props.store.publications
      activePublication.article = articleEncoded
      props.store.publications.savePublication(activePublication)
    },
    onSaveMonthlyEventArticle: props => articleEncoded => {
      const { activeMonthlyEvent, saveMonthlyEvent } = props.store.monthlyEvents
      activeMonthlyEvent.article = articleEncoded
      saveMonthlyEvent(activeMonthlyEvent)
    },
  }),
  observer,
)

class MyEditor extends Component {
  componentDidMount() {
    const { doc } = this.props

    // scroll editor to top in pages
    if (doc.type === 'pages' && typeof window !== `undefined`) {
      window.$('html, body').animate(
        {
          scrollTop: 140,
        },
        800,
      )
    }
  }

  render() {
    const {
      store,
      doc,
      docType,
      onSavePageArticle,
      onSaveMonthlyEventArticle,
      onSavePublicationArticle,
      onSaveArticleArticle,
      onSaveActorArticle,
      articleDecoded,
    } = this.props
    // height = window - menu height - (menubar + iconbar)
    let height =
      typeof window !== `undefined` ? window.innerHeight - 52 - 74 : 1
    if (
      ['monthlyEvent', 'publication'].includes(docType) &&
      typeof window !== `undefined`
    ) {
      height = window.innerHeight - 52 - 74 - 76
    }
    if (
      ['article', 'actor'].includes(docType) &&
      typeof window !== `undefined`
    ) {
      height = window.innerHeight - 52 - 74 - 90
    }
    // need to add specific classes to the iframe body because my css will not apply otherwise
    let bodyClass = ''
    let saveFunction = () => {}
    switch (docType) {
      case 'page':
        bodyClass = ''
        saveFunction = onSavePageArticle
        break
      case 'monthlyEvent':
        bodyClass = 'monthlyEvent'
        saveFunction = onSaveMonthlyEventArticle
        break
      case 'publication':
        bodyClass = 'publication'
        saveFunction = onSavePublicationArticle
        break
      case 'article':
        bodyClass = 'article'
        saveFunction = onSaveArticleArticle
        break
      case 'actor':
        bodyClass = 'actor'
        saveFunction = onSaveActorArticle
        break
      default:
        return store.error.showEdit('no or wrong docType passed to editor')
    }

    return (
      <Editor
        id={doc._id}
        apiKey="58ali3ylgj6fv1zfjv6vdjkkt32yjw36v1iypn95psmae799"
        initialValue={articleDecoded}
        init={{
          selector: `#${doc._id}`,
          plugins: [
            'advlist autolink link image lists charmap print hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen media nonbreaking',
            'save table contextmenu directionality template paste textcolor autosave',
          ],
          menubar: 'edit insert view format table tools',
          toolbar:
            'insertfile undo redo | styleselect | bold italic underline forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print code fullscreen',
          height,
          browser_spellcheck: true,
          automatic_uploads: false,
          statusbar: false,
          body_class: bodyClass,
          content_css: `${process.env.PUBLIC_URL}/tinymce.css`,
        }}
        onChange={e => {
          const articleDecoded = e.target.getContent()
          const articleEncoded = Base64.encode(articleDecoded)
          saveFunction(articleEncoded)
        }}
      />
    )
  }
}

export default enhance(MyEditor)
