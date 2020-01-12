/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as ThemeUILink } from "@theme-ui/components"
import { Link as GatsbyLink } from "gatsby"

export const Link = ({ to, href, ...props }) => {
  if (to) {
    return (
      <ThemeUILink
        as={GatsbyLink}
        to={to}
        activeClassName="active"
        {...props}
      />
    )
  } else {
    return <ThemeUILink href={href} {...props} />
  }
}

export const NavLink = props => <Link variant="nav" {...props} />

export const UnstyledLink = props => <Link variant="unstyled" {...props} />

export default Link
