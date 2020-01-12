/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, Image } from "@theme-ui/components"

import { NavLink, UnstyledLink } from "./link"

export const Header = props => {
  return (
    <Container as="header" py={5} {...props}>
      <Flex sx={{ alignItems: "center" }}>
        <UnstyledLink to={`/`}>
          <Image
            alt="logo"
            src="/logo.svg"
            pl={3}
            sx={{ height: "46px", display: "block" }}
          />
        </UnstyledLink>
        <Box mx="auto" />
        <NavLink to={`/about`}>About</NavLink>
        <NavLink to={`/`}>Blog</NavLink>
        <NavLink to={`/projects`}>Projects</NavLink>
      </Flex>
    </Container>
  )
}

export default Header
