<template>
  <v-container class="section-container">
    <v-row>
      <v-col cols="12" lg="8" order-md="1" order-1>
        <v-row>
          <v-col v-for="(card, index) in cards" :key="index" cols="12" xl="4" lg="4" md="6" sm="6">
            <v-card class="mx-auto news-card c-pointer" max-width="344">
              <v-img :src="card.src" height="200px" cover></v-img>
              <v-card-subtitle> {{ card.subtitle }} </v-card-subtitle>
              <v-card-title> {{ card.title }} </v-card-title>
              <v-divider></v-divider>
              <v-card-text> {{ card.text }} </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" lg="4" order-md="2" order-2>
        <v-card max-width="400" class="mx-auto sidebar-card">
          <v-card-title class="sidebar-title">Lo Más de Marca México</v-card-title>
          <v-divider></v-divider>
          <v-row class="sidebar-tabs">
            <v-col class="active-tab">Leído</v-col>
            <v-col>Último</v-col>
          </v-row>
          <v-list class="sidebar-list">
            <v-list-item
              v-for="(item, index) in sidebarItems"
              :key="index"
              class="sidebar-list-item"
            >
              <v-list-item-content class="list-content c-pointer">
                <div class="item-index">{{ index + 1 }}</div>
                <v-list-item-title class="item-title">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VImg,
  VDivider,
  VContainer,
  VRow,
  VCol,
  VList,
  VListItem,
  VListItemTitle
} from 'vuetify/components'

defineProps({
  cards: Array,
  sidebarItems: Array
})
</script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'
@import '@/assets/_fonts.sass'

.section-container
  padding: 50px

.news-card
  transition: transform 0.3s ease, box-shadow 0.3s ease
  &:hover
    transform: scale(1.05)
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)

.v-card-title
  font-size: 20px
  font-weight: 500
  margin-top: 10px
  display: flex
  text-overflow: none
  white-space: normal

.v-card-subtitle
  font-size: 15px
  font-weight: bold
  color: white
  background-color: $main-red

.sidebar-card
  background-color: #f5f5f5
  padding: 20px
  display: flex
  flex-direction: column

.sidebar-title
  font-size: 18px
  font-weight: bold
  color: white
  background-color: darken($main-red, 10%) // Usa un rojo más oscuro
  padding: 10px

.sidebar-tabs
  display: flex
  justify-content: space-between
  margin: 10px 0

.active-tab
  font-weight: bold
  color: $main-red
  border-bottom: 2px solid $main-red

.sidebar-list
  margin-top: 10px

.sidebar-list-item
  display: flex
  align-items: center
  padding: 10px 0
  border-bottom: 1px solid #ddd

.list-content
  display: flex
  align-items: center
  &:hover
    color: $main-red

.item-index
  width: 30px
  height: 30px
  background-color: $main-red
  color: white
  display: flex
  align-items: center
  justify-content: center
  border-radius: 50%
  margin-right: 10px
  font-weight: bold
  flex-shrink: 0

.item-title
  font-size: 14px
  line-height: 1.2
  white-space: normal
  overflow: hidden
  text-overflow: ellipsis
</style>
