import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
createApp(App).use(store).use(router).mount('#app')

import './assets/css/bootstrap.min.css'
import './assets/css/templatemo-style.css'
import './assets/global.css'
