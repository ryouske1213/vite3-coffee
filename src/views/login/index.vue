<script setup>
import header_1 from "../../components/header_1.vue";
import footer_1 from "../../components/footer_1.vue";
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();
const username = ref("");
const password = ref("");

const login = async () => {
  await authStore.login(username.value, password.value);
  // 登錄成功後的導航或其他操作
};

console.log(authStore)

const logout = () => {
  authStore.logout();
  // 登出後的導航或其他操作
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
          </div>
          <div class="mt-4">
            <input
              v-model="password" class="inputColor" type="text" placeholder="密碼" />
            <div class="border-b-2 mt-2"></div>
          </div>
          <div
            class="mt-4 w-16 h-10 bg-slate-300 rounded-lg flex justify-center items-center"
          >
            <button @click="login">登入</button>
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
