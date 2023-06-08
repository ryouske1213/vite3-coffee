<script setup>
import header_1 from "../../components/header_1.vue";
import footer_1 from "../../components/footer_1.vue";
</script>

<template>
  <div class="h-screen w-screen relative overflow-hidden bg-gray-600">
    <img
      class="object-cover opacity-80 -z-50 h-full w-full"
      src="@/assets/background/咖啡背景.jpg"
      alt=""
    />
    <div class="absolute top-0 overflow-y-auto h-full w-full">
      <header_1 class="text-white" />

      <main>
        <div class="flex flex-wrap justify-center items-center py-24">
          <div>
            <div class="relative flex cursor-pointer">
              <router-link to="/About">
                <img src="@/assets/background/咖啡圖片3.png" alt="" />
                <p class="absolute bottom-7 right-2 text-white">關於我們</p>
                <p class="absolute bottom-0 right-2 text-white">About Us</p>
              </router-link>
            </div>
          </div>
          <div class="">
            <div>
              <div class="relative flex cursor-pointer">
                <router-link to="/Coffee_bag">
                  <img
                    class="w-[300px] h-[500px]"
                    src="@/assets/background/coffee-icon.jpg"
                  />
                  <p class="absolute bottom-7 right-2 text-white">咖啡豆</p>
                  <p class="absolute bottom-0 right-2 text-white">
                    coffee beans
                  </p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer_1 class="text-white"/>
    </div>
  </div>
</template>


<style scoped>
</style>