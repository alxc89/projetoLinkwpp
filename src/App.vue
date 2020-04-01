<template>
  <div id="app">
    <geradorDeLink />
  </div>
</template>

<script>
import geradorDeLink from "./components/geradorDeLink.vue";
export default {
  name: "app",
  components: {
    geradorDeLink
  }
};
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";
@import "bootstrap/scss/bootstrap";
@import "./assets/scss/_bootswatch.scss";
</style>
