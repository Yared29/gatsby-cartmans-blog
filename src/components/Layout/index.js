import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
// Components
import Header from 'components/header'
// Styles
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles'
// Hooks
import { useMetaDataQuery } from 'hooks/useMetaDataQuery'

const Layout = ({ children }) => {
  const data = useMetaDataQuery()

  console.log(data)
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
