export default [
  {
    path: "/product/:title/:aSIN/",
    component: () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/media/cirruscreative/Projects/Gridsome/help/lowell130-grid/my-shop/src/templates/Product.vue")
  },
  {
    path: "/product-list/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--product-list-vue" */ "/media/cirruscreative/Projects/Gridsome/help/lowell130-grid/my-shop/src/pages/Product-list.vue")
  },
  {
    path: "/search/",
    component: () => import(/* webpackChunkName: "page--src--pages--search-vue" */ "/media/cirruscreative/Projects/Gridsome/help/lowell130-grid/my-shop/src/pages/Search.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/media/cirruscreative/Projects/Gridsome/help/lowell130-grid/my-shop/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/media/cirruscreative/Projects/Gridsome/help/lowell130-grid/my-shop/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/media/cirruscreative/Projects/Gridsome/help/lowell130-grid/my-shop/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/media/cirruscreative/Projects/Gridsome/help/lowell130-grid/my-shop/node_modules/gridsome/app/pages/404.vue")
  }
]

