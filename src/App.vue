<script setup>
import { IHeader, IFooter, ISectionMultiCard, ITest, IHeaderNav } from './components'
import { VApp } from 'vuetify/lib/components/index.mjs'
</script>

<template>
  <v-app>
    <IHeader />
    <IHeaderNav />
    <ISectionMultiCard />
    <main></main>
    <ITest />
    <IFooter />
  </v-app>
</template>

<style lang="sass" scoped></style>
