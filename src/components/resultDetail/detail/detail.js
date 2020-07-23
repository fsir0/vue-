import { elRate } from 'element-ui'
export default {
    name: 'detail',
    component: {
        elRate
    },
    data() {
        return {
            positionDialogShow: false,
            rate: 4.5
        }
    },
    methods: {
        // 展示位置弹窗
        handleShowPosition() {
            const me = this
            me.positionDialogShow = true
            setTimeout(() => {
                let $map = new me.AMap.Map(me.$refs.mapWrapper, {
                    center: [116.397428, 39.90923],
                    zooms: [1, 20],
                    zoom: 13
                })
                let pointMarker = new me.AMap.Marker({
                    position: new me.AMap.LngLat(116.397428, 39.90923)
                })
                $map.add(pointMarker)
            }, 0)
        }
    }
}
