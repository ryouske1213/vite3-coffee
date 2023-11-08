<script setup>
import header_1 from "../../components/header_1.vue";
import footer_1 from "../../components/footer_1.vue";
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import { ref, useAttrs } from "vue";
import { useAuthStore } from "../../store/auth";

const authStore = useAuthStore();
const router = useRouter()

onBeforeRouteLeave((to, from, next) => {
  authStore.username = '',
  authStore.password = ''
  next()
})

const Login = () => {
  if(authStore.username == 'test' && authStore.password == '1234') {
    authStore.isAuthenticated = true
    sessionStorage.setItem('token', authStore.isAuthenticated)
    router.push('/home')
  }
}


</script>

<template>
  <div>
    <div class="bg-home relative h-screen">
      <header_1 />
      <div class="pt-[105px] h-1/2 flex items-center w-full justify-center">
        <!-- <div class="w-full flex justify-center"> -->
        <div class="w-[300px] h-[200px]">
          <div>
            <h1 class="text-4xl font-bold">登入</h1>
          </div>
          <div class="mt-4">
            <input
              v-model="authStore.username"
              class="inputColor"
              type="text"
              placeholder="帳號 / 手機號碼"
            />
            <div class="border-b-2 mt-2"></div>
          </div>
          <div class="mt-4">
            <input
              v-model="authStore.password" class="inputColor" type="text" placeholder="密碼" />
            <div class="border-b-2 mt-2"></div>
          </div>
          <div
            class="mt-4 w-16 h-10 bg-slate-300 rounded-lg flex justify-center items-center"
          >
            <button @click="Login">登入</button>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <footer_1 class="w-full absolute bottom-0" />
  </div>
</template>

<style scoped>
.inputColor {
  background-color: transparent; /* 設置背景為透明 */
  border: none; /* 清除邊框 */
  outline: none; /* 清除焦點時的輪廓 */
}
</style>
