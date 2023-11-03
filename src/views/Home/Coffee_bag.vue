<script setup>
import header_1 from '../../components/header_1.vue'
import footer_1 from "../../components/footer_1.vue";
import card from '../../components/card.vue'
import Coffee_items from '../../assets/coffee.json'
import { reactive } from 'vue';
const items = reactive(Coffee_items)



</script>

<template>
  <div class="h-screen w-full bg-home">
    <header_1 class="text-black" />
    <div class="w-full pt-[105px]">
      <main>
        <div class="w-full flex justify-center mt-20">
          <img class="w-[1000px]" src="../../../public/image/Single-product-light roast.png" alt="">
        </div>
        <div class="w-full flex justify-center mt-10 font-bold">
          <h1 class="text-2xl">│ 淺陪咖啡豆 │</h1>
        </div>
        <p class="text-center mt-10">「單品咖啡」泛指來自單一國家或產區的單一款式咖啡豆，如衣索比亞-耶加雪菲（Ethiopia Yirgacheffe）。</p>
        <p class="text-center mt-5">每個國家產地不一，不同國家、不同地區擁有各自的氣候、土壤與自然環境，栽種的咖啡因而各具特色。</p>
        <!-- <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-items-center">
          <card v-for="item in items" :key="item.id" v-bind="item" />
        </div> -->
      </main>
      <!-- <footer_1 class="text-black" /> -->
    </div>
  </div>
</template>

<style scoped>
/* .showbackground {
  background-image: url('@/assets/background/購物車背景.png');
  background-size: cover;
  background-repeat: no-repeat;
} */
</style>
