<template>
  <v-container class="news-ticker-container" fluid @mouseover="pauseScroll" @mouseleave="startScroll">
    <div ref="ticker" class="news-ticker">
      <div class="news-items">
        <div v-for="(item, index) in newsItems" :key="'first-' + index" class="news-item">
          <v-card class="ma-3 pa-3 news-card">
            <v-card-subtitle class="font-weight-bold news-category">{{ item.category }}</v-card-subtitle>
            <v-card-title class="headline news-title">{{ item.title }}</v-card-title>
            <v-img :src="item.image" height="100" contain></v-img>
          </v-card>
        </div>
        <div v-for="(item, index) in newsItems" :key="'second-' + index" class="news-item">
          <v-card class="ma-3 pa-3 news-card">
            <v-card-subtitle class="font-weight-bold news-category">{{ item.category }}</v-card-subtitle>
            <v-card-title class="headline news-title">{{ item.title }}</v-card-title>
            <v-img :src="item.image" height="100" contain></v-img>
          </v-card>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { VContainer, VCard, VCardSubtitle, VCardTitle, VImg } from 'vuetify/components';

export default {
  name: 'NewsTicker',
  components: {
    VContainer,
    VCard,
    VCardSubtitle,
    VCardTitle,
    VImg,
  },
  data() {
    return {
      newsItems: [
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
      ],
      scrollInterval: null,
    };
  },
  mounted() {
    this.startScroll();
  },
  beforeUnmount() {
    this.pauseScroll();
  },
  methods: {
    startScroll() {
      this.scrollInterval = setInterval(() => {
        const ticker = this.$refs.ticker;
        ticker.scrollLeft += 1;
        if (ticker.scrollLeft >= ticker.scrollWidth / 2) {
          ticker.scrollLeft = 0; 
        }
      }, 20);
    },
    pauseScroll() {
      clearInterval(this.scrollInterval);
    },
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'
@import '@/assets/_fonts.sass'

.news-ticker-container 
  overflow: hidden
  background-color: #f5f5f5

.news-ticker 
  display: flex
  align-items: center
  height: 200px
  overflow: hidden
  position: relative
  white-space: nowrap

.news-items 
  display: inline-flex

.news-item 
  flex-shrink: 0
  width: 300px
  text-align: center

.news-card 
  overflow: hidden
  transition: transform 0.3s ease

.news-card:hover 
  transform: scale(1.05)

.news-category 
  color: $main-red

.news-title 
  color: $blue-gray
</style>
