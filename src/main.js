import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import Scrollspy from 'vue2-scrollspy'
import Swal from 'sweetalert2'
import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
import 'popper.js'
import 'bootstrap'
import './assets/scss/app.scss'
require('firebase/firestore')
import { Toast } from './assets/js/sweetAlert'

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

Vue.use(VueFirestore)
Vue.use(Scrollspy)
Vue.config.productionTip = false

window.$ = window.jQuery = jQuery
window.Swal = Swal
window.Toast = Toast

fb.auth().onAuthStateChanged( user => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
})