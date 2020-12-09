import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/minireset.min.css'
import '@/assets/css/fonts.css'
import '@/assets/css/defaults.css'
import '@/assets/css/texts.css'
import '@/assets/css/form-elements.css'
import './registerServiceWorker'

createApp(App)
    .use(router)
    .mount('#app')
