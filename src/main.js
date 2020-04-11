import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import Scrollspy from 'vue2-scrollspy'

window.$ = window.jQuery = jQuery

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

Vue.use(Scrollspy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
