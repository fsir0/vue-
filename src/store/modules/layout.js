import commonApi from '@/api/common.js'
const state = {
    position: {},
    headerNav: {}
}
const mutations = {
    // 更新position数据
    uPosition(state, data) {
        state.position = data
    },
    // 更新nav数据
    uHeaderNav(state, data) {
        state.headerNav = data
    }
}
const actions = {
    getPosition({ commit }, query) {
        // 请求开始触发全局loading开始
        commit('uLoadingFlag', true)
        commonApi.getPosition(query, res => {
            // 请求开始触发全局loading开始
            commit('uLoadingFlag', false)
            if (res.status === 200) {
                commit('uPosition', res)
            }
        }, err => {
            // 请求开始触发全局loading开始
            commit('uLoadingFlag', false)
            // eslint-disable-next-line no-console
            console.log(err)
        })
    },
    getHeaderNav({ commit }, query) {
        // 请求开始触发全局loading开始
        commit('uLoadingFlag', true)
        commonApi.getHeaderNav(query, res => {
            // 请求开始触发全局loading开始
            commit('uLoadingFlag', false)
            if (res.status === 200) {
                commit('uHeaderNav', res)
            }
        }, err => {
            // 请求开始触发全局loading开始
            commit('uLoadingFlag', false)
            // eslint-disable-next-line no-console
            console.log(err)
        })
    }
}
export default { state, mutations, actions }
