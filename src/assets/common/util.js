export default {
    /**
     * 格式化时间
     * @param time Number|String|TimeObj    数字、字符串类型10、13位的时间戳，或者时间对象
     * @param type String   格式：YY-mm-dd|YY-mm-dd HH:mm|YY-mm-dd HH:mm:ss
     * @return String 返回格式化时间
     */
    formatTime(time, type) {
        if (!time) {
            return ''
        }
        let tp = typeof (time)
        if (tp === 'string' || tp === 'number') {
            if ((parseInt(time) + '').length === 10) {
                time *= 1000
            } else {
                time = parseInt(time)
            }
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
    }
}
