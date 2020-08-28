import Vue from 'vue'
import App from './App.vue'
import easyCanvas from './index'

Vue.config.productionTip = false

Vue.use(easyCanvas)

new Vue({
  render: h => h(App),
}).$mount('#app')
