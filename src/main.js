import Vue from 'vue'
import App from './App'
// import VueAxios from 'vue-axios'
// import axios from 'axios'
import store from './store/index'
import router from './router'

Vue.config.productionTip = false
// 此处引入axios仅为在组建内部也可以使用axios（通常不建议在组建内部直接axios，请求请走api）
// Vue.use(VueAxios, axios)
new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')