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

window.Cookie = {
    set(name, value, path, expires, domain) {
        if (!name || value === undefined) {
            return
        }
        expires = expires ? new Date(new Date().getTime() + expires).toGMTString() : ''
        document.cookie = name + '=' + escape(value) +
            ';path=' + (path || '/') +
            ';expires=' + expires +
            ';domain=' + (domain || '') + ';'
    },
    get(name, err) {
        if (!name || !document.cookie.length) {
            return
        }
        let _n = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
        return _n != null ? _n[2] : err
    },
    del(name) {
        return this.set(name, '', '', -1)
    }
}
