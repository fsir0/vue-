import Vue from 'vue';
import Vuex from 'vuex';
// 引入定义的state
import stateTest from './modules/stateTest';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        loadingFlag: false
    },
    mutations: {
        // 修改全局loading状态，在./modules下的请求开始时commit('uLoadingFlag', true);结束时commit('uLoadingFlag', false);
        uLoadingFlag(state, flag) {
            state.loadingFlag = flag;
        }
    },
	modules: {
		stateTest
	}
})