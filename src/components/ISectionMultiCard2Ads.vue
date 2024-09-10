<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" xl="2" lg="2" md="3" sm="0" xs="0" class="d-none d-lg-flex ad-column">
        <div class="ad-space">
          <img
            src="https://www.telecomasia.net/upload/sprint.editor/44e/44ea35ab0e675839d091667c24862930.png"
            alt="Anuncio"
          />
        </div>
      </v-col>

      <v-col :cols="12" :xl="8" :lg="8" :md="12" :sm="12" :xs="12" class="news-column">
        <v-row justify="center" :class="{ 'justify-center': cards.length <= 2 }">
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

      <v-col cols="12" xl="2" lg="2" md="3" sm="0" xs="0" class="d-none d-lg-flex ad-column">
        <div class="ad-space">
          <img
            src="https://www.telecomasia.net/upload/sprint.editor/44e/44ea35ab0e675839d091667c24862930.png"
            alt="Anuncio"
          />
        </div>
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
  VSpacer
} from 'vuetify/components'

defineProps({
  cards: Array
})
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
  color: white
  margin-top: 10px
  background-color: $main-red-dark

.justify-center
  justify-content: center !important

.ad-space
  background-color: #f5f5f5
  border: 1px solid #ddd
  padding: 10px
  text-align: center
  margin: 20px 0

@media (max-width: 960px)
  .ad-column
    display: none
</style>
