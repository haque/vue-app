<template>
  <div class="home">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else class="posts">
      <div v-if="posts.length">
        <PostList :posts="posts"/>
      </div>
      <div v-else>Loading.....</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts'
export default {
  name: 'HomeView',
  components: {
    PostList
  },
  setup(){
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
}
</script>
