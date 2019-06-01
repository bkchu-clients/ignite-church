import { useStaticQuery, graphql } from "gatsby"

const images = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `
  )
  return allFile.edges
}

export default images
