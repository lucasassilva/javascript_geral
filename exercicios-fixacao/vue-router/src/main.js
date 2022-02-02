import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// assets/css/material.css
import './assets/css/material.css'

createApp(App).use(router).mount('#app')
