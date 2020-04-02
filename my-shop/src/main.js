// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/bootstrap.css'
import '~/assets/fonts/fontawesome/css/all.min.css'
import '~/assets/css/responsive.css'
import '~/assets/css/ui.css'







export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
