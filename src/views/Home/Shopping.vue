<script setup>
import header_1 from "../../components/header_1.vue";
import cart from "../../components/cart.vue";
import footer_1 from "../../components/footer_1.vue";
import Coffee_items from "../../assets/coffee.json";
import { ref, reactive, computed, onMounted } from 'vue';

const items = reactive(Coffee_items)
const carts = ref([cart])
const result = ref([])

onMounted(() => {
  carts.value = JSON.parse(window.localStorage.getItem("carts")) ?? [];
})

const cartData = computed(() => {
  return carts.value.map((e) => {
    const temp = items.find((item) => item.id == e.id)
    return Object.assign({}, e, temp)
  })
})

function add(id) {
  carts.value.forEach((item) => {
    if(item.id == id) {
      item.count++
    }
  })
}

function sub(id){
  carts.value.forEach((item, index) => {
    if(item.id == id) {
      item.count--
    }
    if(item.count <= 0) {
      item.count = 1
      carts.value.splice(index, 1)
    }
    window.localStorage.setItem('carts', JSON.stringify(carts.value))
  })
}

function del(id){
  carts.value.forEach((item, index) => {
    if(item.id == id) {
      carts.value.splice(index, 1)
    }
  })
  window.localStorage.setItem('carts', JSON.stringify(carts.value))
}




</script>

<template>
  <div class="h-screen w-screen relative overflow-hidden">
    <img class="object-cover opacity-80 -z-50 h-full w-full" src="@/assets/background/購物車背景.png" alt="" />
    <div class="absolute top-0 h-full w-full overflow-y-auto">
      <header_1 />

      <div>
        <div class="text-3xl font-bold px-20 py-6">
          <p>Sopping Cart</p>
        </div>
        <div class="text-3xl font-bold px-20">
          <p class="">購物車</p>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <div class="bg-slate-100 w-1/2 md:w-full lg:w-4/5 xl:w-2/3">
          <cart v-for="item in cartData" :key="item" v-bind="item" @add="add($event)" @sub="sub($event)"
            @del="del($event)" />
        </div>
      </div>
      <div class="w-full flex justify-center h-32">
        <div class="bg-slate-100 mt-10 w-1/2 md:w-full lg:w-4/5 xl:w-2/3">
          <div class="w-3/4 h-full flex justify-end items-center">
            <!-- <p class="">商品總金額: {{ priceData }}</p> -->
          </div>
        </div>
      </div>
      <footer_1 />
    </div>
  </div>
</template>

<style scoped>
</style>
