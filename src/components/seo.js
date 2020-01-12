import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../utils/hooks"

const SEO = ({ title, description }) => {
  const siteMetadata = useSiteMetadata()

  // Per-page overrides that fall back to site metadata
  const metaDescription = description || siteMetadata.description
  const metaTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default SEO
