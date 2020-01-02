import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
// 导入全局样式
import "./assets/css/global.css";
import axios from "axios";

axios.defaults.baseURL =
  "https://www.easy-mock.com/mock/5e0c1a604a88482f2c4ceaf8/vue-shop";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
