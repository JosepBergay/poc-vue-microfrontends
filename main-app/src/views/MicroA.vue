<template>
  <Microfrontend :name="name" :host="host"></Microfrontend>
</template>

<script>
import Microfrontend from "@/microfrontends/microfrontend";
export default {
  components: { Microfrontend },
  data() {
    return {
      name: "MicroA",
      host: "http://192.168.56.1:8081"
    };
  }
};
</script>

<style></style>
