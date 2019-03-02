import Vue from 'vue'
import Router from 'vue-router'

// Pages
import IndexPage from '../pages/index.vue'
import ProPage from '../pages/pro.vue'
import ErrorPage from '../pages/404.vue'

var base = '/';

if (window.location.pathname && window.location.pathname != '/') {
    base = window.location.pathname.split('/').slice(0, -1).join('/')
}

const routes = [
    {path: '/', component: IndexPage},
    {path: '/pro', component: ProPage},
    {path: '/*', component: ErrorPage}
]

Vue.use(Router)

export default new Router({
    base,
    routes: routes,
    mode: 'history',
    history: true,
    linkActiveClass: 'uk-active'
})
