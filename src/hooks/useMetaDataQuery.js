import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const useMetaDataQuery = () => {
  const data = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          description
          author
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}
