<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="-header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="-content">
        <div class="left"><LeftBar /></div>
        <div class="right">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer class="-footer">
        <a href="https://samlin1010.vercel.app/" target="_blank">
          其他信息点击此处
        </a>
      </a-layout-footer>
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
  display: flex;
}
#basicLayout .-content .left {
  flex: 1;
}
#basicLayout .-content .right {
  flex: 4;
}
#basicLayout .-footer {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
import LeftBar from "@/components/LeftBar.vue";
</script>
