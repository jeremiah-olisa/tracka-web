import './style.css'
import App from './App.vue'
import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './_utils/routes'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faSpinner, faHome, faAdd, faBell, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faSpinner, faHome, faAdd, faBell, faChartBar, faCog)


// Vue.config.productionTip = false


const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(vuetify)
    .use(router)
    .mount('#app');