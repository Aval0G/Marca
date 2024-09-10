<script setup>
import {
  IHeader,
  IFooter,
  ISectionMultiCard,
  IHeaderNav,
  ISectionNews,
  INewsTickerContainer
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
      src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
      title: 'The Best Desert',
      subtitle: 'The best desert in the world',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in urna et felis.'
    },
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

const newsItems ={
  news: [
  {
    category: "Actualidad",
    title: "¿Cuándo es el Simulacro Nacional de septiembre 2024? A qué hora sonará la alarma sísmica",
    image: "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png",
  },
  {
    category: "Liga Mexicana de Béisbol (LMB)",
    title: "Juego 4 Diablos Rojos vs Sultanes: a qué hora y dónde ver la Serie del Rey 2024",
    image: "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png",
  },
  {
    category: "NFL",
    title: "Jets vs 49ers: dónde ver y a qué hora es el juego de San Francisco en NFL 2024",
    image: "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png",
  },
  {
    category: "Fórmula 1",
    title: "Horarios y dónde ver el Gran Premio de Italia 2024 de Fórmula 1",
    image: "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png",
  },
  {
    category: "Liga MX",
    title: "Cruz Azul vs Pumas: a qué hora y dónde ver el Clásico Capitalino de la Liga MX",
    image: "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png",
  },
  {
    category: "NFL",
    title: "Chiefs vs Ravens: a qué hora y dónde ver el juego de la Semana 2 de la NFL 2024",
    image: "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png",
  },
  {
    category : "NBA",
    title : "Lakers vs Warriors: a qué hora y dónde ver el juego de la NBA 2024",
    image : "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png"
  },
  ]
};

const cardsNews = [
{
    category : "NBA",
    title : "Lakers vs Warriors: a qué hora y dónde ver el juego de la NBA 2024",
    image : "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png"
  },
  {
    category : "NBA",
    title : "Lakers vs Warriors: a qué hora y dónde ver el juego de la NBA 2024",
    image : "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png"
  },
  {
    category : "NBA",
    title : "Lakers vs Warriors: a qué hora y dónde ver el juego de la NBA 2024",
    image : "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png"
  },
  {
    category : "NBA",
    title : "Lakers vs Warriors: a qué hora y dónde ver el juego de la NBA 2024",
    image : "https://www.si.com/.image/t_share/MTk0MDM5NTg3MDA4Njg1NTcz/marcus-freeman---notre-dame.png"
  },80

]

const sidebarItems = [
  { title: 'Orden de los signos zodiacales' },
  { title: 'Canelo Álvarez pide revancha contra Bivol' },
  { title: 'Juego México vs Nueva Zelanda' },
  { title: 'Cruz Azul vs Pumas' },
  { title: 'Chiefs vs Ravens' },
  { title: 'Lakers vs Warriors' },
  { title: 'Gran Premio de Italia' },
  { title: 'Simulacro Nacional' },
  { title: 'Diablos Rojos vs Sultanes' },
  { title: 'Jets vs 49ers' },
  { title: 'Lo más leído' },
  { title: 'Lo más visto' },
  { title: 'Lo más comentado' },
  { title: 'Lo más compartido' },
  { title: 'Lo más valorado' },
]

</script>

<template>
  <v-app>
    <IHeader />
    <IHeaderNav />
    <ISectionMultiCard :cards="noticias.cards" />
    <INewsTickerContainer :newsItems="newsItems.news" />
    <main></main>
    <ISectionNews :cards="cardsNews" :sidebarItems="sidebarItems" />
    <IFooter />
  </v-app>
</template>

<style lang="sass" scoped></style>
