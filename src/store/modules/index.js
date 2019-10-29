import indexApi from '@/api/index.js'
const state = {
    navData: {}
}
const mutations = {
    // 更新navData
    uNavData(state, data) {
        this.state = data
    }
}
const actions = {
    getNavData({ commit }, query) {
        commit('uLoadingFlag', true)
        indexApi.getNavData(query, res => {
            commit('uLoadingFlag', false)
            if (res.status === 200) {
                commit('uNavData', res.data)
            }
        }, err => {
            commit('uLoadingFlag', false)
            // eslint-disable-next-line no-console
            console.log(err)
        })
    }
}
export default { state, mutations, actions }
