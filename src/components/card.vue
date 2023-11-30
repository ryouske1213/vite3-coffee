<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['id', 'name', 'price', 'unit', 'img'])

</script>

<template>
    <div class="w-60 mx-16 py-5">
      <router-link :to="`/Coffee_items/${id}`">
        <img class="flex justify-center" :src="img" alt="" />
      </router-link>
      <p class="flex justify-center py-2">{{ name }}</p>
      <p class="flex justify-center border-t-2 py-2 font-mono">
        {{ unit }}g / {{ price }}TWD
      </p>
    </div>
  </template>

<style scoped>
</style>