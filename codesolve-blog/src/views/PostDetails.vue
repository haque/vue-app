<template>
  <div class="post-details">
      <div v-if="error">{{ error }}</div>
      <div v-else>
          <div v-if="post">
              {{ post.title }}
              <article v-html="post.body"></article>
          </div>
          <div v-else>Loading.....</div>
      </div>
  </div>
</template>

<script>
import getPost from '../composables/getPost'
export default {
    props: ['id'],
    setup(props){
        const { post, error, load } = getPost(props.id)
        load()
        return { post, error }
    }
}
</script>

<style>

</style>