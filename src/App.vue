<script setup>
import {
  IHeader,
  IFooter,
  ISectionMultiCard,
  ITest,
  IHeaderNav,
  ISection_1lg_2md
} from './components'
import { VApp } from 'vuetify/lib/components/index.mjs'

const noticias = {
  cards: [
    {
      src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
      title: 'The Best Desert',
      subtitle: 'The best desert in the world',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in urna et felis.'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      title: 'The Best Docks',
      subtitle: 'The best docks in the world',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in urna et felis.'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      title: 'The Best Road',
      subtitle: 'The best road in the world',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in urna et felis.'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      title: 'The Best Plane',
      subtitle: 'The best plane in the world',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in urna et felis.'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      title: 'The Best Sunshine',
      subtitle: 'The best sunshine in the world',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in urna et felis.'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/cards/sunset.jpg',
      title: 'The Best Sunset',
      subtitle: 'The best sunset in the world',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in urna et felis.'
    }
  ]
}
</script>

<template>
  <v-app>
    <IHeader />
    <IHeaderNav />
    <ISection_1lg_2md />
    <ISectionMultiCard :cards="noticias.cards" />
    <main></main>
    <ITest />
    <IFooter />
  </v-app>
</template>

<style lang="sass" scoped></style>
