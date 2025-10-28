<template>
  <section class="banner">
    <img
      src="../assets/flyer.png"
      alt="Universidad Nacional Abierta"
      class="banner-image"
    />

    <a href="/src/assets/LOCAL.jpg.png"></a>
  </section>
</template>

<script>
</script>
<style scoped>

:global(html), :global(body), :global(#app) {
  margin: 0;
  padding: 0;
  height: 100%;
}

.banner {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(236, 234, 234); /* fondo blanco institucional */
}

.banner-image {
 margin-top: 18em;
  width: 60%;
  height: 400px;

border-radius: 2em;
  display: block;
}
</style>
