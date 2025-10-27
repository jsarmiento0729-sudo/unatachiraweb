<template>
  
  <nav class="navbar">
    <!-- Logo institucional elevado y fuera del menú -->
    <div class="logo-floating">
      <router-link to="/">
        <img :src="logo" alt="Logo UNA Táchira" class="logo-img" />
      </router-link>
    </div>

    <div class="navbar-content">
   

      <!-- Menú centrado -->
      <div class="menu-wrapper">
        <ul class="nav-links">
          <li class="nav-item">
            <router-link to="/">INICIO</router-link>
          </li>

          <li class="nav-item dropdown">
            <button class="dropdown-toggle">UNIVERSIDAD ˅</button>
            <ul class="dropdown-menu">
              <li><router-link to="/centro-local">Nuestro Centro Local</router-link></li>
              <li><router-link to="/autoridades">Autoridades</router-link></li>
              <li><router-link to="/diseno-academico">Diseño Académico</router-link></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <button class="dropdown-toggle">INSCRIPCIÓN ˅</button>
            <ul class="dropdown-menu">
              <li><router-link to="/introduccion">Curso Introducción</router-link></li>
              <li><router-link to="/asesores">Asesores por Carrera</router-link></li>
              <li><router-link to="/registro">Registro y Control</router-link></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <button class="dropdown-toggle">PREGRADO ˅</button>
            <ul class="dropdown-menu">
              <li><router-link to="/cronograma">Cronograma Evaluaciones</router-link></li>
              <li><router-link to="/notas">Reporte de Notas</router-link></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <button class="dropdown-toggle">POSTGRADO ˅</button>
            <ul class="dropdown-menu">
              <li><router-link to="/postgrado">Investigaciones</router-link></li>
              <li><router-link to="/graduandos">Graduandos Táchira</router-link></li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link to="/campus">CAMPUS</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/acceder">ACCEDER</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '../assets/logo.png'
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #003366;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;}

.logo-floating {
  position: absolute;
  top: -20px;
  left: 2rem;
  z-index: 1100;
}

.logo-img {
  height: 200px;
  width: auto;
  border-radius: 2.5;
}

.menu-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
}

.nav-item > a,
.nav-item > button {
  background: none;
  border: none;
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
  font-size: 1rem;
}

.nav-item > a:hover,
.nav-item > button:hover {
  background-color: #005599;
  border-radius: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #003366;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  display: none;
  flex-direction: column;
  min-width: 220px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu a {
  padding: 0.5rem 1rem;
  display: block;
  color: white;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background-color: #005599;
}
</style>