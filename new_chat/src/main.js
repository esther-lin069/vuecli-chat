import Vue from 'vue'
// import App from './App.vue'
import ChatLog from './components/chat_componenet/ChatLog.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import browserDetect from 'vue-browser-detect-plugin'
import router from './router'
import store from './store'
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);
Vue.use(browserDetect);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(ChatLog)
}).$mount('#app')
