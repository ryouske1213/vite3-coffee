<script setup>
import { useAuthStore } from "../store/auth";
import { useRouter, useRoute } from "vue-router";
import { ref, reactive, onMounted } from "vue";

const authStore = useAuthStore();
const router = useRouter();
const callback = (response) => {
  console.log(response);
};

const singIn = () => {
  //localhost member
  sessionStorage.setItem("token", authStore.singOut);
  router.push("/Login/index");

  // google
  sessionStorage.removeItem("GoogleToken");
};


</script>

<template>
  <div class="flex items-center">
    <button class="w-full pr-4">
      <router-link to="/Login/index">
        <img class="w-10" src="../../public/image/member.png" alt="" />
      </router-link>
    </button>
    <button @click="singIn" class="w-full">
      <img
        class="w-10 mr-4"
        src="../../public/image/sign-out-icon.png"
        alt=""
      />
    </button>
  </div>
</template>

<style scoped></style>
