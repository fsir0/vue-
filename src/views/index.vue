<template>
    <div class="index">
        <my-nav />
        <my-content />
        <my-content />
    </div>
</template>

<script>
import myNav from '@/components/index/nav/nav.vue'
import myContent from '@/components/index/content/content.vue'
export default {
    name: 'index',
    components: {
        myNav,
        myContent
    }
}
</script>
