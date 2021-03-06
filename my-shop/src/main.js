// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//custom bt style

import '~/assets/fonts/fontawesome/css/all.css';
import '~/assets/scss/ui.scss';
import '~/assets/scss/responsive.scss';
import '~/assets/scss/bootstrap.scss';
import '~/assets/scss/main.scss';


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  
}
