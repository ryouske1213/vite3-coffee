<script setup></script>

<template>
  <div>
    <div class="md:flex px-4 pt-4 md:items-center justify-center">
      <div
        class="flex justify-center items-center md:flex-nowrap"
      >
        <img
          class="w-16 justify-center items-center"
          src="../assets/background/Logo.png"
          alt=""
        />
        <img class="h-14 pl-2" src="../../../public/image/ordinary coffee.png" alt="">
      </div>
      <div class="md:mx-10 mt-10 md:mt-0 flex text-center">
        <router-link to="/Home" class="w-full px-2 md:w-auto text-xl"
          >首頁</router-link
        >
        <router-link to="/About" class="w-full px-2 md:w-auto text-xl"
          >關於我們</router-link
        >
        <router-link to="/Coffee_bag" class="w-full px-2 md:w-auto text-xl"
          >線上購物</router-link
        >
        <router-link to="/Shopping" class="w-full px-2 md:w-auto text-xl"
          >購物車</router-link
        >
      </div>
    </div>
    <div class="border-b-2 border-b-gray-300 mt-2"></div>
  </div>
</template>

<style></style>
