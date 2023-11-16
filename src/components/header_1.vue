<script setup>
import hamburgerMenu from '../components/hamburgerMenu.vue'
import Login from "../components/Login.vue";
import dropdownWindow from "../components/dropdown.vue";
import { useAuthStore } from "../store/auth";
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";

// const WidthMenu = ref('')

const isOpen = ref(true);

const OpenMenu = () => {
  isOpen.value = !isOpen.value
  // console.log(isOpen)
}
</script>

<template>
  <div class="fixed flex bg-home text-black w-full z-50">
      <div class="flex items-center md:hidden ml-5">
        <hamburgerMenu @OpenMenu="OpenMenu" :isOpen="isOpen" />
      </div>
    <div class="w-full flex justify-between items-center">
      <div class="md:flex h-20 mx-4 mt-4 md:items-center justify-center">
        <router-link
          to="/Home"
          class="flex justify-center items-center md:flex-nowrap"
        >
          <img
            class="w-16 justify-center items-center"
            src="../assets/background/Logo.png"
            alt=""
          />
          <img
            class="h-14 pl-2"
            src="../../public/image/ordinary-coffee.png"
            alt=""
          />
        </router-link>
        <div class="hidden md:flex">
          <div class="m-4 relative text-center dropdown-menu">
            <div class="h-full flex dropdown items-center">
              <router-link to="/About" class="w-full md:w-auto text-xl"
                >關於我們
              </router-link>
            </div>
          </div>
          <div class="m-4 relative text-center dropdown-menu">
            <div class="h-full flex dropdown items-center">
              <router-link to="/Coffee_bag" class="w-full md:w-auto text-xl"
                >線上購物
              </router-link>
              <!-- <i class="fa-solid fa-chevron-down flex items-center"></i> -->
            </div>
          </div>
          <div class="m-4 relative text-center dropdown-menu">
            <div class="h-full flex dropdown items-center">
              <router-link to="/Question" class="w-full md:w-auto text-xl"
                >常見問題
              </router-link>
            </div>
          </div>
          <div class="m-4 relative text-center dropdown-menu">
            <div class="h-full flex dropdown items-center">
              <router-link to="/Shopping" class="w-full md:w-auto text-xl"
                >購物車
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <Login />
    </div>
    <div class="border-b-2 border-b-gray-300 mt-2"></div>
    <!-- <dropdownWindow v-if="isOpen" /> -->
  </div>
</template>

<style scoped>

</style>
