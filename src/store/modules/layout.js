import commonApi from '@/api/common.js'
let searchTimer = null
const state = {
    position: {},
    headerNav: {
        mymt: {},
        businesscenter: {},
        mtrules: {},
        webnav: { list: [{}, {}, {}, {}] }
    },
    hotService: { list: [{}] },
    nearlyHotService: { list: [{}] },
    nearlyFlag: false
}
const mutations = {
    // 更新position数据
    uPosition(state, data) {
        state.position = data
    },
    // 更新nav数据
    uHeaderNav(state, data) {
        state.headerNav = data
    },
    // 更新热词搜索
    uHotService(state, data) {
        state.hotService = data
    },
    // 更新搜索词条
    uNearlyHotService(state, data) {
        state.nearlyHotService = data
    },
    // 更新词条搜索加载中flag
    uNearlyFlag(state, flag) {
        state.nearlyFlag = flag
    }
}
// 定义actions，采用dispatch处罚actions
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
    },
    getHotService({ commit }, query) {
        commit('uLoadingFlag', true)
        commonApi.getHotService(query, res => {
            commit('uLoadingFlag', false)
            if (res.status === 200) {
                commit('uHotService', res)
            }
        }, err => {
            commit('uLoadingFlag', false)
            // eslint-disable-next-line no-console
            console.log(err)
        })
    },
    getNearlyHotService({ commit }, query) {
        commit('uNearlyFlag', true)
        clearTimeout(searchTimer)
        // 防抖500ms
        searchTimer = setTimeout(() => {
            commonApi.getNearlyHotService(query, res => {
                commit('uNearlyFlag', false)
                if (res.status === 200) {
                    commit('uNearlyHotService', res)
                }
            }, err => {
                commit('uNearlyFlag', false)
                // eslint-disable-next-line no-console
                console.log(err)
            })
        }, 500)
    }
}
export default { state, mutations, actions }
