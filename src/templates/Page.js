import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
// Components
import Layout from 'components/Layout'
import Image from 'components/Image'
import SEO from 'components/SEO'

const Page = ({ data }) => {
  const page = data.markdownRemark
  const image = getImage(page.frontmatter.image)

  return (
    <Layout>
      <SEO title={page.frontmatter.title} />
      <main>
        <Image image={image} />
        <h2>{page.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </main>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image {
          childImageSharp {
            gatsbyImageData(width: 2000, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
