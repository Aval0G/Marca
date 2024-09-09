<template>
  <div id="progressBarContainer">
    <div id="progressBar"></div>
  </div>
</template>

<script setup>
window.onscroll = function () {
  updateProgressBar()
}

function updateProgressBar() {
  // Altura total del contenido
  var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  // Distancia recorrida en píxeles desde el tope
  var scrollDistance = document.documentElement.scrollTop

  // Calcular porcentaje de la página recorrida
  var progress = (scrollDistance / totalHeight) * 100

  // Actualizar ancho de la barra
  document.getElementById('progressBar').style.width = progress + '%'
}
</script>

<style lang="sass" scoped>
@import '../assets/_colors.sass'

#progressBarContainer
  position: sticky
  width: 100%
  height: 2px
  background-color: transparent
  top: 44px
  left: 0
  z-index: 9999


#progressBar
  height: 100%
  width: 0
  background-color: $main-red
</style>
