export default [
  {
    path: "/product-list/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-pages-product-list-vue" */ "C:\\Users\\39328\\Desktop\\grid\\my-shop\\src\\pages\\Product-list.vue")
  },
  {
    path: "/product/:title/",
    component: () => import(/* webpackChunkName: "page--src-templates-product-vue" */ "C:\\Users\\39328\\Desktop\\grid\\my-shop\\src\\templates\\Product.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\39328\\Desktop\\grid\\my-shop\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\39328\\Desktop\\grid\\my-shop\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\39328\\Desktop\\grid\\my-shop\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\39328\\Desktop\\grid\\my-shop\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

