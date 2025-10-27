<template>
  <nav class="menu">
    <section class="menu__container">
      <div class="menu__logo">
        <img :src="logo" alt="Logo UNA Táchira"  />
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
              <a href="#" class="menu__link menu__link--inside">{{ sub.label }}</a>
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
import logo from '../assets/logo.png'
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
    label: 'CL TÁCHIRA',
    submenu: [
      { label: 'QUIÉNES SOMOS' },
      { label: 'HISTORIA' },
      { label: 'AUTORIDADES' },
      { label: 'ESTRUCTURA' },
    ],
  },
  { label: 'ÁREAS ACADÉMICAS', href: '/' },
  {
    label: 'ESTUDIOS',
    submenu: [
      { label: 'PREGRADO' },
      { label: 'POSGRADO' },
      { label: 'EXTENSIÓN UNIVERSITARIA' },
      { label: 'REPORTE DE NOTAS' },
    ],
  },
  {
    label: 'INSCRIPCIONES',
    submenu: [
      { label: 'PREGRADO' },
      { label: 'POSGRADO' },
      { label: 'EXTENSIÓN UNIVERSITARIA' },
    ],
  },
  { label: 'NOTICIAS', href: '/' },
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
  z-index: 1000;
  background-color: #fff;
  color: #1A4C8B;
  height: 70px;
  border-bottom: 1px solid #d0d0d0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.menu__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.menu__logo {
  display: flex;
  align-items: center;
  height: 80%;
  
}

.menu__logo img {
height:3.5em;
  width: 15em;
  margin-top: -20px;
  border-radius: 5px;

 
}

.menu__links {
  height: 100%;
  transition: transform 0.5s;
  display: flex;
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
  color: #1A4C8B;
  text-decoration: none;
  padding: 0 30px;
  display: flex;
  height: 100%;
  align-items: center;
  background-color: #fff;
}

.menu__link:hover {
  background-color: #e6f0ff;
  color: #2C6CC9;
}

.menu__arrow {
  transform: var(--transform);
  transition: transform 0.3s;
  display: block;
  margin-left: 3px;
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
  background-color: #f9f9f9;
}

.menu__link--inside {
  padding: 30px 100px 30px 20px;
  color: #1A4C8B;
  background-color: #fff;
}

.menu__link--inside:hover {
  background-color: #e6f0ff;
  color: #2C6CC9;
}

.menu__hamburguer {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  display: none;
}

.menu__hamburguer img {
  width: 40px;
  height: auto;
}

@media (max-width: 800px) {
  .menu__hamburguer {
    display: flex;
  }

  .menu__item {
    --clip: 0;
    overflow: hidden;
  }

  .menu__item--active {
    --transform: rotate(0);
    --background: #1A4C8B;
  }

  .menu__item--show {
    background-color: var(--background);
  }

  .menu__links {
    position: fixed;
    max-width: 400px;
    width: 100%;
    top: 70px;
    bottom: 0;
    right: 0;
    background-color: #fff;
    overflow-y: auto;
    display: grid;
    grid-auto-rows: max-content;
    transform: translateX(100%);
  }

  .menu__links--show {
    transform: unset;
    width: 100%;
  }

  .menu__link {
    padding: 25px 0;
    padding-left: 30px;
    height: auto;
    color: #1A4C8B;
    background-color: #fff;
  }

  .menu__arrow {
    margin-left: auto;
    margin-right: 20px;
  }

  .menu__nesting {
    display: grid;
    position: unset;
    width: 100%;
    transform: translateY(0);
    height: 0;
    transition: height 0.3s;
  }

  .menu__link--inside {
    width: 90%;
    margin-left: auto;
    border-left: 1px solid #1A4C8B;
    color: #1A4C8B;
    background-color: #fff;
  }

  .menu__link--inside:hover {
    background-color: #e6f0ff;
    color: #2C6CC9;
  }
}
</style>