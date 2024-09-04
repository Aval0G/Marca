import './assets/global.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'

const vuetify = createVuetify()
// vuetify configuration
const app = createApp(App)
app.use(vuetify).mount('#app')
