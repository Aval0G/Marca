<template>
  <v-app-bar :elevation="0" id="INavBar" :class="scrollDownBG" scroll-behavior="elevate">
    <IHeaderMultiDropdown v-if="!isScrollingDown" class="NavBarMultiDropdown" />
    <div class="navbar-content" :class="centered">
      <div class="logo-container" v-if="isScrollingDown">
        <img
          class="logo-image"
          src="../assets/images/logo-marca-letra.png"
          alt="logo marca letra"
        />
      </div>
      <p v-if="isScrollingDown" class="marca-title">Marca</p>
      <div class="dropdowns" v-if="!isScrollingDown">
        <IHeaderDropdown
          v-for="(items, index) in DROPDOWN_ITEMS_ARRAY"
          :key="index"
          :items="items.items"
          :title="items.title"
          class="dropdown"
        />
        <div class="red-links">
          <a href="#">Última hora</a>
          <a href="#">Fantasy</a>
          <a href="#">Agenda TV</a>
        </div>
        <p class="mas-title">Más+</p>
      </div>
    </div>
  </v-app-bar>
  <IScrollBar />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { VAppBar } from 'vuetify/lib/components/index.mjs'
import { IScrollBar, IHeaderDropdown, IHeaderMultiDropdown } from '.'
import { DROPDOWN_ITEMS_ARRAY } from '../constants/exampleItems.js'

// Variable reactiva para detectar si estás desplazando hacia abajo
const isScrollingDown = ref(false)
let lastScrollPosition = 0
let navbarOffsetTop = 0

const handleScroll = () => {
  const currentScrollPosition = window.scrollY
  // Verificar si ya llegaste a la parte superior de la navbar
  const hasReachedTop = currentScrollPosition > navbarOffsetTop
  isScrollingDown.value = currentScrollPosition > lastScrollPosition && hasReachedTop
  lastScrollPosition = currentScrollPosition
}

// Agregamos el event listener al montarse el componente
onMounted(() => {
  const navbar = document.getElementById('INavBar')
  navbarOffsetTop = navbar.offsetTop // Obtener la posición de la navbar
  window.addEventListener('scroll', handleScroll)
})

// Removemos el event listener al desmontarse el componente
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollDownBG = computed(() => (isScrollingDown.value ? 'scrolling-down' : ''))
const centered = computed(() => (isScrollingDown.value ? '' : 'centered'))
</script>

<style lang="sass" scoped>
@import '../assets/_colors.sass'
@import '../assets/_fonts.sass'
@import '../assets/_mixins.sass'
#INavBar
    position: sticky !important
    background-color: $main-red
    color: white
    height: 44px
    &.scrolling-down
        background-color: white
    :deep(.v-toolbar__content)
      height: 44px !important
    :deep(.navbar-content)
      &.centered
        justify-content: center
      display: flex
      height: 100%
      width: 100%
      .dropdowns
        display: flex
        align-items: center
        justify-content: center
        .dropdown
          height: 100%
          .v-btn
            height: 100%
            border-radius: 0
        .red-links
          display: flex
          align-items: center
          padding: 0 25px
          gap: 20px
          height: 100%
          background-color: $main-red-dark
          clip-path: polygon(2% 0, 100% 0, 98% 100%, 0% 100%)
          a
            position: relative
            font-weight: normal
            font-size: 14px
            &:hover
              text-decoration: underline
            &::after
              position: absolute
              content: ''
              width: 1px
              height: 12px
              background-color: $main-red
              right: -12px
              top: 50%
              transform: translateY(-50%) rotate(15deg)
            &:last-child
              &::after
                display: none
        @include max-laptop()
          .red-links
            display: none
        .mas-title
          margin-left: 1rem
          font-weight: 700
          font-size: 18px
          cursor: pointer
          &:hover
            color: $gray-red-50
      .logo-container
        max-height: 100%
        width: 64px
        background-color: $main-red
        display: flex
        justify-content: center
        align-items: center
        clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%)
        margin-left: 1.5rem
        .logo-image
          height: 60%
      .marca-title
        margin-top: 0.2rem
        margin-left: 1rem
        font-size: 1.5rem
        font-weight: 700
        color: $main-gray-dark
    @include min-tablet()
      .NavBarMultiDropdown
        display: none
    @include max-tablet()
      :deep(.navbar-content) .dropdowns
        display: none
</style>
