import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './utils/router'

import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VApp, VBottomNavigation, VAppBar, VContainer, VMain } from 'vuetify/components'
import { Scroll, Resize, Ripple, Touch, ClickOutside, } from 'vuetify/directives'

const vuetify = createVuetify({
    components: { VApp, VBottomNavigation, VAppBar, VContainer, VMain },
    directives: { Scroll, Resize, Ripple, Touch, ClickOutside, },
})

// Vue.config.productionTip = false
const app = createApp(App)
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .use(Toast, { position: POSITION.TOP_RIGHT });


app.mount('#app')
