<script setup>
import header_1 from '../../components/header_1.vue'
import footer_1 from '../../components/footer_1.vue'
</script>

<template>
  <div class="h-screen w-screen relative overflow-hidden">
    <img class=" object-cover opacity-80 -z-50 h-full w-full" src="@/assets/background/咖啡背景02.jpg" alt="" />
    <div class=" absolute top-0 h-full w-full overflow-y-auto">
      <header_1 class="text-white" />
      <main>
        <div class="flex flex-wrap justify-around py-16">
          <div class="flex flex-col items-center justify-center">
            <p class="text-5xl text-white font-bold ">平凡coffee</p>
            <p class="text-2xl text-white font-bold p-4">一個普通人開著一間平凡的咖啡</p>
            <p class="text-2xl text-white font-bold p-4">我們有提供咖啡飲品，三明治，各類輕食</p>
            <p class="text-2xl text-white font-bold p-4">免費WI-FI上網，舒適用餐環境</p>
            <p class="text-2xl text-white font-bold p-4">歡迎來電</p>
          </div>
          <img src="@/assets/background/咖啡圖片03.png" alt="">
        </div>
      </main>
      <footer_1 class="text-white" />
    </div>
  </div>
</template>

<style scoped></style>
