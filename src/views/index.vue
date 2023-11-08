<script setup>
import Home from './Home/Home.vue'
import { useAuthStore } from "../store/auth";
import {onMounted } from 'vue'
const authStore = useAuthStore();

onMounted(() => {
  sessionStorage.setItem('token', authStore.isAuthenticated)
  console.log(authStore.isAuthenticated)
})

</script>

<template>
  <div>
    <div class="relative w-full min-h-screen">
      <Home />
    </div>
  </div>
</template>

<style scoped>
</style>

