<template>
  <div>
    <h1>{{ title }}</h1>
    <ModalPopup header="The Popup is done" text="this is some modal content" />
  </div>
</template>

<script>
import ModalPopup from './components/ModalPopup.vue'
export default {
  name: 'App',
  components:{ ModalPopup },
  data(){
    return {
      title: 'My first vue App!'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #2c3e50;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
