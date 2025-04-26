require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Igor Marcante`,
    position: `Backend Developer`,
    description: `Um blog sobre desenvolvimento em geral e outras coisas legais.`,
    author: `@igormarcante`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY, // ✅ Certifique-se que é uma ADMIN KEY
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000, // ⚠️ Reduza para valor seguro (Algolia aceita até 1000 por lote)
        enablePartialUpdates: true,
        // ⬇️ Adicione ESSENCIAL para partial updates ⬇️
        matchFields: [
          "slug",
          "date_timestamp", 
          "contentDigest", // Campo obrigatório
          "modified" // Se existir no seu schema
        ],
        // ⬇️ Recomendações extras de performance ⬇️
        concurrentQueries: true, // Ativar para datasets grandes
        replaceUpdates: false, // Mantém IDs existentes
        settings: {
          attributesForFaceting: ["filterOnly(category)", "searchable(title)"]
        }
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
