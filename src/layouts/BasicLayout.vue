<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="-header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="-footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
}
#basicLayout .-header {
  box-shadow: #2c3e50 1px 5px 5px;
}
#basicLayout .-content {
  background: linear-gradient(to right, #bbb, #fff);
}
#basicLayout .-footer {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background: #bbbbbb;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
