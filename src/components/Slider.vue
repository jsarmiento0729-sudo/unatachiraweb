<template>
  <section class="hero-slider">
    <button class="arrow-btn arrow-prev" @click="moveSlide(-1)">❮</button>
    <button class="arrow-btn arrow-next" @click="moveSlide(1)">❯</button>
    <div class="slider-wrap" :style="{ transform: `translateX(-${sIdx * 100}%)` }">
      <div class="slide" v-for="(slide, index) in slides" :key="index" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${slide.img})` }">
        <div class="slide-content">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- RUTAS ACTUALIZADAS A LA CARPETA PUBLIC ---
const slides = ref([
  { 
    title: 'Estudia a tu Ritmo', 
    description: 'Educación universitaria de calidad sin fronteras.', 
    // Asegúrate de incluir la extensión de archivo (ej: .jpg o .png)
    img: '/carrusel/img1.png' 
  },
  { 
    title: 'Aula Virtual 24/7', 
    description: 'Accede a tus clases desde cualquier lugar.', 
    img: '/carrusel/img2.png' 
  }
]);
// ----------------------------------------------

const sIdx = ref(0);
let intervalId;

function moveSlide(d) {
  sIdx.value = (sIdx.value + d + slides.value.length) % slides.value.length;
}

onMounted(() => {
  intervalId = setInterval(() => moveSlide(1), 7000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.hero-slider { position: relative; height: 500px; background: #000; overflow: hidden; }
.slider-wrap { display: flex; height: 100%; transition: transform 0.6s ease-in-out; }
.slide { min-width: 100%; height: 100%; background-size: cover; background-position: center; display: flex; align-items: center; }
.slide-content { background: rgba(255,255,255,0.95); padding: 40px; margin-left: 8%; border-left: 8px solid var(--una-blue); max-width: 450px; }
.arrow-btn { 
  position: absolute; top: 50%; transform: translateY(-50%); 
  background: rgba(0, 51, 153, 0.8); color: white; border: none; 
  width: 45px; height: 45px; border-radius: 50%; cursor: pointer; z-index: 10; font-size: 1rem; 
}
.arrow-prev { left: 20px; } .arrow-next { right: 20px; }
</style>