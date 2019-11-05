import { mapState } from 'vuex'
export default {
    name: 'my-friendlink',
    mounted() {
        const { dispatch } = this.$store
        dispatch('getFriendlinkData', {})
    },
    computed: {
        ...mapState({
            friendlinkData: state => state.index.friendlinkData
        })
    }
}
