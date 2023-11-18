<script setup>
import { onMounted, ref, reactive } from "vue";
import Coffee_items from "../assets/coffee.json";

const props = defineProps(["id", "name", "price", "unit", "img1", "count"]);

const coffeeData = ref([]);
const items = ref(Coffee_items);
const coffeeItem = reactive([]);

console.log(props);

onMounted(() => {
  coffeeData.value =
    JSON.parse(localStorage.getItem("currenItem", "currenItem")) ?? [];
});

const add = () => {
  coffeeData.value.forEach((item) => {
    item.count++;
    console.log(item.count);
  });
};

const sub = () => {
  coffeeData.value.forEach((item, index) => {
    item.count--;
    if (item.count <= 0) {
      item.count = 1;
      coffeeData.value.splice(index, 1);
    }
  });
  window.localStorage.setItem("currenItem", JSON.stringify(coffeeData.value));
};

const del = () => {
  coffeeData.value.forEach((item, index) => {
    coffeeData.value.splice(index, 1);
  });
  window.localStorage.setItem("currenItem", JSON.stringify(coffeeData.value));
};
</script>

<template>
  <div v-for="item in coffeeData" :key="item.id" class="w-full justify-center">
    <div class="md:flex w-full my-2">
      <div class="md:flex">
        <div
          class="w-full md:w-[30%] flex justify-center md:justify-start md:ml-10"
        >
          <img :src="item.img" alt="" />
        </div>
        <div class="md:w-40 md:flex text-center items-center md:ml-10">
          {{ item.name }}
        </div>
      </div>
      <div class="md:flex">
        <div class="w-full md:flex items-center mr-5">
          <div class="md:w-40 flex justify-center items-center my-3 md:mr-10">
            <p class="mr-3">小計</p>
            <p>{{ item.count * item.price }}</p>
            <p>TWD</p>
          </div>
          <div class="md:w-40 flex justify-center">
            <p class="flex justify-center items-center md:w-full pr-4">數量</p>
            <div class="flex items-center px-2 cursor-pointer">
              <div @click="sub()">-</div>
            </div>
            <div class="flex px-4">
              <p class="flex justify-center">{{ item.count }}</p>
            </div>
            <div class="flex items-center px-2 cursor-pointer">
              <div @click="add()">+</div>
            </div>
          </div>
          <div class="flex justify-center items-center my-3 md:pl-10">
            <div
              class="bg-slate-800 w-20 h-10 text-white flex items-center justify-center"
            >
              <p @click="del()">刪除</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
