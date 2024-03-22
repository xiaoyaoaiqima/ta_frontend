<template>
  <div class="menu-demo">
    <a-menu
      :style="{ height: '100%' }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_2']"
      show-collapse-button
      breakpoint="xl"
      @collapse="onCollapse"
    >
      <a-menu-item v-for="item in parentRoutes" :key="item.path">
        <template v-if="item.children && item.children.length > 0">
          <a-sub-menu :key="item.path">
            <template #title>{{ item.name }}</template>
            <a-menu-item
              v-for="childItem in item.children"
              :key="childItem.path"
            >
              <router-link :to="childItem.path">
                {{ childItem.name }}</router-link
              >
            </a-menu-item>
          </a-sub-menu>
        </template>
        <template v-else>
          {{ item.name }}
        </template>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import { parentRoutes } from "@/router/routes";
import store from "@/store";

const router = useRouter();
const onCollapse = (val, type) => {
  const content = type === "responsive" ? "触发响应式收缩" : "点击触发收缩";
  Message.info({
    content,
    duration: 2000,
  });
};
</script>
<style scoped>
.menu-demo {
  width: 200px;
  box-sizing: border-box;
  height: 100vh;
  background-color: var(--color-neutral-2);
}
</style>
