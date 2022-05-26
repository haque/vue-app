<template>
  <HeaderView />
  <!-- <div>
    <button @click="redirect">Redirect</button>
    <button @click="goBack">Go Back</button>
    <button @click="goForward">Go Forward</button>
  </div> -->
 <div class="block">
   <div class="content-wrap">
      <router-view/>
   </div>
 </div>
  <FooterView />
</template>

<script>
  import HeaderView from './components/HeaderView.vue'
  import FooterView from './components/FooterView.vue'

  export default{
    components: { HeaderView, FooterView },
    data(){
      return {
        src: ''
      }
    },
    methods: {
      // redirect(){
      //   this.$router.push({name: 'home'});
      // },
      // goBack(){
      //   this.$router.go(-1)
      // },
      // goForward(){
      //   this.$router.go(1)
      // }
    } 
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 0 8px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
