import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./index.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUp, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(faSun, faMoon, faArrowUp)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
