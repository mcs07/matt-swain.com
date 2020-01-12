/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, Heading, Text } from "@theme-ui/components"

import { UnstyledLink } from "./link"

export const PostCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const description = post.frontmatter.description || post.excerpt
  return (
    <UnstyledLink to={post.fields.slug} mb={5} sx={{ display: "block" }}>
      <Card as="article" variant="linked">
        <Heading>{title}</Heading>
        <Heading as="h4" variant="subtitle" my={3}>
          <time dateTime={post.frontmatter.date}>
            {post.frontmatter.dateText}
          </time>
        </Heading>
        <Text>{description}</Text>
      </Card>
    </UnstyledLink>
  )
}

export default PostCard
