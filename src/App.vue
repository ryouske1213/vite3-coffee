<script setup>
import { useAuthStore } from "./store/auth";
import {onMounted} from 'vue'
const authStore = useAuthStore();

onMounted(() => {
  sessionStorage.setItem("token", authStore.isAuthenticated);
})
</script>

<template>
  <div>
    <div class="relative w-full min-h-screen">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
</style>
