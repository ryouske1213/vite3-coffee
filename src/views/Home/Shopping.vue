<script setup>
import header_1 from "../../components/header_1.vue";
import cart from "../../components/cart.vue";
import footer_1 from "../../components/footer_1.vue";
import Coffee_items from "../../assets/coffee.json";
import { useRouter, useRoute } from "vue-router";
import { ref, reactive, computed, onMounted } from "vue";

const items = reactive(Coffee_items);
const carts = ref([cart]);
const coffeeData = ref([]);

onMounted(() => {
  carts.value = JSON.parse(localStorage.getItem("carts")) ?? [];

  items.forEach((item) => {
    carts.value.find((element) => {
      if (item.id == element.id) {
        coffeeData.value.push(item);
      }
    });
  });
});




coffeeData.value.reduce((accumulator, current) => {
  const existingItem = accumulator.find((item) => item.id === current.id);

  if (existingItem) {
    // If item with the same ID exists, merge their properties
    Object.assign(existingItem, current);
  } else {
    // If item with the same ID doesn't exist, add it to the accumulator
    accumulator.push(current);
  }

  return accumulator;
}, []);


const add = (id) => {
  coffeeData.value.forEach((item) => {
    if (item.id == id) {
      item.count++;
    }
  });
};

const sub = (id) => {
  coffeeData.value.forEach((item, index) => {
    if (item.id == id) {
      item.count--;
    }
    if (item.count <= 0) {
      item.count = 1;
      carts.value.splice(index, 1);
    }
  });
  localStorage.setItem("carts", JSON.stringify(carts.value));
};

const del = (id) => {
  cartData.forEach((item, index) => {
    if (item.id == id) {
      carts.value.splice(index, 1);
    }
  });
  localStorage.setItem("carts", JSON.stringify(carts.value));
};
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
        <div class="mt-5">
          <div class="text-3xl font-bold px-20">
            <p>Sopping Cart</p>
          </div>
          <div class="text-3xl font-bold px-20">
            <p class="">購物車</p>
          </div>
        </div>
        <div class="w-full h-[500px] flex justify-center overflow-y-auto">
          <div class="w-1/2 md:w-full lg:w-4/5 xl:w-2/3">
            <cart
              v-for="item in coffeeData"
              :key="item"
              v-bind="item"
              @add="add($event)"
              @sub="sub($event)"
              @del="del($event)"
            />
          </div>
        </div>
      </div>
    </div>
    <footer_1 class="w-full fixed bottom-0" />
  </div>
</template>

<style scoped></style>
