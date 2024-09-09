import './assets/global.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'
// main.js o main.ts
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/_styles.scss'
const vuetify = createVuetify()
// vuetify configuration
const app = createApp(App)
app.use(vuetify).mount('#app')

window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}
