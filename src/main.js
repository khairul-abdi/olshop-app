import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import Scrollspy from 'vue2-scrollspy'
import Swal from 'sweetalert2'
import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
import { Toast } from './assets/js/sweetAlert'
import { BootstrapVue } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel'
import 'popper.js'
import 'bootstrap'
import './assets/scss/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue2Filters from 'vue2-filters'
import Vuex from 'vuex'
import store from './store.js'
require('firebase/firestore')


Vue.use(VueFirestore, {
  key: 'id',         
  enumerable: true  
})

Vue.use(BootstrapVue)
Vue.use(VueFirestore)
Vue.use(Scrollspy)
Vue.use(VueCarousel)
Vue.use(Vue2Filters)
Vue.use(Vuex)
Vue.config.productionTip = false

window.$ = window.jQuery = jQuery
window.Swal = Swal
window.Toast = Toast

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('ProductsList', require('./sections/ProductList.vue').default)

let app = ''

fb.auth().onAuthStateChanged( user => {
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})