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
          default: `${__dirname}/src/components/layout.js` 
        },
        // See https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
        plugins: [ 
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
            },
          }
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-widows`,
          `gatsby-remark-katex`,
          `gatsby-remark-attr`,
          require.resolve(`./gatsby-remark-fig`),
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
    `gatsby-plugin-remove-trailing-slashes`
  ],
}
