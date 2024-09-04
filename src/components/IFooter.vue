<template>
  <footer class="footer">
    <p class="bold">
      © Septiembre 2024 Unidad Editorial Información Deportiva, S.L.U. Todos los derechos
      reservados.
    </p>
    <ul class="enlaces">
      <li><a href="https://www.marca.com/mx/cookies.html">Política de cookies</a></li>
      <li>
        <a href="https://www.marca.com/mx/corporativo/politica-privacidad.html"
          >Política de privacidad</a
        >
      </li>
      <li>
        <a href="https://www.marca.com/mx/corporativo/terminos-condiciones-uso.html"
          >Términos y condiciones de uso</a
        >
      </li>
      <a href="https://www.ojd.es/" title="Abrir en ventana nueva" target="_blank"
        >Certificado por OJD</a
      >
      <li><a href="https://www.marca.com/mx/corporativo/contacto.html">Contacto</a></li>
    </ul>
    <div class="redes-sociales">
      <p class="bold">Síguenos en</p>
      <a href=""><img src="../assets/icons/facebook.png" alt="Facebook" /></a>
      <a href="#"><img src="../assets/icons/X.png" alt="Twitter" /></a>
      <a href="#"><img src="../assets/icons/instagram.png" alt="Instagram" /></a>
      <a href="#"><img src="../assets/icons/tik-tok.png" alt="TikTok" /></a>
      <a href="#"><img src="../assets/icons/youtube.png" alt="YouTube" /></a>
      <a href="#"><img src="../assets/icons/rss.png" alt="Rss" /></a>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'

.footer
    text-align: center
    padding: 20px
    background-color: $gray-100

.enlaces li
    display: inline-block
    margin: 0 15px
    font-size: 14px

.bold
    font-weight: bold !important

.redes-sociales
    margin-top: 20px

.redes-sociales p
    margin-bottom: 10px

.redes-sociales a
    display: inline-block
    margin: 0 10px

.redes-sociales img 
    width: 30px
    height: 30px
    border-radius: 50%

</style>
