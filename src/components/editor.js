// @flow
import React, { Component } from 'react'
import { Base64 } from 'js-base64'
import tinymce from 'tinymce'
import 'tinymce/themes/modern'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/print'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/media'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/save'
import 'tinymce/plugins/table'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/template'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/autosave'
import { observer, inject } from 'mobx-react'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

const enhance = compose(
  inject(`store`),
  withState('doc', 'changeDoc', {}),
  withHandlers({
    onSavePageArticle: props => articleEncoded => {
      const { activePage } = props.store.page
      activePage.article = articleEncoded
      props.store.page.savePage(activePage)
    },
    onSaveCommentaryArticle: props => articleEncoded => {
      console.log('saving commentary')
      const { activeCommentary } = props.store.commentaries
      activeCommentary.article = articleEncoded
      props.store.commentaries.saveCommentary(activeCommentary)
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

class Editor extends Component {
  displayName: 'Editor'

  props: {
    store: Object,
    doc: Object,
    docType: string,
    articleDecoded: string,
    onSavePageArticle: () => void,
    onSaveMonthlyEventArticle: () => void,
    onSavePublicationArticle: () => void,
    onSaveCommentaryArticle: () => void,
    onSaveActorArticle: () => void,
    changeDoc: () => void,
  }

  componentDidMount() {
    const {
      store,
      doc,
      docType,
      onSavePageArticle,
      onSaveMonthlyEventArticle,
      onSavePublicationArticle,
      onSaveCommentaryArticle,
      onSaveActorArticle,
      changeDoc,
    } = this.props
    // height = window - menu height - (menubar + iconbar)
    let height = window.innerHeight - 52 - 74
    if (['monthlyEvent', 'publication'].includes(docType)) {
      height = window.innerHeight - 52 - 74 - 76
    }
    if (['commentary', 'actor'].includes(docType)) {
      height = window.innerHeight - 52 - 74 - 90
    }
    // need to add specific classes to the iframe body because my css will not apply otherwise
    let bodyClass = ''
    let saveFunction = () => {}
    let localDoc = {}
    switch (docType) {
      case 'page':
        bodyClass = ''
        localDoc = store.page.activePage
        saveFunction = onSavePageArticle
        break
      case 'monthlyEvent':
        bodyClass = 'monthlyEvent'
        localDoc = store.monthlyEvents.activeMonthlyEvent
        saveFunction = onSaveMonthlyEventArticle
        break
      case 'publication':
        bodyClass = 'publication'
        localDoc = store.publications.activePublication
        saveFunction = onSavePublicationArticle
        break
      case 'commentary':
        bodyClass = 'commentary'
        localDoc = store.commentaries.activeCommentary
        saveFunction = onSaveCommentaryArticle
        break
      case 'actor':
        bodyClass = 'actor'
        localDoc = store.actors.activeActor
        saveFunction = onSaveActorArticle
        break
      default:
        return store.error.showEdit('no or wrong docType passed to editor.js')
    }
    changeDoc(localDoc)
    console.log('componentDidMount, localDoc._id:', localDoc._id)

    // see: https://www.ephox.com/blog/how-to-integrate-react-with-tinymce
    // add codemirror? see: https://github.com/christiaan/tinymce-codemirror
    tinymce.init({
      selector: `#${localDoc._id}`,
      theme: 'modern',
      plugins: [
        'advlist autolink link image lists charmap print hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen media nonbreaking',
        'save table contextmenu directionality template paste textcolor autosave',
      ],
      menubar: 'edit insert view format table tools',
      toolbar: 'insertfile undo redo | styleselect | bold italic underline forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print code fullscreen',
      height,
      browser_spellcheck: true,
      automatic_uploads: false,
      statusbar: false,
      body_class: bodyClass,
      // $FlowIssue
      content_css: `${process.env.PUBLIC_URL}/tinymce.css`,
      // enable auto-saving
      setup(editor) {
        editor.on('change undo redo', () => {
          const articleDecoded = editor.getContent()
          const articleEncoded = Base64.encode(articleDecoded)
          console.log('saving')
          saveFunction(articleEncoded)
        })
      },
    })
    // scroll editor to top in pages
    if (localDoc.type === 'pages') {
      window.$('html, body').animate(
        {
          scrollTop: 140,
        },
        800,
      )
    }
  }

  shouldComponentUpdate() {
    // make sure react does not update this component
    return false
  }

  componentWillUnmount() {
    // this is needed for correct behaviour, see
    // http://stackoverflow.com/questions/29169158/react-html-editor-tinymce
    const { doc } = this.props
    const instanceSelector = `#${doc._id}`
    tinymce.remove(instanceSelector)
  }

  render() {
    const { doc, articleDecoded } = this.props
    console.log('render, doc._id:', doc._id)
    return <textarea id={doc._id} defaultValue={articleDecoded} />
  }
}

export default enhance(Editor)
