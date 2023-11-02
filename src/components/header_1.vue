<script setup>
import dropdownWindow from '../components/dropdown.vue';
import { ref } from 'vue'

const isOpen = ref(true)

const openDropdown = () => {
  isOpen.value = true;
}

const closeDropdown = () => {
  isOpen.value = true;
}

</script>

<template>
  <div class="fixed bg-home text-black w-full z-50">
    <div class="md:flex mx-4 mt-4 md:items-center justify-center">
      <router-link
        to="/Home"
        class="flex justify-center items-center md:flex-nowrap"
      >
        <img
          class="w-16 justify-center items-center"
          src="../assets/background/Logo.png"
          alt=""
        />
        <img class="h-14 pl-2" src="../../image/ordinary coffee.png" alt="" />
      </router-link>
      <div class="m-4 flex text-center">
        <router-link to="/About" class="w-full px-2 md:w-auto text-xl"
          >關於我們</router-link
        >
      </div>
      <div class="relative m-4 flex text-center dropdown-menu">
        <div class="dropdown flex" @mouseenter="openDropdown" @mouseleave="closeDropdown">
          <router-link to="/Coffee_bag" class="w-full md:w-auto text-xl pr-2" 
            >線上購物
            </router-link
          >
          <i class="fa-solid fa-chevron-down flex items-center"></i>
        </div>
      </div>
      <div class="m-4 flex text-center">
        <router-link to="/Question" class="w-full px-2 md:w-auto text-xl"
          >常見問題</router-link
        >
      </div>
      <div class="m-4 flex text-center">
        <router-link to="/Shopping" class="w-full px-2 md:w-auto text-xl"
          >購物車</router-link
        >
      </div>
    </div>
    <div class="border-b-2 border-b-gray-300 mt-2"></div>
    <dropdownWindow v-if="isOpen" />
  </div>
</template>

<style scoped>
.dropdown::after {
  /* border: 2px solid #aaa; */
  content: "";
  height: 4px;
  position: absolute;
  bottom: -4px;
  width: 0;
  left: 0;
  /* border-bottom: 4px solid #aaa; */
  background-color: cadetblue;
  transition: width 0.2s, left 0.2s;
  transition-timing-function: ease-out;
}
.dropdown:hover::after {
  width: 100%;
  left: 0;
}
</style>
