require("dotenv").config();
const config = require("./content/meta/config");

const query = `{
  allWordpressPost(sort: { fields: [date], order: DESC }) {
    edges {
      node {
        excerpt
        slug
        date(formatString: "YYYY-MM-DD")
        modified(formatString: "YYYY-MM-DD")
        title
        acf {
          subtitle
          description
        }
        tags { name }
        categories { name }
        featured_media {
          source_url
        }
        featured_media_size_src {
          thumbnail
          medium
          large
        }
      }
    }
  }
  allWordpressPage( sort: { fields: [date], order: DESC } ) {
    edges {
      node {
        slug
        date(formatString: "YYYY-MM-DD")
        modified(formatString: "YYYY-MM-DD")
        title
        acf {
          subtitle
          description
        }
        featured_media {
          source_url
        }
        featured_media_size_src {
          thumbnail
          medium
          large
        }
      }
    }
  }
}`;

const queries = [
  {
    query,
    transformer: ({ data }) => data.allWordpressPost.edges.map(({ node }) => node)
  },
  {
    query,
    transformer: ({ data }) => data.allWordpressPage.edges.map(({ node }) => node)
  }
];

module.exports = {
  // pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    pathPrefix: config.pathPrefix,
    siteBlogUrl: config.siteUrl + config.pathPrefix + "/",
    algolia: {
      appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : "",
      searchOnlyApiKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY
        ? process.env.ALGOLIA_SEARCH_ONLY_API_KEY
        : "",
      indexName: process.env.ALGOLIA_INDEX_NAME ? process.env.ALGOLIA_INDEX_NAME : ""
    },
    facebook: {
      appId: process.env.FB_APP_ID ? process.env.FB_APP_ID : ""
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID ? process.env.ALGOLIA_APP_ID : "",
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY ? process.env.ALGOLIA_ADMIN_API_KEY : "",
        indexName: process.env.ALGOLIA_INDEX_NAME ? process.env.ALGOLIA_INDEX_NAME : "",
        queries,
        chunkSize: 10000 // default: 1000
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts/`,
        name: "posts"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `parts`,
        path: `${__dirname}/content/parts/`
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wp.masakinishi.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        auth: {
          htaccess_user: `n24mfs`,
          htaccess_pass: `24masaki`,
          htaccess_sendImmediately: false
        },
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: `https://wp.masakinishi.com`,
          replacementUrl: `http://localhost:8000`
        },
        concurrentRequests: 10,
        includedRoutes: [
          `/*/*/categories`,
          `/*/*/posts`,
          `/*/*/pages`,
          `/*/*/media`,
          `/*/*/tags`,
          `/*/*/taxonomies`,
          `/*/*/users`
        ],
        excludedRoutes: [],
        normalizer: function({ entities }) {
          return entities;
        },
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              backgroundColor: "transparent"
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 2em`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icons: [
          {
            src: "/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                pathPrefix
                siteUrl
                siteBlogUrl
                site_url: siteBlogUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + site.siteMetadata.pathPrefix + "/" + edge.node.slug + "/",
                  guid: site.siteMetadata.siteUrl + site.siteMetadata.pathPrefix + "/" + edge.node.slug + "/",
                  custom_elements: [{ "content:encoded": edge.node.content }]
                });
              });
            },
            query: `
              {
                allWordpressPost(sort: { fields: [date], order: DESC }) {
                  edges {
                    node {
                      content
                      excerpt
                      slug
                      date(formatString: "ddd, DD MMM YYYY, h:mm:ss +0900")
                      modified(formatString: "ddd, DD MMM YYYY, h:mm:ss +0900")
                      title
                      acf {
                        subtitle
                        description
                      }
                      featured_media {
                        source_url
                      }
                      featured_media_size_src {
                        thumbnail
                        medium
                        large
                      }
                    }
                  }
                }
              }
            `,
            output: "/blog/rss.xml"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap.xml',
        exclude: ["/success/"]
      }
    },
    {
      resolve: "gatsby-plugin-svgr"
    }
  ]
};
