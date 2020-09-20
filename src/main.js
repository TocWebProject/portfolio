import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/css/custom.scss'
import ScrollAnimation from './directives/scrollanimation.js'

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
