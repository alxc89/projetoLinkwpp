import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "jquery/dist/jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
