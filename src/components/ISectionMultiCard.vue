<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto" max-width="344">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-img>
          <v-spacer></v-spacer>
          <v-card-subtitle> Liga Mx </v-card-subtitle>
          <v-card-title>
            Ahora America Padecio, Tigres evitó negociaciones con Luis Quiñonez
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text> Abigail Parra </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto" max-width="344">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/soccer.jpg"
            cover
          ></v-img>
          <v-spacer></v-spacer>
          <v-card-subtitle> Copa Libertadores </v-card-subtitle>
          <v-card-title>
            Boca Juniors se enfrenta a River Plate en un superclásico de infarto
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text> Carlos Sánchez </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto" max-width="344">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/basketball.jpg"
            cover
          ></v-img>
          <v-spacer></v-spacer>
          <v-card-subtitle> NBA </v-card-subtitle>
          <v-card-title>
            Los Lakers consiguen una victoria decisiva en el último segundo
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text> Laura Martinez </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto" max-width="344">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/tennis.jpg"
            cover
          ></v-img>
          <v-spacer></v-spacer>
          <v-card-subtitle> Wimbledon </v-card-subtitle>
          <v-card-title> Novak Djokovic alcanza su 21º título de Grand Slam </v-card-title>
          <v-divider></v-divider>
          <v-card-text> Maria González </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto" max-width="344">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/swimming.jpg"
            cover
          ></v-img>
          <v-spacer></v-spacer>
          <v-card-subtitle> Natación </v-card-subtitle>
          <v-card-title>
            Katie Ledecky rompe otro récord mundial en los 800 metros libres
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text> Alejandro Perez </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto" max-width="344">
          <v-img
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/cycling.jpg"
            cover
          ></v-img>
          <v-spacer></v-spacer>
          <v-card-subtitle> Tour de Francia </v-card-subtitle>
          <v-card-title>
            Tadej Pogacar domina la etapa reina y se consolida como líder
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text> José Ramírez </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { VContainer, VRow, VCol } from 'vuetify/components/VGrid'
import { VCard, VCardTitle, VCardSubtitle, VCardText } from 'vuetify/components/VCard'
import { VImg } from 'vuetify/components/VImg'
import { VDivider } from 'vuetify/components/VDivider'
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
