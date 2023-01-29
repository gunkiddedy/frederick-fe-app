import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// tooltip
import VTooltipPlugin from 'v-tooltip'
VTooltipPlugin.options.offset = [0, 20]
import 'v-tooltip/dist/v-tooltip.css'
Vue.use(VTooltipPlugin)

import "./assets/css/tailwind.css";


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
