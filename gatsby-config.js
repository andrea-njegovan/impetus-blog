require("dotenv").config({
  path: `.env`,
});

const blogQuery = `
  {
    allMdx(filter: {frontmatter: {author: {frontmatter: {title: {regex: "/^$|\\\\s+/"}}}}}) {
      edges {
        node {
          objectID: fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => data.allMdx.edges.map(({node}) => node),
    indexName: 'impetus-blog'
  }
];

module.exports = {
  siteMetadata: {
    title: `Impetus B.`,
    author: `Andrea Njegovan`,
    description: `A personal blog offering motivational business, lifestyle and fitness stories.`,
    siteShortName: `impetus-blog`,
    siteUrl: `https://impetus-blog.netlify.com/`,
    social: {
      linkedin: `andrea-njegovan-5ab87668`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/author`,
        name: `author`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/blog.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora`,
          `Merriweather`,
          `Indie Flower`,
          `Pacifico`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
  ],
  mapping: {
    'Mdx.frontmatter.author': 'Mdx.frontmatter.id'
  }
}
