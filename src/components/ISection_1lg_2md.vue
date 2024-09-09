<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-card class="mx-auto" max-width="800">
          <v-img src="../assets/icons/facebook.png" height="200px" cover></v-img>

          <v-spacer></v-spacer>

          <v-card-subtitle> Hola </v-card-subtitle>

          <v-card-title> Hola</v-card-title>

          <v-divider></v-divider>

          <v-card-text> Hola </v-card-text>
        </v-card>
      </v-col>  
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img src="../assets/icons/facebook.png" height="200px" cover></v-img>

          <v-spacer></v-spacer>

          <v-card-subtitle> Hola </v-card-subtitle>

          <v-card-title> Hola</v-card-title>

          <v-divider></v-divider>

          <v-card-text> Hola </v-card-text>
        </v-card>

        <v-card class="mx-auto" max-width="344">
          <v-img src="../assets/icons/facebook.png" height="200px" cover></v-img>

          <v-spacer></v-spacer>

          <v-card-subtitle> Hola </v-card-subtitle>

          <v-card-title> Hola</v-card-title>

          <v-divider></v-divider>

          <v-card-text> Hola </v-card-text>
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
