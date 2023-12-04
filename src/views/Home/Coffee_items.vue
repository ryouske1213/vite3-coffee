<script setup>
import header_1 from "../../components/header_1.vue";
import footer_1 from "../../components/footer_1.vue";
import Coffee_items from "../../assets/coffee.json";
import { ref, reactive, onMounted, computed, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "../../store/auth";
import Coffee from '../../store/api'

// const items = reactive(Coffee_items);
const count = ref(1);
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
let pictureState = ref()
const id = ref();
const coffeeData = reactive([]);
let useCoffee = ref()

onMounted(async() => {
  useCoffee.value = await Coffee()
  console.log(useCoffee.value)
  pictureState.value = sessionStorage.getItem("token", authStore.isAuthenticated)

  id.value = route.params.id;

  if (pictureState.value == 'false') {
    router.push("/Login/index");
  }

  useCoffee.value.forEach((item) => {
    if (item.id == id.value) {
      return coffeeData.push(item);
    }
  });
});

function add() {
  count.value++;
}

function sub() {
  if (count.value > 1) {
    count.value--;
  } else {
    count.value = 1;
  }
}

function addToCart(item) {
  const data =
    JSON.parse(localStorage.getItem("currenItem", "currenItem")) ?? [];

    useCoffee.value.forEach((item) => {
    if (item.id == id.value) {
      data.push({
        id: item.id,
        name: item.name,
        count: item.count,
        price: item.price,
        unit: item.unit,
        img: item.img,
      });
    }
  });

  let arrs = [...data];
  let map = new Map();

  arrs.forEach((item) => {
    if (!map.has(item.id)) {
      map.set(item.id, item);
    }
  });

  let newArr = [...map.values()];

  newArr.map((e) => {
    if (e.id == item.id) {
      e.count++;
    }
  });

  localStorage.setItem("currenItem", JSON.stringify(newArr));
  router.push("/Shopping/");
}
</script>

<template>
  <div
    v-if="pictureState ? 'true' : 'false'"
    class="h-screen w-screen relative overflow-hidden"
  >
    <img
      class="object-cover opacity-80 -z-50 h-full w-full"
      src="@/assets/background/購物車背景.png"
      alt=""
    />
    <div
      v-for="item in coffeeData"
      :key="item.id"
      class="absolute top-0 h-full w-full overflow-y-auto"
    >
      <header_1 />
      <div class="flex lg:h-full items-center flex-wrap justify-evenly pt-[110px]">
        <div>
          <img :src="item.img" />
        </div>
        <div class="flex-wrap">
          <p class="text-4xl font-bold pb-14 pt-8">{{ item.name }}</p>
          <p class="text-xl font-semibold pb-5">烘培度 : {{ item.roast }}</p>
          <p class="text-xl font-semibold pb-5">產地 : {{ item.Origin }}</p>
          <p class="text-xl font-semibold pb-5">處理法 : {{ item.method }}</p>
          <p class="text-xl font-semibold pb-5">風味 : {{ item.flavour }}</p>
          <div class="border-b py-6"></div>
          <div class="flex pt-6 flex-wrap justify-evenly">
            <div>
              <p class="text-lg">
                {{ count * item.unit }}g / {{ count * item.price }} TWD
              </p>
            </div>
          </div>
          <div class="flex py-12 justify-evenly flex-wrap">
            <div class="flex relative">
              <div
                class="flex items-center cursor-pointer border px-4"
                @click="sub"
              >
                <div>-</div>
              </div>

              <div class="flex px-4 border items-center">
                <p>{{ count }}</p>
              </div>

              <div
                class="flex items-center cursor-pointer border px-4"
                @click="add"
              >
                <div>+</div>
              </div>
            </div>

            <div class="relative">
              <div
                class="flex justify-center border w-32 p-4 cursor-pointer bg-black text-white"
                @click="addToCart(item)"
              >
                加到購物車
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer_1 />
    </div>
  </div>
</template>

<style scoped></style>
