import * as React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
//Components
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HomeBanner from 'components/HomeBanner'
import BlogPostCard from 'components/BlogPostCard'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  console.log('Posts : ', posts)
  return (
    <Layout>
      <SEO title="Home" />
      <HomeBanner />
      <main>
        {posts.map(({ node }, i) => {
          const title = node.frontmatter.title
          return (
            <BlogPostCard
              key={i}
              slug="/"
              title={title}
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text}
              excerpt={node.excerpt}
              image={node.frontmatter.image}
            />
          )
        })}
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 200, height: 200, placeholder: BLURRED)
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
