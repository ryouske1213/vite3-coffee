<script setup></script>

<template>
  <header class="md:flex mx-4 mt-4 md:items-center">
    <div
      class="flex justify-center md:flex-nowrap"
    >
      <img
        class="w-16 justify-center items-center"
        src="../assets/background/Logo.png"
        alt=""
      />
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
  </header>
</template>

<style></style>
