<template>
    <div class="about">
        <h1>{{name}}</h1>
        <h2>{{stateCount}}</h2>
        <button @click="countAdd">click me and add the number</button>
        <HellowWorld msg="weleclome to you Vue.js app project!"></HellowWorld>
    </div>
</template>

<script>
import HellowWorld from "../components/page1/component1/helloWorld.vue";
import { mapState } from "vuex";
export default {
    name: "page1",
    components: {
        HellowWorld
    },
    data() {
        return {
            name: "testName"
        };
    },
    methods: {
        countAdd() {
            this.name = "testing Name";
            this.$store.dispatch("dispatchAdd");
            this.$store.dispatch("dispatchUploadWarning", "");
        }
    },
    computed: {
        // 使用mapState引入state变化的计算属性，computed中可方便添加其他计算属性
        ...mapState({
            stateCount: state => state.stateTest.count
        })
    }
};
</script>

<style scoped>
button {
    width: auto;
}
</style>