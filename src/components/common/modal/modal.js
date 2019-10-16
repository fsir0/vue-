export default {
    name: 'modal',
    props: {
        showModal: {
            type: Boolean
        },
        nofooter: {
            type: Boolean
        }
    },
    data() {
        return {
            footer: !this._props.nofooter
        }
    },
    methods: {
        confirm(e) {
            this.$emit('confirm', e)
        },
        cancel(e) {
            this.$emit('cancel', e)
        }
    }
}
