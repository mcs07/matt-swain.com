import React from "react"
import Helmet from "react-helmet"
import { useThemeUI } from "theme-ui"
import { useSiteMetadata } from "../utils/hooks"

export const Head = props => {
  const { title, twitter, description } = useSiteMetadata()
  const { theme } = useThemeUI()
  return (
    <Helmet htmlAttributes={{ lang: "en" }} {...props}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="application-name" content={title} />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta name="msapplication-TileColor" content={theme.colors.primary} />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={theme.colors.primary}
      />
    </Helmet>
  )
}

export default Head
