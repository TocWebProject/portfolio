import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/css/custom.scss'



Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
