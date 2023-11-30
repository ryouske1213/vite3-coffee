<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import Coffee from './store/api'

const isCoffeeData = Coffee()

onMounted(async () => {
  console.log(await isCoffeeData)
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
