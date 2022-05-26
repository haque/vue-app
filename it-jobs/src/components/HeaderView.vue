<template>
  <header>
    <div class="block">
      <div class="header-block">
        <div class="branding">
          <router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link>
        </div>
        <div class="menu">
          <nav>
            <router-link to="/">Home</router-link> |
            <router-link :to="{ name: 'about' }">About</router-link> |
            <router-link :to="{ name: 'jobs' }">Jobs</router-link> |
            <router-link :to="{ name: 'blog' }">Blog</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.header-block {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background: #ebe9e9;
    padding: 0 15px;
}
</style>