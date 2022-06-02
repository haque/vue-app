<template>
  <div id="page-wraper">
    <!-- Sidebar Menu -->
    <div class="responsive-nav">
      <SidebarMenu />
    </div>
    <router-view/>
  </div>
</template>
<script>
import  SidebarMenu from './components/SidebarMenu.vue'

export default {
  name: 'App',
  components: { SidebarMenu }
}
</script>

<style>
#app {
  overflow: hidden;
}
</style>
