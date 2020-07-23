import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router/router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LazyLoad from 'vue-lazyload'
import AMapLoader from '@amap/amap-jsapi-loader'
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(LazyLoad, {
    error: require('@/assets/images/over.jpg'),
    loading: require('@/assets/images/lan.jpg')
})
AMapLoader.load({
    key: '200d5f2d03b7f64e0f0fa4e2759ed528',
    version: '2.0',
    plugins: []
}).then(AMap => {
    // 将高德地图的方法挂载至vue原型上
    Vue.prototype.AMap = AMap
}).catch(() => {
    // 高德地图加载失败，控制台提示
    const { warn, error } = console
    warn('高德地图加载失败！')
    Vue.prototype.AMap = {
        Map() {
            error('请检查高德地图加载')
            return false
        }
    }
}).finally(() => {
    new Vue({
        store,
        router,
        render: h => h(App)
    }).$mount('#app')
})
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
