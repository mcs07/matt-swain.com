module.exports = {
  siteMetadata: {
    title: `Matt Swain`,
    author: `Matt Swain`,
    description: `Matt Swain's personal web site`,
    siteUrl: `https://matt-swain.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: `${__dirname}/src/components/post-layout.js`,
          default: `${__dirname}/src/components/layout.js`,
        },
        // See https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1008,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
              disableBgImageOnAlpha: true,
              backgroundColor: `transparent`,
            },
          },
        ],
        gatsbyRemarkPlugins: [
          `gatsby-remark-attr`,
          require.resolve(`./gatsby-remark-fig`),
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1008,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
              disableBgImageOnAlpha: true,
              backgroundColor: `transparent`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-widows`,
          `gatsby-remark-katex`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Swain`,
        short_name: `Matt Swain`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#fa6400`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/logo.svg`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description:
                    edge.node.frontmatter.description || edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: `/rss.xml`,
            title: `Matt Swain's Blog`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-ackee-tracker`,
      options: {
        domainId: `9b395ebf-19c8-4a28-9e80-5965fee8625a`,
        server: `https://oxo.mosxt.com`,
        ignoreLocalhost: true,
        detailed: true,
      },
    },
  ],
}
