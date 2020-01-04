import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
// 导入全局样式
import "./assets/css/global.css";
import axios from "axios";
// 配置请求的根路径，采用Yapi：http://yapi.demo.qunar.com
axios.defaults.baseURL = "http://yapi.demo.qunar.com/mock/67364";

// axios.interceptors.request.use(config => {
//   console.log(config);
//   config.headers.Authorization = window.sessionStorage.getItem("token");
//   return config;
// });

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
