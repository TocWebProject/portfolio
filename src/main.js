import Vue from 'vue'
import App from './App.vue'
//Bootstrap & Custom Css
import 'bootstrap'
import './assets/css/custom.scss'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
