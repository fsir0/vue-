<template>
    <div class="about">
        <h1>{{stateCount}}</h1>
        <button class="page1-btn" @click="countAdd">click me and add the number</button>
        <HellowWorld></HellowWorld>
    </div>
</template>

<script>
import HellowWorld from '../components/page1/component1/helloWorld.vue'
import { mapState } from 'vuex'
export default {
    name: 'page1',
    components: {
        HellowWorld
    },
    methods: {
        countAdd () {
            this.$store.dispatch('dispatchAdd')
            if (this.stateCount < 0) {
                this.$store.dispatch('duWarning', '996')
            } else {
                this.$store.dispatch('duWarning', '')
            }
        }
    },
    computed: {
        // 使用mapState引入state变化的计算属性，computed中可方便添加其他计算属性
        ...mapState({
            stateCount: state => state.stateTest.count
        })
    }
}
</script>

<style scoped>
.page1-btn {
    width: auto;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 3px;
    text-align: center;
    color: #00d3ff;
    cursor: pointer;
    margin-bottom: 10px;
}
</style>
