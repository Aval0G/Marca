<template>
  <div>
    <CardComponent :cards="cards" />
  </div>
</template>

<script setup>
import CardComponent from './ISectionSingleCard.vue'

// Datos de las cartas
const cards = [
  {
    title: 'Ahora America Padecio, Tigres evitó negociaciones con Luis Quiñonez',
    src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    subtitle: 'Liga Mx',
    text: 'Abigail Parra'
  },
  {
    title: 'Mexico pierde ante españa en la final de la copa del mundo',
    src: './assets/images/sunshine.jpg',
    subtitle: 'Futbol',
    text: 'Pedro Sanchez'
  },
  {
    title: 'El nuevo fichaje del Real Madrid',
    src: './assets/images/sunshine.jpg',
    subtitle: 'Futbol',
    text: 'Juan Antonio'
  },
  {
    title: 'El nuevo fichaje del Barcelona',
    src: './assets/images/sunshine.jpg',
    subtitle: 'Futbol',
    text: 'Juan Antonio'
  }
]
</script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'
@import '@/assets/_fonts.sass'
</style>
