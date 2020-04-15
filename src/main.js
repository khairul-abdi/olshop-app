import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import Scrollspy from 'vue2-scrollspy'
import Swal from 'sweetalert2'
import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
// import { Toast } from './assets/js/sweetAlert'
import { BootstrapVue } from 'bootstrap-vue'
import 'popper.js'
import 'bootstrap'
import './assets/scss/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('firebase/firestore')

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  // timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Vue.use(BootstrapVue)
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