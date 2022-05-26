<template>
  <div class="blog">
    <h1>Blog Page</h1>
    <div v-if="posts.length" class="posts">
      <article v-for="post in posts" :key="post.id" class="post-box">
        <router-link :to="{ name: 'blog-details', params:{id: post.id} }"><h2>{{ post.title }}</h2></router-link>
      </article>
    </div>
    <div v-else>
      Loding posts.....
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      posts: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/blogs')
    .then(res => res.json())
    .then(data => this.posts = data)
    .catch(err => console.log(err.message))
  }
}
</script>

<style>
  .post-box h2{
      background: #f4f4f4;
      padding: 10px;
      cursor: pointer;
      color: #444;
  }
  .post-box h2:hover{
      background: #ddd;
  }
  .post-box a{
      text-decoration: none;
  }
</style>