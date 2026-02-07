<template>
  <footer class="ucat-footer">
    <div class="f-grid">
      <div class="f-col"><h4>UNIVERSIDAD</h4><ul><li><a href="#">Rectorado</a></li><li><a href="#">Secretaría</a></li></ul></div>
      <div class="f-col"><h4>SERVICIOS</h4><ul><li><a href="#">Moodle</a></li><li><a href="#">Biblioteca</a></li></ul></div>
      <div class="f-col"><h4>SISTEMAS</h4><ul><li><a href="#">Inscripción</a></li><li><a href="#">Grados</a></li></ul></div>
      <div class="f-col">
        <h4>CONTACTO</h4>
        <p>📍 San Cristóbal, Táchira</p>
        <p>📞 0276-353.04.22</p>
      </div>
    </div>
    <div class="f-bottom">© 2026 UNA Táchira | RIF: G-20000064-2</div>
  </footer>
</template>

<style scoped>
.ucat-footer { background: var(--una-dark); color: white; padding: 60px 5% 20px; }
.f-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; max-width: 1400px; margin: 0 auto; }
.f-col h4 { border-bottom: 3px solid var(--una-blue); display: inline-block; margin-bottom: 20px; font-family: 'Montserrat'; }
.f-col ul { list-style: none; }
.f-col a { color: #aaa; text-decoration: none; font-size: 0.85rem; }
.f-bottom { border-top: 1px solid #222; margin-top: 40px; padding-top: 20px; text-align: center; font-size: 0.8rem; color: #777; }
</style>