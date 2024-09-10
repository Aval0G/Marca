<template>
  <v-container
    class="news-ticker-container"
    @mouseover="pauseScroll"
    @mouseleave="startScroll"
  >
    <div ref="ticker" class="news-ticker">
      <div class="news-items">
        <div v-for="(item, index) in newsItems" :key="'first-' + index" class="news-item">
          <v-card class="news-card">
            <div class="news-img-container">
              <v-img class="news-img" :src="item.src" height="100px"></v-img>
              <div class="news-subtitle">{{ item.subtitle }}</div>
            </div>
            <v-card-title class="headline news-title">{{ item.title }}</v-card-title>
          </v-card>
        </div>
        <div v-for="(item, index) in newsItems" :key="'second-' + index" class="news-item">
          <v-card class="news-card">
            <div class="news-img-container">
              <v-img class="news-img" :src="item.src" height="100px"></v-img>
              <div class="news-subtitle">{{ item.subtitle }}</div>
            </div>
            <v-card-title class="headline news-title">{{ item.title }}</v-card-title>
          </v-card>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { VContainer, VCard, VCardTitle, VImg } from 'vuetify/components'

const props = defineProps({
  newsItems: {
    type: Array,
    required: true
  }
})

const { newsItems } = props
const ticker = ref(null)
let scrollInterval = null

function startScroll() {
  scrollInterval = setInterval(() => {
    if (ticker.value) {
      ticker.value.scrollLeft += 1
      if (ticker.value.scrollLeft >= ticker.value.scrollWidth / 2) {
        ticker.value.scrollLeft = 0
      }
    }
  }, 20)
}

function pauseScroll() {
  clearInterval(scrollInterval)
}

onMounted(() => {
  startScroll()
})

onBeforeUnmount(() => {
  pauseScroll()
})
</script>

<style lang="sass" scoped>
@import '@/assets/_colors.sass'
@import '@/assets/_fonts.sass'

.news-ticker-container
  border-top: 2px solid $main-red
  border-bottom: 2px solid $main-red

.news-ticker
  display: flex
  align-items: center
  height: 400px
  overflow: hidden
  position: relative
  white-space: nowrap

.news-items
  display: inline-flex

.news-item
  width: 350px
  height: 350px

.news-card
  overflow: visible
  transition: transform 0.3s ease
  width: 250px
  height: 100%
  display: flex
  flex-direction: column
  position: relative

.news-card:hover
  transform: scale(1.05)

.news-img-container
  position: relative
  width: 100%
  height: 100%

.news-img
  width: 100%
  height: auto !important
  object-fit: cover

.news-subtitle
  position: absolute
  top: 10px
  left: 10px
  background-color: $main-red
  color: white
  padding: 5px 10px
  border-radius: 5px
  font-size: 14px

.news-title
  color: $blue-gray
  overflow: visible
  white-space: normal
  text-align: center
  margin: 10px 0
</style>
