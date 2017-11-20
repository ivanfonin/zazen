import Vue from 'vue'
import App from './app.vue'
import router from './router'

const app = new Vue({
    el: '#root',
    router,
    render: h => h(App)
})
