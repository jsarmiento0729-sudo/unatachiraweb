<template>
  <Swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :navigation="true"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 5000 }"
    loop
    class="slider-uc"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <div class="slide-content">
        <img :src="slide.image" alt="Banner institucional" />
        <div class="text-overlay">
          <h2>{{ slide.titulo }}</h2>
          <p>{{ slide.descripcion }}</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    titulo: '- Forma a las futuras generaciones con vocación y compromiso',
    descripcion: 'Explora nuestro programa académico',
    image: '/img/P1.png'
  },
  {
    titulo: 'Estudia en la UNA',
    descripcion: 'Formación integral con visión humanista',
    image: '/img/p2.png'
  }
]
</script>





<style scoped>

.slider-uc {
  width: 100%;
  height: 100%; /* Ocupa toda la altura de la ventana */
  position: fixed;
  overflow: hidden;
 
}

.slide-content {
  position: fixed;
  width: 100%;
  height: 70%;
  margin-top: 15em;
  object-fit: cover;


}

.slide-content img {
  width: 100%;
  height: 70%;
   /* Asegura que la imagen se escale sin deformarse */
  display: block;
  
 
}

.text-overlay {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background: rgba(0, 0, 50, 0.5);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 80%;
}

.text-overlay h2,
.text-overlay p {
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
  padding: 0;
  margin-right: 0;
  
}

.swiper-pagination-bullet {
  background: white;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  /* o el color institucional que prefieras */
}


</style>