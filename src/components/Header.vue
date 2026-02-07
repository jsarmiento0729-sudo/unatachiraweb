<template>
  <header>
    <div class="top-bar">
      <div>📍 Centro Local San Cristóbal | ⏰ 8:00 AM - 4:00 PM</div>
      <div>{{ currentDate }}</div>
    </div>

    <div class="nav-container">
      <router-link to="/" class="logo-box">
        <img src="/src/assets/UNI.png" alt="UNA" class="logo-img">
        <div class="logo-txt">UNIVERSIDAD NACIONAL ABIERTA<br>CENTRO LOCAL TÁCHIRA</div>
      </router-link>
      
      <nav class="nav-desktop">
        <div class="nav-item"><router-link to="/" class="nav-link">Inicio</router-link></div>
        
        <div class="nav-item">
          <span class="nav-link">UNA ▾</span>
          <ul class="dropdown">
            <li><router-link to="/sede-sc">Sede san cristobal</router-link></li>
            <li><router-link to="/sede-col">Sede coloncito</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">Oferta Académica ▾</span>
          <ul class="dropdown">
            <li><router-link to="/pregrado">Pregrado</router-link></li>
            <li><router-link to="/postgrado">Postgrado</router-link></li>
            <li><router-link to="/extension">Extension universitaria</router-link></li>
          </ul>
        </div>
        
        <div class="nav-item">
          <span class="nav-link">Curso introductorio ▾</span>
          <ul class="dropdown">
            <li><router-link to="/lapso">lapso de inscripcion</router-link></li>
            <li><router-link to="/requisitos">Requisitos</router-link></li>
            <li><router-link to="/orientadores">Orientadores</router-link></li>
            <li><router-link to="/recomendaciones">Recomendaciones</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">ADMINISTRACION Y ARANCELES ▾</span>
          <ul class="dropdown">
            <li><router-link to="/admin-pregrado">Pregrado</router-link></li>
            <li><router-link to="/admin-postgrado">Postgrado</router-link></li>
            <li><router-link to="/admin-extension">Extension universitaria</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">Evaluacion ▾</span>
          <ul class="dropdown">
            <li><router-link to="/calendario">Calendario</router-link></li>
            <li><router-link to="/diseno">subprograma de diseño</router-link></li>
            <li><router-link to="/resultados">Resultados de evaluacion</router-link></li>
          </ul>
        </div>

        <div class="nav-item">
          <span class="nav-link">servicio al estudiante ▾</span>
          <ul class="dropdown">
            <li><router-link to="/alma-mater">Alma mater</router-link></li>
            <li><router-link to="/biblioteca">Biblioteca</router-link></li>
            <li><router-link to="/fames">Fames</router-link></li>
            <li><router-link to="/becas">Becas y ayudantias</router-link></li>
          </ul>
        </div>
        
        <div class="nav-item">
          <span class="nav-link">Registro y control de estudio ▾</span>
          <ul class="dropdown">
            <li><router-link to="/rc-pregrado">Pregrado</router-link></li>
            <li><router-link to="/rc-postgrado">Postgrado</router-link></li>
            <li><router-link to="/materiales">Materiales a utilizar</router-link></li>
          </ul>
        </div>
      </nav>
      
      <button class="hamb-btn" @click="menuOpen = true">☰</button>
    </div>

    <div class="overlay" :class="{ 'active': menuOpen }" @click="menuOpen = false"></div>
    <aside class="mobile-aside" :class="{ 'active': menuOpen }">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <b>MENÚ</b>
        <button @click="menuOpen = false" style="border:none; background:none; font-size:2rem; cursor:pointer;">✕</button>
      </div>
      <router-link to="/" class="m-item" @click="menuOpen = false">INICIO</router-link>
      <div class="m-item" @click="subOpen = !subOpen">
        OFERTA ACADÉMICA {{ subOpen ? '-' : '+' }}
        <div class="m-sub" :style="{ display: subOpen ? 'block' : 'none' }">
          <router-link to="/pregrado" @click="menuOpen = false">Pregrado</router-link>
          <router-link to="/postgrado" @click="menuOpen = false">Postgrado</router-link>
        </div>
      </div>
      <router-link to="/inscripciones" class="m-item" @click="menuOpen = false">INSCRIPCIONES</router-link>
    </aside>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuOpen = ref(false);
const subOpen = ref(false);
const currentDate = ref('');

onMounted(() => {
  currentDate.value = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });
});
</script>

<style scoped>
/* Estilos mantenidos y ajustados para router-link */
.top-bar {
  background: var(--una-dark, #333); color: white; font-size: 0.75rem;
  padding: 10px 5%; display: flex; justify-content: space-between; align-items: center;
}
header { 
  background: white; border-bottom: 4px solid var(--una-blue, #003399); 
  position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
}
.nav-container { 
  display: flex; justify-content: space-between; align-items: center; 
  max-width: 1500px; margin: 0 auto; padding: 0 20px; height: 90px; 
}
.logo-box { display: flex; align-items: center; gap: 12px; text-decoration: none; }
.logo-img { height: 50px; }
.logo-txt { color: var(--una-blue, #003399); font-family: 'Montserrat', sans-serif; font-size: 0.7rem; font-weight: 700; line-height: 1.2; }
.nav-desktop { display: flex; list-style: none; gap: 5px; }
.nav-item { position: relative; }
.nav-link { 
  padding: 35px 10px; text-decoration: none; color: var(--text-main, #333); 
  font-size: 0.6rem; font-weight: 700; text-transform: uppercase; display: block;
  cursor: pointer;
}
.nav-link:hover { color: var(--una-blue, #003399); background: #f0f7ff; }
.dropdown { 
  position: absolute; top: 100%; left: 0; background: white; 
  min-width: 220px; display: none; list-style: none; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-top: 3px solid var(--una-blue, #003399); 
}
.nav-item:hover .dropdown { display: block; }
.dropdown a { 
  padding: 12px 20px; display: block; text-decoration: none; 
  color: #555; font-size: 0.75rem; border-bottom: 1px solid #eee; 
}
.dropdown a:hover { background: var(--una-blue, #003399); color: white; }
.hamb-btn { display: none; background: none; border: none; font-size: 2rem; color: var(--una-blue, #003399); cursor: pointer; }
.mobile-aside { 
  position: fixed; top: 0; right: -100%; width: 300px; height: 100vh; 
  background: white; z-index: 2001; transition: 0.4s ease; 
  box-shadow: -5px 0 15px rgba(0,0,0,0.2); overflow-y: auto; padding: 25px; 
}
.mobile-aside.active { right: 0; }
.overlay { 
  position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
  background: rgba(0,0,0,0.5); z-index: 2000; display: none; 
}
.overlay.active { display: block; }
.m-item { border-bottom: 1px solid #eee; padding: 15px 0; font-weight: 700; color: var(--una-blue, #003399); font-size: 0.9rem; cursor:pointer; text-decoration:none; display:block;}
.m-sub { display: none; padding-left: 15px; margin-top: 10px; }
.m-sub a { display: block; padding: 8px 0; text-decoration: none; color: #666; font-size: 0.85rem; }
@media (max-width: 1200px) {
  .nav-desktop { display: none; }
  .hamb-btn { display: block; }
}
</style>