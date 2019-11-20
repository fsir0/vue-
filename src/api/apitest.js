import Axios from 'axios'
Axios.interceptors.request.use(
    res => {
        // console.log(res)
        res.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        // res.headers['token'] = 'aabbcc'
        return res
    },
    err => Promise.reject(err)
)
export default {
    // 获取10条数据，有城市、地址、电话等信息
    testapi (params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', {
            params: Object.assign({
                page: 1,
                pageSize: 10
            }, params)
        })
            .then(suc).catch(err)
    },
    // 模拟一个请求获取100条数据
    testArticleApi (params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/posts', {
            params: Object.assign({
                page: 1,
                pageSize: 10
            }, params)
        })
            .then(suc).catch(err)
    },
    // 获取userId对应的列表
    testUserApi (params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/posts', {
            params: Object.assign({
                page: 1,
                pageSize: 10
            }, params)
        })
            .then(suc).catch(err)
    },
    testRapApi (params, suc, err) {
        Axios.get('http://rap2api.taobao.org/app/mock/233052/GET/api/test1', {
            params: {}
        })
            .then(suc).catch(err)
    },
    testRapApip (params, suc, err) {
        Axios.post('https://www.baidu.com/home/xman/data/tipspluslist?indextype=manht&_req_seqid=0x896ee7a800074b51&asyn=1&t=1574238338625&sid=1422_21096_29568_29220_26350', params)
            .then(suc).catch(err)
    }
}
