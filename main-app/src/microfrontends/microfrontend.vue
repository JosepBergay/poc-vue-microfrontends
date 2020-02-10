<template>
  <div :class="name">
    <div :id="`${name}-microfrontend-container`">
      {{ name }} not available yet
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    name: String,
    host: String
  },
  methods: {
    renderMicroFrontend() {
      const opts = {
        store: this.$store
      };
      try {
        const microContainerId = `${this.name}-microfrontend-container`;
        // E.g.: window.renderBrowse('browse-container', history);
        window[`render${this.name}`](microContainerId, opts);
      } catch (error) {
        console.log("error rendering");
        console.log(error);
      }
    },
    fetchMicroFrontend(scriptId) {
      // if (document.getElementById(scriptId)) {
      //   this.renderMicroFrontend();
      //   return;
      // }
      try {
        document.getElementById(scriptId) &&
          document.getElementById(scriptId).remove();
        const script = document.createElement("script");

        script.type = "text/javascript";
        script.id = scriptId;
        script.dataset.container = `${this.name}-microfrontend-container`;
        script.src = `${this.host}/js/app.js`;
        // script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      } catch (error) {
        console.debug("FETCH ERROR");
        console.error(error);
      }
    }
  },
  async mounted() {
    const scriptId = `micro-frontend-script-${this.name}`;
    this.fetchMicroFrontend(scriptId);
  },
  destroyed() {
    // window[`unmount${this.name}`](`${this.name}-container`);
  }
});
</script>

<style></style>
