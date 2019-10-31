import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router/router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(LazyLoad, {
    error: require('@/assets/images/over.jpg'),
    loading: require('@/assets/images/lan.jpg')
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
