<script setup>
import CommodityTotel from '../../components/CommodityTotel.vue'
import header_1 from "../../components/header_1.vue";
import cart from "../../components/cart.vue";
import footer_1 from "../../components/footer_1.vue";
import Coffee_items from "../../assets/coffee.json";
import { useRouter, useRoute } from "vue-router";
import { ref, reactive, computed, onMounted } from "vue";

const items = reactive([]);
const coffeeItemData = ref();

onMounted(() => {
  coffeeItemData.value =
    JSON.parse(localStorage.getItem("currenItem", "currenItem")) ?? [];
  console.log(coffeeItemData.value);
});
</script>

<template>
  <div class="h-screen w-screen relative overflow-hidden">
    <img
      class="object-cover opacity-80 -z-50 h-full w-full"
      src="@/assets/background/購物車背景.png"
      alt=""
    />
    <div class="absolute top-0 h-full w-full overflow-y-auto">
      <header_1 />
      <div class="pt-[105px]">
        <div class="w-full text-center mt-5">
          <div class="text-xl font-bold px-20">
            <p class="">購物車</p>
          </div>
        </div>
        <div class="w-full h-[500px] flex justify-center overflow-y-auto">
          <div class="flex">
            <cart />
            <CommodityTotel />
          </div>
        </div>
      </div>
    </div>
    <footer_1 class="w-full fixed bottom-0" />
  </div>
</template>

<style scoped></style>
