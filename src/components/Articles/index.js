import React, { useContext } from 'react'
import { PanelGroup } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import DocumentTitle from 'react-document-title'
import { gql, useQuery } from '@apollo/client'

import ArticlePanel from './ArticlePanel'
import NewArticle from './NewArticle'
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

const Articles = ({ id }) => {
  const store = useContext(storeContext)

  const { data } = useQuery(
    gql`
      query ArticleIdsForArticles {
        article(order_by: { datum: desc }) {
          id
        }
      }
    `,
  )
  const articleIds = data?.article?.map((a) => a.id) ?? []

  const { showNewArticle } = store.articles

  return (
    <DocumentTitle title="Articles">
      <Container>
        <h1>Articles</h1>
        <PanelGroup defaultActiveKey={id} id="articlesAccordion" accordion>
          {articleIds.map((id) => (
            <ArticlePanel key={id} id={id} />
          ))}
        </PanelGroup>
        {showNewArticle && <NewArticle />}
        <Copyright>© Jürg Martin Gabriel. All Rights Reserved.</Copyright>
      </Container>
    </DocumentTitle>
  )
}

export default observer(Articles)
