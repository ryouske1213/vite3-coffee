<script setup>
import { ref, reactive, onMounted, computed } from "vue";

let checkout = reactive([]);
let PriceTotel = reactive([]);

onMounted(() => {
  checkout = JSON.parse(localStorage.getItem("currenItem", "currenItem")) ?? [];
  checkout.forEach((item) => PriceTotel.push(item.count * item.price));
});

const checkoutData = computed(() => {
  const initialValue = 0;
  return PriceTotel.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
});
</script>

<template>
  <div>
    <div
      class="min-w-[350px] max-w-[750px] md:h-[500px] md:border-l p-4 pb-20 border-gray-500 border-opacity-25"
    >
      <div class="h-full">
        <div
          class="w-full h-10 flex items-center border-dashed border-b-2 border-gray-500 border-opacity-20"
        >
          <p class="text-lg tracking-widest">購物車總計</p>
        </div>
        <div
          class="pt-10 flex justify-between w-full border-dashed border-b-2 border-gray-500 border-opacity-20"
        >
          <p class="text-lg font-bold tracking-widest">
            總計
          </p>
          <p>TWD {{ checkoutData }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
