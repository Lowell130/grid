import plugin_gridsome_plugin_gtm_5 from "C:\\Users\\39328\\Desktop\\grid\\my-shop\\node_modules\\gridsome-plugin-gtm\\gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_7 from "C:\\Users\\39328\\Desktop\\grid\\my-shop\\node_modules\\gridsome-plugin-flexsearch\\gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_gtm_5,
    options: {"id":"GTM-MX3S9DD","enabled":true,"debug":true}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_7,
    options: {"pathPrefix":"","siteUrl":"http://onespresso.it","collections":[{"typeName":"Product","indexName":"Product","fields":["title"]}],"searchFields":["title"],"chunk":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  }
]
