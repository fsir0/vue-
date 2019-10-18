import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Login from '@/views/login.vue'
import Page1 from '@/views/Page1.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/login',
            name: 'login',
            component: Login
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
