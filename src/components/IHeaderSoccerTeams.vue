<template>
  <div id="soccerTeams">
    <div class="team-container" v-for="i in 20" :key="i">
      <img :src="getImageSrc(i)" :alt="'logo equipo futbol ' + i" />
    </div>
  </div>
</template>

<script setup>
const getImageSrc = (i) => {
  return new URL(`../assets/images/f${i}.png`, import.meta.url).href
}
</script>

<style lang="sass" scoped>
@import '../assets/_mixins.sass'

#soccerTeams
  display: flex
  background-color: #eceff4
  padding: 10px 0
  justify-content: center
  align-items: center
  gap: 10px
  flex-wrap: wrap
  box-shadow: 0px 7px 5px 0px rgba(201,201,201,1)
  .team-container
    width: 30px
    height: 30px
    opacity: 0
    cursor: pointer
    animation: fadeIn 0.8s ease forwards
    transition: all 0.3s
    &:hover
        filter: drop-shadow(0 0 0.5rem #4e4e4e)
    img
      width: 100%
      height: 100%
      object-fit: contain

// Animación sutil de fade-in
@keyframes fadeIn
  from
    opacity: 0
    transform: translateY(10px)
  to
    opacity: 1
    transform: translateY(0)

@include max-laptop()
    #soccerTeams
        display: none
</style>
