import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createYmaps } from 'vue-yandex-maps'
import App from './App.vue'

const app = createApp(App)

app.use(
  createYmaps({
    apikey: 'c562ba4f-30ad-4e15-bc38-3aaa3179cc1d'
  })
)

app.mount('#app')
