<template>
  <se id="IHeaderNewsTop">
    <span class="bold">Noticias: </span>
    <div class="news-container">
      <div class="news-wrapper">
        <p v-for="iNew in [...props.news, ...props.news]" :key="iNew" class="new">{{ iNew }}</p>
      </div>
    </div>
  </se>
</template>

<script setup>
const props = defineProps({
  news: Array
})
</script>

<style lang="sass" scoped>
@import '../assets/_colors'

#IHeaderNewsTop
  background-color: $gray-100
  font-size: 12px
  padding: 0 10px
  display: flex
  align-items: center

  .bold
    font-weight: bold
    margin-right: 10px

  .news-container
    overflow: hidden
    white-space: nowrap
    width: 100%

  .news-wrapper
    display: inline-block
    white-space: nowrap
    animation: scroll 60s linear infinite

  .new
    display: inline-block
    padding: 0 20px
    white-space: nowrap
    cursor: pointer
    position: relative
    &:hover
      text-decoration: underline
    &:before
        content: '/'
        position: absolute
        right: 0
        top: 0


@keyframes scroll
  from
    transform: translateX(0%)
  to
    transform: translateX(-50%)
</style>
