<template>
  <nav class="menu">
    <section class="menu__container">
      <div class="menu__logo">
        <!-- Aquí puedes insertar tu logo si lo deseas -->
      </div>

      <ul :class="['menu__links', { 'menu__links--show': menuVisible }]">
        <li
          v-for="item in menuItems"
          :key="item.label"
          class="menu__item"
          :class="{ 'menu__item--show': item.submenu, 'menu__item--active': activeMenu === item.label }"
        >
          <a href="#" class="menu__link" @click.prevent="toggleSubmenu(item.label)">
            {{ item.label }}
            <img v-if="item.submenu" :src="arrow" class="menu__arrow" />
          </a>

          <ul
            v-if="item.submenu"
            class="menu__nesting"
            :style="{ height: activeMenu === item.label ? submenuHeight[item.label] + 'px' : '0px' }"
            :ref="el => setSubmenuRef(item.label, el)"
          >
            <li v-for="sub in item.submenu" :key="sub.label" class="menu__inside">
              <router-link
                v-if="!sub.url.startsWith('http')"
                :to="sub.url"
                class="menu__link menu__link--inside"
              >
                {{ sub.label }}
              </router-link>
              <a
                v-else
                :href="sub.url"
                class="menu__link menu__link--inside"
                target="_blank"
                rel="noopener"
              >
                {{ sub.label }}
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="menu__hamburguer" @click="menuVisible = !menuVisible">
        <img :src="menuIcon" />
      </div>
    </section>
  </nav>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue'
import arrow from '../assets/arrow.png'
import menuIcon from '../assets/menu.png'

const menuVisible = ref(false)
const activeMenu = ref(null)
const submenuRefs = ref({})
const submenuHeight = reactive({})

function toggleSubmenu(label) {
  activeMenu.value = activeMenu.value === label ? null : label
  nextTick(() => {
    const el = submenuRefs.value[label]
    if (el) submenuHeight[label] = el.scrollHeight
  })
}

function setSubmenuRef(label, el) {
  if (el) submenuRefs.value[label] = el
}

const menuItems = [
  {
    label: 'INFORMACIÓN GENERAL',
    submenu: [
      { label: 'NOTICIAS', url: '/informacion/noticias' },
      { label: 'RECOMENDACIONES', url: '/informacion/recomendaciones' },
      { label: 'NUESTRO CENTRO LOCAL', url: '/informacion/centro-local' },
      { label: 'AUTORIDADES DEL CENTRO', url: '/informacion/autoridades' },
    ],
  },
  {
    label: 'OFERTA ACADEMICA',
    submenu: [
      { label: 'Asesores por Carrera / Contactos (Pregrado)', url: '/oferta/asesores' },
      { label: 'Subprograma Diseño Académico', url: 'https://subprogramadisenoacademicouna826543778.wordpress.com/acerca-de/' },
      { label: 'Curso Introducción - Servicios al Estudiante', url: '/oferta/introduccion-servicios' },
    ],
  },
  {
    label: 'Gestión Estudiantil',
    submenu: [
      { label: 'Servicio Comunitario', url: '/gestion/servicio-comunitario' },
      { label: 'Cronograma Evaluaciones 2023-2', url: '/gestion/cronograma-2023-2' },
      { label: 'Reporte de Notas', url: 'http://www.fichauna.com.ve/?i=1' },
      { label: 'Registro y Control Estudiantil', url: '/gestion/registro-control' },
    ],
  },
  {
    label: 'Investigación y Postgrado',
    submenu: [
      { label: 'Investigaciones y Postgrado', url: '/investigacion/postgrado' },
    ],
  },
  {
    label: 'Administración',
    submenu: [
      { label: 'Administración y Aranceles', url: '/administracion/aranceles' },
      { label: 'Página UNASEC', url: 'http://www.unasec.com/' },
    ],
  },
  {
    label: 'Extensión y Graduación',
    submenu: [
      { label: 'Extensión Universitaria', url: '/extension/universitaria' },
      { label: 'Graduandos Táchira', url: '/extension/graduandos' },
    ],
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background-color: #1A4C8B;
  color: #fff;
  height: 60px;
  border-bottom: 1px solid #d0d0d0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
 top:11em;
}

.menu__container {
  display: flex;
  justify-content:right;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.menu__logo {
  display: flex;
  align-items:flex-start;
  height: 50%;
  margin-left: -2.8em;
}

.menu__logo img {
height:3.5em;
  width: 12em;
  margin-top: -10px;
  border-radius: 5px;

 
}

.menu__links {
  height: 100%;
  transition: transform 0.5s;
  display: flex;
}
.menu__link .a{
  font-size: 10px;
}

.menu__item {
  list-style: none;
  position: relative;
  height: 100%;
  --clip: polygon(0 0, 100% 0, 100% 0, 0 0);
  --transform: rotate(-90deg);
}

.menu__item:hover {
  --clip: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  --transform: rotate(0);
}

.menu__link {
  color: #fff;
  text-decoration: none;
  padding: 0 5px;
  display: flex;
  height: 100%;
  align-items: center;
  background-color:#1A4C8B;
}

.menu__link:hover {
  background-color:#2C6CC9 ;
  color:#e6f0ff ;
}

.menu__arrow {
  transform: var(--transform);
  transition: transform 0.3s;
  display: block;
  margin-left: 1px;
}

.menu__nesting {
  list-style: none;
  transition: clip-path 0.3s;
  clip-path: var(--clip);
  position: absolute;
  right: 0;
  bottom: 0;
  width: max-content;
  transform: translateY(100%);
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  background-color: #1A4C8B;
}

.menu__link--inside {
  padding: 20px 10px 20px 20px;
  color: #fff;
  background-color: #1A4C8B;
  font-size: 14px;
}

.menu__link--inside:hover {
  background-color: #2C6CC9;
  color:#e6f0ff ;
}

.menu__hamburguer {
  height: 50%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  display: none;
}

.menu__hamburguer img {
  width: 25px;
  height: auto;
}
@media (max-width: 1072px) {
  .menu__hamburguer {
    display: flex;
  }

  .menu__links {
    position: fixed;
    top: 14.5em;
    right: 0;
    width: 100%;
    max-width: 400px;
    background-color: #1A4C8B;
    overflow-y: auto;
    display: grid;
    grid-auto-rows: max-content;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .menu__links--show {
    transform: translateX(0);
  }

  .menu__item {
    overflow: hidden;
  }

  .menu__nesting {
    display: grid;
    position: unset;
    width: 100%;
    transform: translateY(0);
    height: 0;
    transition: height 0.3s;
  }

  .menu__link {
    padding: 10px 0;
    padding-left: 40px;
    height: auto;
    font-size: 14px;
  }

  .menu__arrow {
    margin-left: auto;
    margin-right: 20px;
  }
}
</style>