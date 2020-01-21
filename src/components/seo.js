import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../utils/hooks"

const SEO = ({ title, description, type, url, image, date }) => {
  const siteMetadata = useSiteMetadata()
  return (
    <Helmet>
      {title && (
        <title>
          {title} | {siteMetadata.title}
        </title>
      )}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {type && <meta property="og:type" content={type} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={siteMetadata.siteUrl + url} />}
      {image && (
        <meta property="og:image" content={siteMetadata.siteUrl + image} />
      )}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:card" content="summary_large_image" />}
      {image && (
        <meta name="twitter:image" content={siteMetadata.siteUrl + image} />
      )}
      {type === "article" &&
          <meta property='article:author' content={siteMetadata.siteUrl} />
      }
      {type === "article" && date &&
        <meta property='article:published_time' content={date} />
      }
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
}

export default SEO
