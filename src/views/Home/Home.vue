<script setup>
import header_1 from "../../components/header_1.vue";
import footer_1 from "../../components/footer_1.vue";
import carouse from "../../components/carouse.vue";
</script>

<template>
  <div class="h-screen relative overflow-hidden bg-home">
    <div class="absolute top-0 h-full w-full overflow-y-auto">
      <header_1 />
      <carouse class="pt-24 " />

      <div class="w-full flex justify-center text-2xl mt-10">商品</div>
      <div class="flex mx-10">
        <div class="w-full md:flex md:justify-center items-center pt-24 pb-6">
          <div>
            <div class="">
              <router-link to="/Coffee_bag">
                <img
                  class="w-[600px]"
                  src="@/assets/background/coffee-drinks.jpg"
                  alt=""
                />
                <!-- <p class="absolute bottom-7 right-2 text-white">關於我們</p> -->
                <!-- <p class="absolute bottom-0 right-2 text-white">About Us</p> -->
              </router-link>
            </div>
            <div class="md:w-[600px] flex text-xl font-bold justify-center">
              <p>飲品咖啡</p>
            </div>
          </div>
          <div>
            <div class="mt-16 md:mt-0">
              <div class="relative flex cursor-pointer">
                <router-link to="/WesternFood">
                  <img
                    class="w-[600px]"
                    src="@/assets/background/western-food.jpg"
                  />
                  <!-- <p class="absolute bottom-7 right-2 text-white">咖啡豆</p>
                    <p class="absolute bottom-0 right-2 text-white">
                      coffee beans
                    </p> -->
                </router-link>
              </div>
              <div class="md:w-[600px] flex text-xl font-bold justify-center">
                <p>西餐飲食</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer_1 class="text-black" />
    </div>
  </div>
</template>

<style scoped></style>
