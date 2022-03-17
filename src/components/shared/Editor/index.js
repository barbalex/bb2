//
import React, { useContext, useCallback } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { observer } from 'mobx-react-lite'

import storeContext from '../../../storeContext'

const MyEditor = ({ doc, docType, contentDecoded }) => {
  const store = useContext(storeContext)
  const { activePage, savePage } = store.page
  const { activeArticle, saveArticle } = store.articles
  const { activePublication, savePublication } = store.publications
  const { activeMonthlyEvent, saveMonthlyEvent } = store.monthlyEvents

  // height = window - menu height - (menubar + iconbar)
  let height = typeof window !== `undefined` ? window.innerHeight - 52 - 74 : 1
  if (
    ['monthlyEvent', 'publication'].includes(docType) &&
    typeof window !== `undefined`
  ) {
    height = window.innerHeight - 52 - 74 - 76
  }
  if (['article'].includes(docType) && typeof window !== `undefined`) {
    height = window.innerHeight - 52 - 74 - 90
  }
  // need to add specific classes to the iframe body because my css will not apply otherwise
  let bodyClass = ''

  const onSavePageArticle = useCallback(
    (articleEncoded) => {
      activePage.article = articleEncoded
      savePage(activePage)
    },
    [activePage, savePage],
  )
  const onSaveArticleArticle = useCallback(
    (articleEncoded) => {
      activeArticle.article = articleEncoded
      saveArticle(activeArticle)
    },
    [activeArticle, saveArticle],
  )
  const onSavePublicationArticle = useCallback(
    (articleEncoded) => {
      activePublication.article = articleEncoded
      savePublication(activePublication)
    },
    [activePublication, savePublication],
  )
  const onSaveMonthlyEventArticle = useCallback(
    (articleEncoded) => {
      activeMonthlyEvent.article = articleEncoded
      saveMonthlyEvent(activeMonthlyEvent)
    },
    [activeMonthlyEvent, saveMonthlyEvent],
  )

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
    default:
      return store.error.showEdit('no or wrong docType passed to editor')
  }

  return (
    <Editor
      id={doc._id}
      apiKey="58ali3ylgj6fv1zfjv6vdjkkt32yjw36v1iypn95psmae799"
      initialValue={contentDecoded}
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
        content_css: `./tinymce.css`,
      }}
      onChange={(e) => saveFunction(e.target.getContent())}
    />
  )
}

export default observer(MyEditor)
