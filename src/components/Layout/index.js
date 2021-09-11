import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

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
      Layout component
      {children}
    </ThemeProvider>
  )
}

export default Layout
