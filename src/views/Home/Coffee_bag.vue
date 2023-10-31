<script setup>
import header_1 from '../../components/header_1.vue'
import card from '../../components/card.vue'
import Coffee_items from '../../assets/coffee.json'
import { reactive } from 'vue';
const items = reactive(Coffee_items)



</script>

<template>
  <div class="h-screen w-full showbackground">
    <div class=" h-full w-full overflow-y-auto">
      <header_1 class="text-black font-bold" />
      <main>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center">
          <card v-for="item in items" :key="item.id" v-bind="item" />
        </div>
      </main>
      <footer>
        <div class="flex justify-center items-center md:pt-16 pt-16">
          <p class="text-2xl">© 2022 cafe Rights Reserved.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.showbackground {
  background-image: url('@/assets/background/購物車背景.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
