<template>
  <v-card class="mx-auto" max-width="344">
    <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

    <v-spacer></v-spacer>

    <v-card-subtitle> Liga Mx </v-card-subtitle>

    <v-card-title>
      Ahora America Padecio, Tigres evitó negociaciones con Luis Quiñonez
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text> Abigail Parra </v-card-text>
  </v-card>
</template>

<script setup>
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
