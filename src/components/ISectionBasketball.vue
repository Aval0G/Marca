<template>
  <v-container>
    <h1 class="title">Baloncesto</h1>
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="main-news-card c-pointer">
          <v-img
            src="https://phantom-marca-mx.unidadeditorial.es/6fdbd2209edfb2ac9bd855ad242ee502/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/08/17257491959208.jpg"
            height="500px"
            cover
          ></v-img>
          <v-card-subtitle class="main-news-category"> NBA </v-card-subtitle>
          <v-card-title class="main-news-title">
            Los Angeles Lakers se reúnen con Peso Pluma y sorprenden haciéndole un regalo muy
            especial
          </v-card-title>
          <v-card-text class="main-news-author"> LW </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <v-card class="secondary-news-card c-pointer">
              <v-img
                src="https://phantom-marca-mx.unidadeditorial.es/6c119c45d1db5ae8176f71a618f4bf5b/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/07/17256851313719.jpg"
                height="140px"
                cover
              ></v-img>
              <v-card-subtitle class="secondary-news-category"> NBA </v-card-subtitle>
              <v-card-title class="secondary-news-title">
                ¡Como todo un crack! Vinicius Jr tiene la más increíble colección de jerseys de la
                NBA
              </v-card-title>
              <v-card-text class="secondary-news-author"> LW </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="secondary-news-card c-pointer">
              <v-img
                src="https://phantom-marca-mx.unidadeditorial.es/5d802af970f3ac1fe11614cf72470e7d/resize/208/f/webp/mx/assets/multimedia/imagenes/2024/09/06/17256184602162.jpg"
                height="140px"
                cover
              ></v-img>
              <v-card-subtitle class="secondary-news-category"> NBA </v-card-subtitle>
              <v-card-title class="secondary-news-title">
                LeBron James defiende a su hijo Bronny de los haters: "¡Sigue así, que se joda todo
                el odio y el ruido!"
              </v-card-title>
              <v-card-text class="secondary-news-author"> JOSÉ LUIS MARTÍNEZ </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
  VContainer,
  VRow,
  VCol
} from 'vuetify/components'
</script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'
@import '@/assets/_fonts.sass'

.title
  font-size: 24px
  font-weight: bold
  color: $main-red-dark
  overflow: none
  white-space: normal
  padding-bottom: 20px

.main-news-card
  transition: transform 0.3s ease, box-shadow 0.3s ease
  &:hover
    transform: scale(1.02)
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)

.main-news-title
  font-size: 24px
  font-weight: bold
  color: #333
  overflow: none
  white-space: normal

.main-news-category
  font-size: 14px
  font-weight: bold
  color: white
  background-color: $main-red

.main-news-author
  font-size: 12px
  color: #888

.secondary-news-container
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 100%

.secondary-news-card
  transition: transform 0.3s ease, box-shadow 0.3s ease
  &:hover
    transform: scale(1.05)
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)

.secondary-news-title
  font-size: 16px
  font-weight: 500
  color: #333
  overflow: none
  white-space: normal

.secondary-news-category
  font-size: 12px
  font-weight: bold
  color: white
  background-color: $main-red

.secondary-news-author
  font-size: 12px
  color: #888
</style>
