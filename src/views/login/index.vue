<script setup>
import header_1 from "../../components/header_1.vue";
import footer_1 from "../../components/footer_1.vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import { ref, useAttrs, onMounted, watch } from "vue";
import { useAuthStore } from "../../store/auth";
import { usePostUser } from "../../store/user";
import axios from 'axios'


const authStore = useAuthStore();
const router = useRouter();
const LoginToken = ref();
const isUser = ref();
const username = ref("");
const password = ref("");
const store = usePostUser()

onMounted(async () => {
  sessionStorage.getItem("token");
  // isUser.value = await apiGet.isUserData(username.value, password.value);
});

// onBeforeRouteLeave((to, from, next) => {
//   authStore.username = "";
//   authStore.password = "";
//   next();
// });

const Login = async () => {
  const User = {
    username: username.value, 
    password: password.value
  }
  
  isUser.value = await store.isUserData(User)
  
  try {
    if(isUser.value == 0) {
    alert('請輸入正確帳號密碼')
    }
    if(isUser.value[0].username == username.value && isUser.value[0].password == password.value) {
      authStore.isAuthenticated = true;
      sessionStorage.setItem("token", authStore.login);
      router.push("/home");
    }

  } catch {
    store.showError = false
    // alert('請輸入帳號密碼')
  }
};

// watch(() => [username.value, password.value], (newValue, oldVale) => {
//   if(newValue[0]){
//     store.usernameShowError = false
//   } else {
//     store.usernameShowError = true
//   }
//   if(newValue[1]){
//     store.passwordShowError = false
//   } else {
//     store.passwordShowError = true
//   }
// })

const callback = (response) => {
  if (response) {
    authStore.isAuthenticated = true;
    sessionStorage.setItem("GoogleToken", response.credential);
    sessionStorage.setItem("token", authStore.login);
    router.push("/home");
  }
};
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
              v-model="username"
              class="inputColor"
              type="text"
              placeholder="帳號 / 手機號碼"
            />
            <div class="border-b-2 mt-2"></div>
            <p class="text-red-800 text-sm" v-show="store.usernameShowError">請輸入帳號</p>
          </div>
          <div class="mt-4">
            <input
              v-model="password"
              class="inputColor"
              type="text"
              placeholder="密碼"
            />
            <div class="border-b-2 mt-2"></div>
            <p class="text-red-800 text-sm" v-show="store.passwordShowError">請輸入密碼</p>
          </div>
          <div
            class="mt-4 w-16 h-10 bg-slate-300 rounded-lg flex justify-center items-center"
          >
            <button @click="Login">登入</button>
          </div>
          <GoogleLogin class="mt-4" :callback="callback" />
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
