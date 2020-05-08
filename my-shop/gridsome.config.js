// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Onespresso',
  siteDescription: 'Cialde e capsule caffè compatibili ai migliori prezzi',
  titleTemplate: '%s - Onespresso.it',
  siteUrl: 'http://onespresso.it',
  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-MX3S9DD',
        enabled: true,
        debug: true
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/about'],
        config: {
          '/product/*': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Product',
            indexName: 'Product',
            fields: ['title']
          }
        ],
        searchFields: ['title']
      }
    }
  ],
  templates: {
    Product: [
      {
        path: '/product/:title/:aSIN',
        component: './src/templates/Product.vue'
      }
    ]
  }
}
