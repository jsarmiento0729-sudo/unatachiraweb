<template>
  <div class="linea-superior"></div>
</template>

<script>
export default {
  name: 'LineaSuperior'
}
</script>

<style scoped>
.linea-superior {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 25px;
  background-color: #0033a0;
  z-index: 1000;
}
</style>