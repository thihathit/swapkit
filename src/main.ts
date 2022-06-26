import { createApp } from 'vue'

import App from '$app/App.vue'
import router from '$router/config'

import '$assets/css/minireset.min.css'
import '$assets/css/fonts.css'
import '$assets/css/defaults.css'
import '$assets/css/texts.css'
import '$assets/css/form-elements.css'

createApp(App).use(router).mount('#app')
