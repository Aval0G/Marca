<template>
  <div class="text-center" id="IHeaderMultiDropdown">
    <v-menu activator="parent">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" icon="mdi-menu" />
        <span>MARCA</span>
      </template>
      <v-list
        style="background-color: rgba(20, 29, 37, 0.97); color: white"
        id="IHeaderMultiDropdownList"
      >
        <v-list-item
          style="cursor: pointer"
          v-for="(item, index) in DROPDOWN_ITEMS_ARRAY"
          :key="index"
        >
          <IHeaderDropdown
            location="end"
            :submenu="true"
            :items="item.items"
            :title="item.title"
            icon="mdi-chevron-right"
          />
        </v-list-item>

        <v-list-item>
          <IHeaderDropdown
            location="end"
            :submenu="true"
            :items="languages"
            title="MX"
            icon="mdi-chevron-right"
          />
        </v-list-item>
        <v-list-item>
          <v-btn id="redbtndropdown" color="primary"> Suscríbete </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn id="redstrongbtndropdown" color="primary"> Iniciar Sesión </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { VMenu, VBtn, VList, VListItem } from 'vuetify/lib/components/index.mjs'
import { IHeaderDropdown } from '.'
import { DROPDOWN_ITEMS_ARRAY } from '../constants/exampleItems.js'

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
#IHeaderMultiDropdown
  display: flex
  align-items: center
  .v-btn
    color: white !important
    padding: 0 10px
    text-transform: none
    font-weight: 700
    font-size: 1rem
    margin-left: 1rem
    border-radius: 0
    &:hover
      background-color: rgba(20, 29, 37, 0.97)
    :deep(.v-btn__append)
      margin:0
      padding: 0
      i::before
        font-size: 12px
        font-weight: normal
</style>

<style lang="sass">
#IHeaderMultiDropdownList
    .v-list-item
        padding: 0
        #IHeaderDropdown
            .v-btn
                background-color: transparent !important
                width: 100%
                border-radius: 0 !important
</style>
