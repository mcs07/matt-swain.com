/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Container } from "@theme-ui/components"
import { NavLink } from "./link"

export const Footer = props => (
  <Container as="footer" py={5} {...props}>
    <Box sx={{ display: ['block', 'flex']}}>
      <Box sx={{ textAlign: ["center", "initial"] }}>
        <NavLink to="/about">By Matt Swain</NavLink>
      </Box>
      <div sx={{ mx: "auto" }} />
      <Box sx={{ textAlign: ["center", "initial"] }}>
        <NavLink href="https://twitter.com/mattswain123">Twitter</NavLink>
        <NavLink href="https://github.com/mcs07">GitHub</NavLink>
        <NavLink href="https://uk.linkedin.com/in/mcswain">LinkedIn</NavLink>
      </Box>
    </Box>
  </Container>
)

export default Footer
