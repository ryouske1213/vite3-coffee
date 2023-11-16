<script setup>
import { ref } from "vue";
const props = defineProps(["isOpen"]);

</script>

<template>
  <div @click="$emit('OpenMenu')" class="">
    <div>
      <img
        class="w-8 flex items-center"
        src="../../public/image//hamburger.png"
        alt=""
      />
    </div>
    <div
      class=""
      :class="
        props.isOpen ? 'hidden' : 'fixed w-full inset-0 overscroll-contain'
      "
    >
      <div class="pt-40 fixed bg-black opacity-75 w-1/2 inset-0 overscroll-contain">
        <div class="">
          <div class="m-4 h-full flex text-white text-center">
            <router-link to="/About" class="w-full md:w-auto text-xl"
              >關於我們
            </router-link>
          </div>
        </div>
        <div>
          <div class="m-4 h-full flex text-white text-center">
            <router-link to="/Coffee_bag" class="w-full md:w-auto text-xl"
              >線上購物
            </router-link>
            <!-- <i class="fa-solid fa-chevron-down flex items-center"></i> -->
          </div>
        </div>
        <div>
          <div class="m-4 h-full flex text-white text-center">
            <router-link to="/Question" class="w-full md:w-auto text-xl"
              >常見問題
            </router-link>
          </div>
        </div>
        <div>
          <div class="m-4 h-full flex text-white text-center">
            <router-link to="/Shopping" class="w-full md:w-auto text-xl"
              >購物車
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>
