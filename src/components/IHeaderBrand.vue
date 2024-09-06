<template>
  <section id="IHeaderBrand">
    <div class="brands">
      <div class="brand">
        <img src="../assets/images/logo_radio.png" alt="logo radio" />
        <p>Radio MARCA</p>
      </div>
      <div class="brand">
        <img src="../assets/images/logo_cuidate.png" alt="logo cuidatePLUS" />
        <p>CuídatePLUS</p>
      </div>
      <div class="brand">
        <img src="../assets/images/logo_la_liga.png" alt="logo la liga" />
        <p>La Liga</p>
      </div>
    </div>

    <div class="main-brand">
      <img src="../assets/images/logo_marca.png" alt="logo MARCA" />
    </div>

    <div class="action-buttons">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            density="comfortable"
            append-icon="$vuetify"
            rounded="lg"
            variant="outlined"
            v-bind="props"
          >
            MX
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <VListSubheader>Ediciones</VListSubheader>
            <v-list-item v-for="(lang, index) in languages" :key="index">
              <v-list-item-title>{{ lang.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-btn density="comfortable" rounded="lg" variant="tonal"> Iniciar sesión </v-btn>
    </div>
  </section>
</template>

<script setup>
import {
  VMenu,
  VList,
  VListItem,
  VListItemTitle,
  VListSubheader,
  VBtn,
  VCard
} from 'vuetify/lib/components/index.mjs'

const languages = [
  {
    title: 'Es (España)'
  },
  {
    title: 'En (English)'
  },
  {
    title: 'MX (México)'
  },
  {
    title: 'US (USA)'
  }
]
</script>

<style lang="sass" scoped>
@import '../assets/_colors'
@media screen and (max-width:768px)
  #IHeaderBrand
    display: none !important
#IHeaderBrand
  display: flex
  padding: 10px
  justify-content: space-between
  .brands
    display: flex
    font-size: 12px
    font-weight: bold
    width: 33.33%
    justify-content: center
    .brand
      margin-right: 10px
      display: flex
      align-items: center
      gap: 6px
      padding-right: 10px
      border-right: 1px solid #e2e2e2
      cursor: pointer
      &:nth-last-child(1)
        border-right: none
      &:hover
        color: $main-red
      img
        width: 35px
        height: 35px
        border-radius: 100%
        object-fit: cover
      @media screen and (max-width: 1060px)
        p
          display: none
  .main-brand
    display: flex
    width: 33.33%
    justify-content: center
    img
      cursor: pointer
      width: auto
      height: 50px
      object-fit: cover
  .action-buttons
    width: 33.33%
    display: flex
    justify-content: center
    align-items: center
    gap: 10px
    .v-btn
      color:$main-red-dark
      :deep(.v-btn__content)
        z-index: 9999
      :deep(.v-btn__overlay)
        color: white
      &:last-of-type
        border: 1px solid $main-red-dark
:deep(.v-list-item--one-line)
  cursor: pointer
  transition: background-color 0.3s
  &:hover
    background-color:$main-red
    color: white
</style>
