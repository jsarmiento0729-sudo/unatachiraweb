<template>
  <VueFlux :options="opciones" :rscs="rscs" :transitions="transiciones">
    <template #preloader="preloaderProps">
      <FluxPreloader v-bind="preloaderProps" />
    </template>

    <template #controls="controlsProps">
      <FluxControls v-bind="controlsProps" />
    </template>

    <template #pagination="paginationProps">
      <FluxPagination v-bind="paginationProps" />
    </template>
  </VueFlux>
</template>

<script setup>
import { reactive, shallowReactive } from 'vue'
import {
  VueFlux,
  FluxPreloader,
  FluxControls,
  FluxPagination,
  Img,
  Wave,
} from 'vue-flux'

// ✅ Importa la imagen desde src/assets usando ruta relativa
import flyer from '../assets/flyer.png'

const opciones = reactive({
  allowFullscreen: false,
  allowToSkipTransition: true,
  autohideTime: 2500,
  autoplay: false,
  bindKeys: false,
  delay: 5000,
  enableGestures: false,
  infinite: true,
  lazyLoad: true,
  lazyLoadAfter: 3,
})

const rscs = shallowReactive([
  new Img(flyer),
  new Img(flyer),
  new Img(flyer),
])

const transiciones = shallowReactive([Wave])
</script>

<style scoped>
/* Estilos opcionales para personalizar el carrusel */
</style>