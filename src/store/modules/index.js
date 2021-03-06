import indexApi from '@/api/index.js'
const state = {
    navData: {
        data: {
            list: [
                {
                    nameList: [{}],
                    list: [
                        {
                            list: [{}]
                        }
                    ]
                }
            ]
        }
    },
    floorData: {
        navList: [{}],
        contentList: [{ cardList: [{}] }]
    },
    friendlinkData: {
        list: [{ list: [{}] }]
    }
}
const mutations = {
    // 更新navData
    uNavData(state, data) {
        state.navData = data
    },
    // 更新floorData
    uFloorData(state, data) {
        state.floorData = data
    },
    // 更新friendlinkData
    uFriendlinkData(state, data) {
        state.friendlinkData = data
    }
}
const actions = {
    getNavData({ commit }, query) {
        commit('uLoadingFlag', true)
        indexApi.getNavData(query, res => {
            commit('uLoadingFlag', false)
            if (res.status === 200) {
                commit('uNavData', res)
            }
        }, err => {
            commit('uLoadingFlag', false)
            // eslint-disable-next-line no-console
            console.log(err)
        })
    },
    getFloorData({ commit }, query) {
        commit('uLoadingFlag', true)
        indexApi.getFloorData(Object.assign({
            theme: 'quality',
            tab: 'all',
            ci: 151,
            limit: 12
        }, query), res => {
            commit('uLoadingFlag', false)
            if (res.status === 200) {
                commit('uFloorData', res.data)
            }
        }, err => {
            commit('uLoadingFlag', false)
            // eslint-disable-next-line no-console
            console.log(err)
        })
    },
    getFriendlinkData({ commit }, query) {
        commit('uLoadingFlag', true)
        indexApi.getFriendlinkData({}, res => {
            commit('uLoadingFlag', false)
            if (res.status === 200) {
                commit('uFriendlinkData', res.data)
            }
        }, err => {
            // eslint-disable-next-line no-console
            console.log(err)
        })
    }
}
export default { state, mutations, actions }
