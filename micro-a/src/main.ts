import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
// import store from "./store";

Vue.config.productionTip = false;

const scripts = document.querySelectorAll("script");
const script = Array.from(scripts.values()).find(s => s.dataset.container)!;
const container = script.dataset.container;

// (window as any).renderMicroA = function(containerId: string, opts: any) {
//   console.log(`rendering in ${containerId}`);
// new Vue({
//   // router,
//   // store: opts.store,
//   render: h => h(App)
// }).$mount("#MicroA-microfrontend-container");
// };

/**
 * With Vue bundle
 */
new Vue({
  render: h => h(App),
  router,
}).$mount(`#${container}`);

console.log("HELLO FROM THE OTHER SIDE!");
