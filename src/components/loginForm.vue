<template>
  <div class="login-page">
    <!-- 左侧图片 -->
    <div class="welcome-image">
      <img src="../assets/welcome.png" alt="Welcome" />
    </div>
    <!-- 右侧登录 -->
    <div class="login-form-container">
      <!-- 登录框 -->
      <p class="loginText">登录</p>
      <p class="loginTipText">请填入管理员账号和密码</p>
      <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
        <a-form-item field="name" label="Username">
          <a-input
            v-model="form.name"
            placeholder="please enter your username..."
          />
        </a-form-item>
        <a-form-item field="password" label="password">
          <a-input
            v-model="form.password"
            placeholder="please enter your password..."
          />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<style scoped>
.loginText {
  margin-bottom: 5px;
  font-size: 48px;
  font-weight: bolder;
}
.loginTipText {
  margin-bottom: 25px;
  font-size: 12px;
  font-weight: lighter;
}
.login-form-container {
  flex: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.welcome-image {
  flex: 7;
}
.welcome-image img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
