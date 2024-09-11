<template>
  <v-container>
    <h1 class="title">Fútbol</h1>
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="main-news-card">
          <v-img
            src="https://phantom-marca-mx.unidadeditorial.es/3200b585ef2c2a597913ae01b8cf3365/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/11/17260113832915.jpg"
            height="500px"
            cover
          ></v-img>
          <v-card-subtitle class="main-news-category"> Fútbol </v-card-subtitle>
          <v-card-title class="main-news-title">
            México tiene a Javier Aguirre y Team USA suma, de forma oficial, al internacional
            Pochettino
          </v-card-title>
          <v-card-text class="main-news-author"> LW </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <v-card class="secondary-news-card">
              <v-img
                src="https://phantom-marca-mx.unidadeditorial.es/899c22bdf29d7f279406e6246d03a5d2/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/11/17260112998320.jpg"
                height="140px"
                cover
              ></v-img>
              <v-card-subtitle class="secondary-news-category"> Liga MX 2024 </v-card-subtitle>
              <v-card-title class="secondary-news-title">
                Alarmas en Coapa: Sebastián Cáceres se lesiona con Uruguay y es baja segura para
                América vs Guadalajara
              </v-card-title>
              <v-card-text class="secondary-news-author"> EDOARDO ÁVILA </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="secondary-news-card">
              <v-img
                src="https://phantom-marca-mx.unidadeditorial.es/1ef3c7dbe4ddca7015265484222b5cb1/resize/660/f/webp/mx/assets/multimedia/imagenes/2024/09/11/17260069156034.jpg"
                height="140px"
                cover
              ></v-img>
              <v-card-subtitle class="secondary-news-category">
                Eliminatorias Conmebol
              </v-card-subtitle>
              <v-card-title class="secondary-news-title">
                Resumen y goles Colombia vs. Argentina: James Rodríguez provoca la derrota ue una
                Albiceleste sin Messi
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
