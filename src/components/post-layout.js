/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Heading, Text } from "@theme-ui/components"
import Layout from "./layout"
import SEO from "./seo"

export default function PageTemplate({ data: { mdx } }) {
  const title = mdx.frontmatter.title || mdx.fields.slug
  const description = mdx.frontmatter.description || mdx.excerpt
  const image = mdx.frontmatter.image ? mdx.frontmatter.image.publicURL : null
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        type="article"
        url={mdx.fields.slug}
        image={image}
        date={mdx.frontmatter.date}
      />
      <Heading as="h1" variant="styles.h1">
        {title}
      </Heading>
      <Text variant="subtitle">
        <time dateTime={mdx.frontmatter.date}>{mdx.frontmatter.dateText}</time>
      </Text>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      body
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        dateText: date(formatString: "D MMMM YYYY")
        title
        description
        image {
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`
