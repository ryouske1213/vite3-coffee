<script setup>
import { ref, reactive } from "vue";
import header_1 from "../../components/header_1.vue";
import footer_1 from "../../components/footer_1.vue";
import Food from "../../assets/light_meal.json";
import { useRouter, useRoute } from "vue-router";

const FoodMenu = reactive(Food);
const FoodData = reactive([])
const router = useRouter()

const ButtonFoodMenu = (link) => {
  FoodData.push(link)
  sessionStorage.setItem('Food', JSON.stringify(FoodData))
}


</script>

<template>
  <div class="relative top-0 h-full">
    <header_1 />
    <div class="pt-[105px]">
      <div class="w-full flex justify-center mt-10">
        <h1 class="p-7 border-2 text-6xl rounded-2xl">餐廳菜單</h1>
      </div>
      <div class="w-full flex justify-center mt-10">
        <h4 class="w-[1000px] border-t-2 border-b-2 text-center">
          <p class="text-lg my-2">NEW★商業午餐</p>
        </h4>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 mx-4"
    >
      <div
        class="w-full flex justify-center"
        v-for="link in FoodMenu"
        :key="link.id"
      >
        <div class="w-[400px]">
          <img @click="ButtonFoodMenu(link)" class="w-[400px]" :src="link.img" alt="" />
          <h1 class="text-blue-700 text-2xl font-bold">{{ link.name }}</h1>
          <p>{{ link.content }}</p>
        </div>
      </div>
    </div>
    <footer_1 />
  </div>
</template>

<style scoped></style>
