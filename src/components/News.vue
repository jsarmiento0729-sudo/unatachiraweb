<template>
  <main class="news-section">
    <div class="news-header">
      <h2 style="font-family:'Montserrat'; color:var(--una-blue); border-left:6px solid var(--una-blue); padding-left:15px;">NOTICIAS</h2>
      <div class="nav-btns">
        <button class="n-btn" @click="moveNews(-1)">❮</button>
        <button class="n-btn" @click="moveNews(1)">❯</button>
      </div>
    </div>
    <div class="news-viewport">
      <div class="news-track" ref="newsTrack" :style="{ transform: `translateX(-${nIdx}px)` }">
        <article class="n-card" v-for="(news, index) in newsItems" :key="index">
          <div class="n-img" :style="{ backgroundImage: `url(${news.img})` }"></div>
          <div class="n-body">
            <h3>{{ news.title }}</h3>
            <p>{{ news.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const newsItems = ref([
  { title: 'Inscripciones', description: 'Proceso 2026-I abierto.', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=400' },
  { title: 'Biblioteca', description: 'Recursos digitales disponibles.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400' },
{ title: 'Inscripciones', description: 'Proceso 2026-I abierto.', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=400' },
  { title: 'Biblioteca', description: 'Recursos digitales disponibles.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400' },
  { title: 'Inscripciones', description: 'Proceso 2026-I abierto.', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=400' },
  { title: 'Biblioteca', description: 'Recursos digitales disponibles.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400' },
  
]);

const nIdx = ref(0);
const newsTrack = ref(null);

function moveNews(d) {
  const track = newsTrack.value;
  const cardW = track.querySelector('.n-card').offsetWidth + 20;
  const max = track.scrollWidth - track.parentElement.offsetWidth;
  nIdx.value += d * cardW;
  if(nIdx.value < 0) nIdx.value = 0;
  if(nIdx.value > max) nIdx.value = max;
}
</script>

<style scoped>
.news-section { padding: 60px 5%; max-width: 1500px; margin: 0 auto; }
.news-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.news-viewport { overflow: hidden; }
.news-track { display: flex; gap: 20px; transition: transform 0.5s ease; }
.n-card { min-width: calc(33.33% - 14px); background: white; border-radius: 8px; overflow: hidden; box-shadow: var(--shadow); flex-shrink: 0; }
.n-img { height: 180px; background-size: cover; background-position: center; background-color: #ddd; }
.n-body { padding: 20px; }
.nav-btns { display: flex; gap: 10px; }
.n-btn { background: var(--una-blue); color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer; }
@media (max-width: 1100px) {
  .n-card { min-width: calc(50% - 10px); }
}
</style>