import Vue from 'vue';
import Vuex from 'vuex';
// 引入定义的state
import stateTest from './modules/stateTest';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        stateTest
    }
})