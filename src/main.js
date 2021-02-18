import Vue from 'vue'
import App from './App.vue'
//Bootstrap & Custom Css
import 'bootstrap'
import './assets/css/custom.scss'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// v-lazy-image
import { VLazyImagePlugin } from 'v-lazy-image'
Vue.use(VLazyImagePlugin);

Vue.config.productionTip = false,
new Vue({
  render: h => h(App),
}).$mount('#app')
