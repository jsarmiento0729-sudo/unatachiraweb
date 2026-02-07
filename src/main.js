import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 1. Importa el router

import './assets/main.css'

// 2. Dile a Vue que use el router
createApp(App).use(router).mount('#app')