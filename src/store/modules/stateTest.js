import testApi from '../../api/apitest'
// 定义state并初始化state
const state = {
    data1: [],
    data2: [],
    data3: { total: 0, list: [], loading: true },
    warning: '警告信息唷！',
    count: 0
}
const getters = {}
// 处理action产生的结果，并把结果更新到state上
const mutations = {
    add(state) {
        state.count++
    },
    discount(state) {
        state.count--
    },
    updateCount(state, num) {
        state.count = num
    },
    uWarning(state, { msg }) {
        state.warning = msg || ''
    },
    uData1(state, { list }) {
        state.data1 = list
    },
    uData2(state, { list }) {
        state.data2 = list
    },
    uData3(state, data) {
        // 此处做合并，在切换时保留之前数据，切换完成后获得最新数据
        state.data3 = Object.assign(state.data3, data)
    }
}
// 触发的方法，在这里完成数请求将得到的数据commit返回给mutations内部的函数，方法第一位参数为当前store对象，内部有触发mutations的commit方法
const actions = {
    dispatchAdd({ commit }) {
        commit('add')
    },
    dispatchDiscount({ commit }) {
        commit('discount')
    },
    duCount({ commit }, query) {
        if (typeof query === 'number') {
            commit('updateCount', query)
        } else {
            commit('updateCount', 0)
        }
    },
    duWarning({ state, commit }, query) {
        // 请求开始触发全局loading开始
        commit('uLoadingFlag', true)
        // 模拟请求数据 请求时间1s
        setTimeout(() => {
            if (query === '996') {
                commit('uWarning', { msg: '996~~wenna~~wenna~~' + state.count })
            } else {
                commit('uWarning', { msg: 'green work environment!!nice!' })
            }
            // 请求结束触发全局loading结束
            commit('uLoadingFlag', false)
        }, 1500)
    },
    duData1({ commit }) {
        // 请求开始触发全局loading开始
        commit('uLoadingFlag', true)
        // 获取api数据
        testApi.testapi({ page: 1 }, res => {
            if (res && res.data && res.data.length) {
                commit('uData1', { list: res.data })
            }
            // 请求结束触发全局loading结束
            commit('uLoadingFlag', false)
        }, err => {
            // eslint-disable-next-line no-console
            console.log('storeRequest:', err)
            // 请求结束触发全局loading结束
            commit('uLoadingFlag', false)
        })
    },
    duData2({ commit }, query) {
        // 请求开始触发全局loading开始
        commit('uLoadingFlag', true)
        // testApi.testRapApi({}, res => {console.log(res)}, err => {console.log(err)});
        // testApi.testRapApip({ name: '呵呵', world: '112233' }, res => { console.log(res) }, err => { console.log(err) })
        testApi.testArticleApi(query, res => {
            if (res && res.data && res.data.length) {
                commit('uData2', { list: res.data })
            }
            // 请求结束触发全局loading结束
            commit('uLoadingFlag', false)
        }, err => {
            // eslint-disable-next-line no-console
            console.log(err)
            // 请求结束触发全局loading结束
            commit('uLoadingFlag', false)
        })
    },
    duData3({ commit }, query) {
        // 模拟让接口慢0.2秒
        commit('uData3', { loading: true })// 请求时置空，让列表出现加载中动画
        setTimeout(() => {
            testApi.testUserApi(query, res => {
                if (res && res.data && res.data.length) {
                    commit('uData3', { total: 100, list: res.data, loading: false })
                } else {
                    commit('uData3', { total: 0, list: [], loading: false })
                }
            }, err => {
                // eslint-disable-next-line no-console
                console.log(err)
                commit('uData3', { total: 0, list: [], loading: false })
            })
        }, 200)
    }
}
export default { state, getters, mutations, actions }
