// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'MyShop with Gridsome',
  siteDescription: 'Simple products catalog with Gridsome',
  titleTemplate: '%s - MyShop',
  siteUrl: '',
  plugins: []
}

module.exports = {
  plugins: [
    {
      use: '@gridsome/transformer-json'
    
    }
  ]
}


//  module.exports = {
//    templates: {
//      Product: [
//        {
//          path: '/product/:slug',
//          component: './src/templates/Product.vue'
//        }
//      ]
//    }
//  }