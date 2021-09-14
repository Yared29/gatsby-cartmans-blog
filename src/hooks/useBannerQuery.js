import { useStaticQuery, graphql } from 'gatsby'

const useBannerQuery = () => {
  const data = useStaticQuery(graphql`
    query bannerQuery {
      markdownRemark(frontmatter: { type: { eq: "banner" } }) {
        frontmatter {
          bannerImage {
            childImageSharp {
              gatsbyImageData(width: 2000, height: 700, placeholder: BLURRED)
            }
          }
          bannerImageBtnLink
          bannerImageBtnText
          bannerImageText
        }
      }
    }
  `)

  return data.markdownRemark.frontmatter
}

export default useBannerQuery
