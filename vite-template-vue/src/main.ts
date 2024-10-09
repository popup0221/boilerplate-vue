import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './routes'

const vue = createApp(App)
vue.use(router)
vue.mount('#app')
