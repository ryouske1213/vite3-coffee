<script setup>
import { onMounted, ref, reactive } from "vue";

const props = defineProps(["id", "name", "price", "unit", "img", "count"]);

const coffeeData = ref([]);

onMounted(() => {
  coffeeData.value =
    JSON.parse(localStorage.getItem("currenItem", "currenItem")) ?? [];
});

const add = (item) => {
  item.count++;
  window.localStorage.setItem("currenItem", JSON.stringify(coffeeData.value));
};

const sub = (item, index) => {
  item.count--;
  if (item.count <= 0) {
    item.count = 1;
  }
  coffeeData.value.splice(index, 1);

  window.localStorage.setItem("currenItem", JSON.stringify(coffeeData.value));
};

const del = (index) => {
  coffeeData.value.splice(index, 1);
  window.localStorage.setItem("currenItem", JSON.stringify(coffeeData.value));
};
</script>

<template>
  <div class="min-w-[320px] max-w-[750px] p-4">
    <div
      class="hidden lg:w-full lg:h-10 lg:flex lg:border-dashed lg:border-b-2 lg:border-gray-500 lg:border-opacity-20"
    >
      <div class="w-full lg:w-[100px] flex items-center lg:mr-10">
        <p>商品</p>
      </div>
      <div class="lg:w-40 lg:flex text-center items-center lg:mr-10">
        <p>價格</p>
      </div>
      <div class="lg:w-20 flex items-center my-3 lg:mr-10">
        <p>總計</p>
      </div>
      <div class="lg:w-20 flex items-center my-3 lg:mr-10">
        <p>數量</p>
      </div>
    </div>
    <div
      v-for="(item, index) in coffeeData"
      :key="item.id"
      class="w-full justify-center border-dashed border-b-2 border-gray-500 border-opacity-20"
    >
      <div class="lg:flex w-full my-2">
        <div class="lg:flex">
          <div class="w-full lg:w-[100px] flex items-center lg:mr-10">
            <img :src="item.img" alt="" />
          </div>
          <div class="lg:w-40 lg:flex text-center items-center lg:mr-10">
            <p>{{ item.name }}</p>
          </div>
        </div>
        <div class="lg:flex">
          <div class="w-full lg:flex items-center mr-5">
            <div class="lg:w-20 flex justify-center items-center my-3 lg:mr-10">
              <p>{{ item.count * item.price }}</p>
              <p>TWD</p>
            </div>
            <div class="lg:w-20 flex justify-center items-center my-3 lg:mr-10">
              <div class="flex items-center cursor-pointer">
                <div class="cursor-pointer border px-2" @click="sub(item, index)">-</div>
              </div>
              <div class="cursor-pointer border px-2">
                <p class="flex justify-center">{{ item.count }}</p>
              </div>
              <div class="flex items-center cursor-pointer">
                <div class="cursor-pointer border px-2" @click="add(item)">+</div>
              </div>
            </div>
            <div class="flex justify-center items-center my-3 lg:pl-10">
              <div
                class="bg-slate-800 w-20 h-10 text-white flex items-center justify-center"
              >
                <p @click="del(index)">刪除</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/Coffee_bag">
      <button
        class="w-full justify-center lg:w-auto mt-4 px-4 py-1 text-lg font-bold tracking-widest border-2 border-black"
      >
        繼續購物
      </button>
    </router-link>
  </div>
</template>

<style scoped></style>
