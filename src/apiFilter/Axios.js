import Axios from 'axios'
import config from '@/../config.json'
// 请求拦截
Axios.interceptors.request.use(
    res => {
        // 配置baseURL
        res.baseURL = config.baseURL || ''
        // 设置跨域请求时withCredentials为true
        res.withCredentials = true
        res.timeout = 8000
        return res
    },
    err => Promise.reject(err)
)
// 响应拦截
Axios.interceptors.response.use(
    res => {
        return {
            data: res.data,
            status: res.status
        }
    },
    err => Promise.reject(err)
)
export default Axios
