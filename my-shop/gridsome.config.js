// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Onespresso',
  siteDescription: 'Cialde e capsule caffè compatibili ai migliori prezzi',
  titleTemplate: '%s - Onespresso.it',
  siteUrl: 'http://onespresso.it',
  plugins: [],
  templates: {
    Product: [
      {
        path: '/product/:title/:aSIN',
        component: './src/templates/Product.vue'
      }
    ]
  }
}
