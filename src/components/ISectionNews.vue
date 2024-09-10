<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col
            v-for="(card, index) in cards"
            :key="index"
            cols="12"
            xl="6"
            lg="6"
            md="6"
            sm="12"
          >
            <v-card class="mx-auto news-card" max-width="344">
              <v-img :src="card.src" height="200px" cover></v-img>

              <v-spacer></v-spacer>

              <v-card-subtitle> {{ card.subtitle }} </v-card-subtitle>

              <v-card-title> {{ card.title }} </v-card-title>

              <v-divider></v-divider>

              <v-card-text> {{ card.text }} </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4">
        <v-card max-width="400" class="mx-auto sidebar-card">
          <v-card-title>Lo Más de Marca México</v-card-title>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="(item, index) in sidebarItems"
              :key="index"
              :class="{'highlighted': index === 0 }"
            >
              <v-list-item-title> {{ index + 1 }}. {{ item.title }} </v-list-item-title>
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
  VListItemTitle,
  VSpacer,
} from 'vuetify/components';

defineProps({
  cards: Array,
  sidebarItems: Array,
});
</script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'
@import '@/assets/_fonts.sass'

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
  color: $main-red
  margin-top: 10px

.sidebar-card
  background-color: #f5f5f5
  padding: 20px

.v-list-item
  font-size: 16px
  font-weight: normal

.highlighted
  font-weight: bold
  color: $main-red

</style>
