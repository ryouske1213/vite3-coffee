<script setup>
import { defineComponent, ref, onMounted, reactive, computed } from 'vue'
import carousel from '../assets/carousel.json'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const CarouselData = reactive(carousel)

</script>

<template>
  <Carousel :wrap-around="true" :autoplay="3000" :transition="1000">
    <Slide v-for="slide in CarouselData" :key="slide">
      <!-- <div class="carousel__item">{{ slide.img }}</div> -->
      <img class="w-[600px]" :src="`/image/${slide.img}`" alt="">
      <!-- <img src="" alt=""> -->
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
/* .carousel__item {
  min-height: 100px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
} */

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid white; */
}
</style>
