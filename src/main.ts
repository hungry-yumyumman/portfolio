import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'


const myCustomTheme: ThemeDefinition = {
  colors: {
    'orangePri': '#FE961B',
    'midnightTeal': '#001e22',
    'forestEmerald': '#0a533f',
    'brightTeal': '#0bbba1',
  },
}
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router).use(vuetify).mount('#app')
