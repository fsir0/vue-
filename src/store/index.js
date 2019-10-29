import Vue from 'vue'
import Vuex from 'vuex'
// 引入定义的state
import layout from './modules/layout'
import index from './modules/index'
import stateTest from './modules/stateTest'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        loadingFlag: false,
        loadingTime: 0
    },
    mutations: {
        // 修改全局loading状态，在./modules下的请求开始时commit('uLoadingFlag', true);结束时commit('uLoadingFlag', false);
        uLoadingFlag(state, flag) {
            // 增加次数判断，当全局loading在取消大于或则等于触发时才取消loading
            if (flag) {
                state.loadingTime++
                state.loadingFlag = flag
            } else {
                state.loadingTime--
                if (state.loadingTime <= 0) {
                    state.loadingFlag = flag
                    state.loadingTime = 0
                }
            }
        }
    },
    modules: {
        layout,
        index,
        stateTest
    }
})
