/**
 * Cant move Helmet to App
 * because neither StaticQuery nor AppQuery
 * work there :-(
 */
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Navbar from './Navbar'
import Header from './Header'

const Container = styled.div`
  @media print {
    height: auto;
    overflow: visible !important;
  }
`

/**
 * ReactDOMServer does not yet support Suspense
 */
const Layout = ({ children }) => {
  return (
    <Container>
      <Helmet
        title="mediterranean migration"
        meta={[
          {
            name: 'description',
            content:
              'overview over refugees arriving in Europe across the central Mediterranean',
          },
          {
            name: 'keywords',
            content: 'Mediterranean, refugees, migration',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Navbar />
      <Header />
      {children}
    </Container>
  )
}

export default Layout
