<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
      <!--      <ProBasicLayout />-->
    </template>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import ProBasicLayout from "@/layouts/ProBasicLayout.vue";

const route = useRoute();
const doInit = () => {
  console.log(
    "  _________                .____    .__        \n" +
      " /   _____/____    _____   |    |   |__| ____  \n" +
      " \\_____  \\\\__  \\  /     \\  |    |   |  |/    \\ \n" +
      " /        \\/ __ \\|  Y Y  \\ |    |___|  |   |  \\\n" +
      "/_______  (____  /__|_|  / |_______ \\__|___|  /\n" +
      "        \\/     \\/      \\/          \\/       \\/ "
  );
};
onMounted(() => {
  doInit();
});
</script>
