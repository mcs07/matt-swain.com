/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"

export const BlogIndex = ({ data, location }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout bg="background2">
      {posts.map(({ node: post }) => (
        <PostCard key={post.fields.slug} post={post} />
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            dateText: date(formatString: "D MMMM YYYY")
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
