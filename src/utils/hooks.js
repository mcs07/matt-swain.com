import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          twitter
          description
          siteUrl
        }
      }
    }
  `)

  return site.siteMetadata
}
