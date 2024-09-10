<template>
  <v-card class="news-item">
    <v-card-title>
      {{ news.title }}
    </v-card-title>
    <v-card-text>
      {{ news.description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.news-item {
  margin-bottom: 16px;
  /* Aquí puedes agregar más estilos personalizados */
  .v-card-title {
    font-weight: bold
  }
}
</style>