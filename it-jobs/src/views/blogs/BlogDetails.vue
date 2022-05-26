<template>
  <div v-if="post" class="post-details" :id="'post-id-'+post.id">
      <!-- {{ $router.push('/404') }} -->
    <h1>Title: {{ post.title }}</h1>
    <article>
        <!-- {{ $route.params.id }} -->
        <h2>Description</h2>
        <div v-if="post.image" class="image-single">
            <img :src="post.image" :alt="post.title">
        </div>
        <p>{{ post.desc }}</p>
    </article>
  </div>
  <div v-else>
      Loading post details.....
  </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            post: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/blogs/'+ this.id)
        .then(res => res.json())
        .then(data => this.post = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>