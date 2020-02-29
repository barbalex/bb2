import React, { useContext, useEffect } from 'react'
import { PanelGroup } from 'react-bootstrap'
import has from 'lodash/has'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'

import ArticlePanel from './ArticlePanel'
import NewArticle from './NewArticle'
import ModalRemoveArticle from './ModalRemoveArticle'
import SwallowPanelGroupProps from '../shared/SwallowPanelGroupProps'
import oceanDarkImage from '../../images/oceanDark.jpg'
import storeContext from '../../storeContext'

const Container = styled.div`
  p,
  div {
    font-size: medium;
  }
  a.list-group-item {
    padding-right: 50px !important;
  }
  .h2-subtitle {
    text-align: center !important;
    font-size: large !important;
    font-weight: 800 !important;
    margin-top: -10px !important;
    margin-bottom: 0 !important;
  }

  .h2-subtitle-top {
    text-align: center !important;
    font-size: large !important;
    font-weight: 800 !important;
    margin-bottom: -40px !important;
  }
  .panel-heading {
    background-image: url(${oceanDarkImage});
  }
  .panel-heading a {
    color: #edf4f8;
    font-weight: bold;
  }
`
const Copyright = styled.p`
  margin-top: 70px;
`

const Articles = ({ year, month, day, title }) => {
  const store = useContext(storeContext)
  const { getPage } = store.page
  const {
    articles,
    activeArticle,
    showNewArticle,
    articleToRemove,
    getArticles,
  } = store.articles
  const activeArticleId = has(activeArticle, '_id') ? activeArticle._id : null

  useEffect(() => {
    getPage('pages_commentaries')
    getArticles()
  }, [getArticles, getPage])

  return (
    <DocumentTitle title="Articles">
      <Container>
        <h1>Articles</h1>
        <PanelGroup
          defaultActiveKey={activeArticleId}
          id="articlesAccordion"
          accordion
        >
          <SwallowPanelGroupProps>
            {articles.map((article, index) => (
              <ArticlePanel
                key={article._id}
                doc={article}
                index={index}
                year={year}
                month={month}
                day={day}
                title={title}
              />
            ))}
          </SwallowPanelGroupProps>
        </PanelGroup>
        {showNewArticle && <NewArticle />}
        {articleToRemove && <ModalRemoveArticle />}
        <Copyright>© Jürg Martin Gabriel. All Rights Reserved.</Copyright>
      </Container>
    </DocumentTitle>
  )
}

export default observer(Articles)
