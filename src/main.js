import { createApp } from 'vue';
import App from './App.vue';

import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; 
import 'vuetify/styles'; 

import './assets/global.scss';

const vuetify = createVuetify();

const app = createApp(App);
app.use(vuetify).mount('#app');

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
