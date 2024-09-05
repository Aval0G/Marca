<template>
  <header id="principalHeader">
    <IHeaderNewsTop :news="news" />
  </header>
</template>

<script setup>
import { IHeaderNewsTop } from '.'
const news = [
  'Nominaciones al Balón de Oro',
  'Nuevo récord de ventas',
  'Lanzamiento de la nueva colección',
  'Entrevista exclusiva con el director',
  'Descuentos especiales por tiempo limitado',
  'Inauguración de la tienda en línea',
  'Ganadores del sorteo mensual',
  'Conferencia sobre tendencias de moda',
  'Colaboración con reconocida marca de lujo',
  'Ofertas de Black Friday'
]
</script>

<style lang="sass" scoped>
@import "@/assets/_colors.sass"
</style>
