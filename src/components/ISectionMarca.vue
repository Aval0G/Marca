<template>
  <v-container>
    <h1 class="title">Lo Más Marca de Mexico</h1>
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="main-news-card">
          <v-img
            src="https://phantom-marca-mx.unidadeditorial.es/b8169681a4bb73268bc4b652357c4816/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17259175735391.jpg"
            height="500px"
            cover
          ></v-img>
          <v-card-subtitle class="main-news-category"> NFL </v-card-subtitle>
          <v-card-title class="main-news-title">
            Los compañeros de Dak Prescott hacen una sorprendente exigencia tras su nuevo contrato
            de 240 millones de dólares
          </v-card-title>
          <v-card-text class="main-news-author"> Eduardo Avila </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <v-card class="secondary-news-card">
              <v-img
                src="https://phantom-marca-mx.unidadeditorial.es/d50534e437b4fa25a7e2f2991aa0ffb7/resize/235/f/webp/mx/assets/multimedia/imagenes/2024/09/09/17259067048662.jpg"
                height="140px"
                cover
              ></v-img>
              <v-card-subtitle class="secondary-news-category"> Actualidad </v-card-subtitle>
              <v-card-title class="secondary-news-title">
                Claudia Sheinbaum confirma: "Voy a vivir en Palacio Nacional, es la nota de hoy";
                ¿cuándo desaloja AMLO?
              </v-card-title>
              <v-card-text class="secondary-news-author"> LW </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="secondary-news-card">
              <v-img
                src="https://phantom-marca-mx.unidadeditorial.es/f596a0f5eda7bb588bc824619b4ff345/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/06/18/17186644052299.jpg"
                height="140px"
                cover
              ></v-img>
              <v-card-subtitle class="secondary-news-category"> Futbol </v-card-subtitle>
              <v-card-title class="secondary-news-title">
                Resultados Progol 2245: premios y quiniela ganadora del fin de semana
              </v-card-title>
              <v-card-text class="secondary-news-author"> LW </v-card-text>
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
