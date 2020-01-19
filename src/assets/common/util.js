export default {
    /**
     * 格式化时间
     * @param time Number|String|TimeObj    数字、字符串类型10、13-17位的时间戳，或者已经格式化的时间字符串，以及时间对象字符串，或者时间对象
     * @param type String   格式：YY-mm-dd|YY-mm-dd HH:mm|YY-mm-dd HH:mm:ss
     * @return String|Number 返回格式化时间或者时间戳
     */
    formatTime(time, type) {
        if (!time) {
            return ''
        }
        let tp = typeof (time)
        // 字符串类型时间戳
        if (tp === 'string' && (parseInt(time) + '').length === time.length) {
            if (time.length === 10) {
                time *= 1000
            } else if (time.length >= 13 && time.length < 17) {
                time = parseInt(time)
            } else {
                return 'can`t format this time: "' + time + '"'
            }
            // 数字类型时间戳
        } else if (tp === 'number') {
            if ((time + '').length === 10) {
                time *= 1000
            } else if ((time + '').length < 13 || (time + '').length >= 17) {
                return 'can`t format this time: "' + time + '"'
            }
            // 已经格式化的字符串但不能识别或者时间对象不能识别时
        } else if (new Date(time).toString() === 'Invalid Date') {
            return 'can`t format this time: "' + time + '"'
        }
        // eslint-disable-next-line one-var
        let _date = new Date(time),
            Y = _date.getFullYear(),
            M = _date.getMonth() + 1,
            D = _date.getDate(),
            h = _date.getHours(),
            m = _date.getMinutes(),
            s = _date.getSeconds()
        M = M < 10 ? '0' + M : M
        D = D < 10 ? '0' + D : D
        h = h < 10 ? '0' + h : h
        m = m < 10 ? '0' + m : m
        s = s < 10 ? '0' + s : s
        switch (type) {
        case 'YY-mm-dd':
            return Y + '-' + M + '-' + D
        case 'YY-mm-dd HH:mm':
            return Y + '-' + M + '-' + D + ' ' + h + ':' + m
        case 'YY-mm-dd HH:mm:ss':
            return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
        default:
            return _date
        }
    },
    /**
     * 序列化Object参数
     * @param params Object 参数对象
     */
    serializeParams(params) {
        if (typeof params !== 'object') {
            return
        }
        let _str = ''
        for (let prop in params) {
            _str += prop + '=' + (typeof params[prop] === 'object' ? JSON.stringify(params[prop]) : (params[prop] === undefined ? '' : params[prop])) + '&'
        }
        return _str === '' ? '' : _str.substr(0, _str.length - 1)
    }
}
