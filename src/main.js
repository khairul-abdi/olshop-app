import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import Scrollspy from 'vue2-scrollspy'
import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')

Vue.use(VueFirestore)

window.$ = window.jQuery = jQuery

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

Vue.use(Scrollspy)

Vue.config.productionTip = false

fb.auth().onAuthStateChanged( user => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
})