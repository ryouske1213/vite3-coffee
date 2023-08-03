<script setup>
import header_1 from '../../components/header_1.vue'
import footer_1 from '../../components/footer_1.vue'
import Coffee_items from '../../assets/coffee.json'
import { ref, reactive, onMounted, computed } from 'vue';
import { useRouter, useRoute } from "vue-router";

const items = reactive(Coffee_items);
const id = ref(1);
const count = ref(1);
const route = useRoute();
const router = useRouter();

onMounted(() => {
    id.value = route.params.id
})

const currentItem = computed(() => {
    return items.find((item) => item.id == id.value)
})

function add(){
    count.value++
}

function sub(){
    if(count.value > 1) {
        count.value--
    } else {
        count.value = 1
    }
}

function addToCart(){
    const carts = JSON.parse(window.localStorage.getItem("carts","carts")) ?? []
    carts.push({
        id: id.value,
        count: count.value
    });
    window.localStorage.setItem("carts", JSON.stringify(carts))
    router.push('/Shopping/')
}

</script>

<template>
    <div class="h-screen w-screen relative overflow-hidden">
        <img class=" object-cover opacity-80 -z-50 h-full w-full" src="@/assets/background/購物車背景.png" alt="" />
        <div class=" absolute top-0 h-full w-full overflow-y-auto">
            <header_1 />
            <div class="flex flex-wrap justify-evenly pt-20">
                <div>
                    <img :src="`/image/${currentItem.img}`">
                </div>
                <div class="flex-wrap">
                    <p class="text-4xl font-bold pb-14 pt-8">{{ currentItem.name }}</p>
                    <p class="text-xl font-semibold pb-5">烘培度 : {{ currentItem.roast }}</p>
                    <p class="text-xl font-semibold pb-5">產地 : {{ currentItem.Origin }}</p>
                    <p class="text-xl font-semibold pb-5">處理法 : {{ currentItem.method }}</p>
                    <p class="text-xl font-semibold pb-5">風味 : {{ currentItem.flavour }}</p>
                    <div class="border-b py-6"></div>
                    <div class="flex pt-6 flex-wrap justify-evenly">
                        <div>
                            <p class="text-lg ">{{ count * currentItem.unit }}g / {{ count * currentItem.price }} TWD</p>
                        </div>
                    </div>

                        <div class="flex py-12 justify-evenly flex-wrap">
                            <div class="flex relative ">
                                <div class="flex items-center cursor-pointer border px-4" @click="sub">
                                    <div>-</div>
                                </div>

                                <div class="flex px-4 border items-center">
                                    <p>{{ count }}</p>
                                </div>

                                <div class="flex items-center cursor-pointer border px-4" @click="add">
                                    <div>+</div>
                                </div>
                            </div>

                            <div class="relative ">
                                <div class="flex justify-center border w-32 p-4 cursor-pointer bg-black text-white"
                                    @click="addToCart()">
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