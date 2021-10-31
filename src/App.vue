<template>
  <main>
    <ComingSoon />
  </main>
</template>

<script>
import ComingSoon from "./components/comingSoon.vue";

export default {
  name: "App",
  components: {
    ComingSoon,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
main {
  height: 100vh;
  width: 100%;
  background: rgb(22, 19, 19) !important;
  color: #fff !important;
  cursor: none;
}
@media (max-width: 786px) {
  html{
    font-size:12px;
  }
}
</style>
