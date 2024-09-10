<template>
  <v-container class="news-container">
    <v-row>
      <v-col :cols="12">
        <v-row justify="center" :class="{ 'justify-center': cards.length <= 2 }">
          <v-col
            v-for="(card, index) in cards"
            :key="index"
            cols="12"
            xl="3"
            lg="4"
            md="4"
            sm="6"
            xs="12"
          >
            <v-card class="mx-auto news-card" max-width="344">
              <v-img :src="card.src" height="200px" cover>
                <v-card-title class="card-title-overlay">{{ card.title }}</v-card-title>
              </v-img>
              <v-card-subtitle class="text-uppercase card-subtitle">
                {{ card.subtitle }}
              </v-card-subtitle>

              <v-divider></v-divider>

              <v-card-text class="text-uppercase card-text"> {{ card.text }} </v-card-text>
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
  VDivider,
  VContainer,
  VRow,
  VCol
} from 'vuetify/components'

defineProps({
  cards: Array
})
</script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'
@import '@/assets/_fonts.sass'

.news-container
  margin-top: 20px
  border-top: 1px solid $main-red
  border-bottom: 1px solid $main-red

.news-card
  transition: transform 0.3s ease, box-shadow 0.3s ease
  position: relative
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

.card-title-overlay
  position: absolute
  bottom: 10px
  left: 10px
  background-color: rgba(0, 0, 0, 0.6)
  color: white
  padding: 5px 10px
  border-radius: 5px
  font-size: 15px
  max-width: calc(100% - 20px)

.card-subtitle
  position: absolute
  top: 10px
  left: 10px
  background-color: $main-red
  color: white
  padding: 5px 10px
  border-radius: 5px
  font-size: 14px
  opacity: 1

.card-text
  background-color: #f5f5f5
  padding: 10px
  border-radius: 0 0 5px 5px
  font-size: 14px

.justify-center
  justify-content: center !important

.ad-space
  background-color: $gray-100
  border: 1px solid #ddd
  padding: 10px
  text-align: center
  margin: 20px 0

.ad-space-blank
  padding: 10px
  text-align: center
  margin: 20px 0
</style>
