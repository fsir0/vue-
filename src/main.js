import Vue from 'vue'
import App from './App.vue'
// import router from './router'

Vue.config.productionTip = false

// 路由
import Router from 'vue-router';
import Home from './views/Home';
import About from './views/About';

Vue.use(Router)

const myRouter = new Router({
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ],
  // 加上mode: 'history'之后路由上就没有了根路由上的#
  mode: 'history'
});

new Vue({
  // router,
  router: myRouter,
  render: h => h(App)
}).$mount('#app')

// router -> 路由
// npm install vue-router -s  之前得安装方式
// 现在直接vue add router