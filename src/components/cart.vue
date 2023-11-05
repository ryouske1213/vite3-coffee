<script setup>
const props = defineProps(['id', 'name', 'price', 'unit', 'img1', 'count'])

</script>

<template>
  <div class="w-full justify-center">
    <div class="md:flex w-full my-2">
      <div class="md:flex">
        <div class="w-full md:w-[30%] flex justify-center md:justify-start md:ml-10">
          <img :src="img1" alt="">
        </div>
        <div class="md:w-40 md:flex text-center items-center md:ml-10">
          {{ name }}
        </div>
      </div>
      <div class="md:flex">
        <div class="w-full md:flex items-center mr-5">
          <div class="md:w-40 flex justify-center items-center my-3 md:mr-10">
            <p class="mr-3">小計</p>
            <p>{{ count * price }}</p>
            <p>TWD</p>
          </div>
          <div class="md:w-40 flex justify-center">
            <p class="flex justify-center items-center md:w-full pr-4">數量</p>
            <div class="flex items-center px-2  cursor-pointer">
              <div @click="$emit('sub', id)">-</div>
            </div>
            <div class="flex px-4">
              <p class="flex justify-center">{{ count }}</p>
            </div>
            <div class="flex items-center px-2 cursor-pointer">
              <div @click="$emit('add', id)">+</div>
            </div>
          </div>
          <div class="flex justify-center items-center my-3 md:pl-10">
            <div class=" bg-slate-800 w-20 h-10 text-white flex items-center justify-center">
              <p @click="$emit('del', id)">刪除</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>