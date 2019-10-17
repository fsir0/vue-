import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Page1 from '@/views/Page1.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/page1',
            name: 'page1',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
            component: Page1
        }
    ]
})
