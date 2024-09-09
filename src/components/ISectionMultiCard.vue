<template>
  <v-container fluid>
    <v-row justify-center align-center>
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="12"
        xl="3"
        lg="3"
        md="4"
        sm="6"
        xs="12"
      >
        <v-card class="mx-auto" max-width="344">
          <v-img :src="card.src" height="200px" cover></v-img>

          <v-spacer></v-spacer>

          <v-card-subtitle> {{ card.subtitle }} </v-card-subtitle>

          <v-card-title> {{ card.title }} </v-card-title>

          <v-divider></v-divider>

          <v-card-text> {{ card.text }} </v-card-text>
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
  VCol
} from 'vuetify/components'

// Definir las propiedades con defineProps directamente
defineProps({
  cards: Array
})
</script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'
@import '@/assets/_fonts.sass'

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
</style>
