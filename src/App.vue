<template>
  <div id="app">
    <Header/>
    <router-view /> <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
// Slider y News ya no van aquí
import Footer from './components/Footer.vue';
</script>


<style>                
* { 
  margin: 0;                
  padding: 0;                
  box-sizing: border-box;                
}

html, body {
  width: 100%;
  overflow-x: hidden; /* <--- ESTO ES LO QUE ELIMINA EL ESPACIO BLANCO */
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;                
  margin: 0;                
  padding: 0;
  overflow-x: hidden; /* <--- Aplícalo aquí mejor */                
}
</style>