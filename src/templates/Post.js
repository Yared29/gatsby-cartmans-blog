import React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
// Components
import Layout from 'components/Layout'
import Image from 'components/Image'
import SEO from 'components/SEO'

const Post = ({ data }) => {
  const post = data.markdownRemark
  const image = getImage(post.frontmatter.image)

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <main>
        <Image image={image} />
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    </Layout>
  )
}

export default Post

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
