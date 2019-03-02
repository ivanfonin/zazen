import Vue from 'vue'
import App from './app.vue'
import Navbar from './navbar.vue'

// Register components
Vue.component('navbar', Navbar)

// Router
import router from './router'

// Initialize app
const app = new Vue({
    router,
    el: '#app',
    extends: App
})
