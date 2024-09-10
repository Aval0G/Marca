<template>
  <v-container fluid>
    <v-row>
      <!-- Imagen principal con titular grande -->
      <v-col cols="12" md="8">
        <v-card class="main-news-card">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" 
            height="300px"
            cover
          ></v-img>
          <v-card-subtitle class="main-news-category">
            SELECCIÓN NACIONAL DE MÉXICO
          </v-card-subtitle>
          <v-card-title class="main-news-title">
            Once titular de México vs Canadá: Chances de oro a Malagón y Chino Huerta
          </v-card-title>
          <v-card-text class="main-news-author">
            EDOARDO ÁVILA
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="12">
            <v-card class="secondary-news-card">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                height="140px"
                cover
              ></v-img>
              <v-card-subtitle class="secondary-news-category">
                SELECCIÓN NACIONAL DE MÉXICO
              </v-card-subtitle>
              <v-card-title class="secondary-news-title">
                Vasco Aguirre estira puya a seleccionados: "Me dolería un equipo indolente"
              </v-card-title>
              <v-card-text class="secondary-news-author">
                EDOARDO ÁVILA
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="secondary-news-card">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                height="140px"
                cover
              ></v-img>
              <v-card-subtitle class="secondary-news-category">
                MEXICANOS POR EL MUNDO
              </v-card-subtitle>
              <v-card-title class="secondary-news-title">
                Este es 'México FC' equipo que milita en España con jugadores Liga MX y Expansión
              </v-card-title>
              <v-card-text class="secondary-news-author">
                LW
              </v-card-text>
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
  VCol,
} from 'vuetify/components';
</script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'
@import '@/assets/_fonts.sass'

.main-news-card
  transition: transform 0.3s ease, box-shadow 0.3s ease
  &:hover
    transform: scale(1.02)
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)

.main-news-title
  font-size: 24px
  font-weight: bold
  margin-top: 10px
  color: #333

.main-news-category
  font-size: 14px
  font-weight: bold
  color: $main-red
  margin-top: 5px

.main-news-author
  font-size: 12px
  color: #888

.secondary-news-card
  transition: transform 0.3s ease, box-shadow 0.3s ease
  &:hover
    transform: scale(1.05)
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)

.secondary-news-title
  font-size: 16px
  font-weight: 500
  margin-top: 5px
  color: #333

.secondary-news-category
  font-size: 12px
  font-weight: bold
  color: $main-red
  margin-top: 5px

.secondary-news-author
  font-size: 12px
  color: #888
</style>
