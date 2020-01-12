/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex } from "@theme-ui/components"
import { NavLink } from "./link"

export const Footer = props => (
  <Container as="footer" py={5} {...props}>
    <Flex sx={{ flexWrap: "wrap" }}>
      <NavLink to="/about">By Matt Swain</NavLink>
      <div sx={{ mx: "auto" }} />
      <NavLink href="https://twitter.com/mattswain123">Twitter</NavLink>
      <NavLink href="https://github.com/mcs07">GitHub</NavLink>
      <NavLink href="https://uk.linkedin.com/in/mcswain">LinkedIn</NavLink>
    </Flex>
  </Container>
)

export default Footer
