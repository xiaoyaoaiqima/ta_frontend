<template>
  <a-row id="globalHeader" class="grid-demo" align="center" :wrap="false">
    <a-col flex="auto">
      <div class="menu-demo">
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="title-img" src="../assets/logo.png" />
              <div class="title">TA demo</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in parentRoutes" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div></a-col
    >
    <a-col flex="100px">
      <div>{{ store.state?.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { parentRoutes } from "@/router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

console.log(parentRoutes);
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
router.afterEach((to) => {
  selectedKeys.value = [to.path];
});
const selectedKeys = ref(["/"]);
</script>

<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
  background-color: var(--color-neutral-2);
}
.title-bar {
  display: flex;
  align-items: center;
}
.title-img {
  width: 25%;
  height: 25%;
}
</style>
