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

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { VContainer, VCard, VCardSubtitle, VCardTitle, VImg } from 'vuetify/components';

const props = defineProps({
  newsItems: {
    type: Array,
    required: true
  }
});

const { newsItems } = props;
const ticker = ref(null);
let scrollInterval = null;

function startScroll() {
  scrollInterval = setInterval(() => {
    if (ticker.value) {
      ticker.value.scrollLeft += 1;
      if (ticker.value.scrollLeft >= ticker.value.scrollWidth / 2) {
        ticker.value.scrollLeft = 0; 
      }
    }
  }, 20);
}

function pauseScroll() {
  clearInterval(scrollInterval);
}

onMounted(() => {
  startScroll();
});

onBeforeUnmount(() => {
  pauseScroll();
});
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
