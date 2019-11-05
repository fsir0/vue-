<template>
    <div class="index">
        <my-nav />
        <my-content />
        <my-content />
        <my-friendlink />
    </div>
</template>

<script>
import myNav from '@/components/index/nav/nav.vue'
import myContent from '@/components/index/content/content.vue'
import myFriendlink from '@/components/index/friendlink/friendlink.vue'
export default {
    name: 'index',
    components: {
        myNav,
        myContent,
        myFriendlink
    }
}
</script>
