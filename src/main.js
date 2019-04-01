import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'
import './common/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
