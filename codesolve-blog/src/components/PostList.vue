<template>
    <div class="post-lists">
        <div v-for="post in posts" :key="post.id" class="post-list">
            <PostSingle :post="post" />
        </div>
    </div>
</template>

<script>
import PostSingle from '@/components/PostSingle.vue'
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
export default {
    props: ['posts'],
    components: { PostSingle },
    setup(){
        onMounted(()=> console.log('On Mounted'))
        onUnmounted(()=> console.log('un mounted'))
        onUpdated(()=>console.log('on updated'))
    }
}
</script>

<style>

</style>