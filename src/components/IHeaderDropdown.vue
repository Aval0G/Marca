<template>
  <div class="text-center" id="IHeaderDropdown">
    <v-menu :submenu="IProps.submenu" activator="parent" :location="IProps.location">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" :append-icon="IProps.icon">
          {{ IProps.title }}
        </v-btn>
      </template>

      <v-list style="background-color: rgba(20, 29, 37, 0.97); color: white">
        <v-list-item style="cursor: pointer" v-for="(item, index) in IProps.items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { VMenu, VBtn, VList, VListItem, VListItemTitle } from 'vuetify/lib/components/index.mjs'
const IProps = defineProps({
  items: Array,
  title: String,
  submenu: {
    type: Boolean,
    default: false
  },
  location: {
    type: String,
    default: 'bottom'
  },
  icon: {
    type: String,
    default: 'mdi-chevron-down'
  }
})
</script>

<style lang="sass" scoped>
#IHeaderDropdown
  .v-btn
    color: white !important
    padding: 0 10px
    text-transform: none
    font-weight: 700
    font-size: 1rem
    &:hover
      background-color: rgba(20, 29, 37, 0.97)
    :deep(.v-btn__append)
      margin:0
      padding: 0
      i::before
        font-size: 12px
        font-weight: normal
</style>
