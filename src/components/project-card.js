/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, Heading, Text } from "@theme-ui/components"

import { UnstyledLink } from "./link"

export const ProjectCard = ({ title, href, description }) => {
  return (
    <UnstyledLink href={href} mb={5} sx={{ display: "block" }}>
      <Card variant="linked">
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Card>
    </UnstyledLink>
  )
}

export default ProjectCard
