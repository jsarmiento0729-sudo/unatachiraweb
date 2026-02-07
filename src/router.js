import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // <-- Importa Home
import Pregrado from './components/pregrado.vue';

const routes = [
  { path: '/', component: Home }, // <-- Muestra Home en la raíz
  { path: '/pregrado', component: Pregrado },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


// ... resto del código