<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome to modal....</p>
    <teleport to=".modals" v-if="showModal">
      <!-- <ModalPopup :header="header" :text="text" theme="sale" @close="handleModal" /> -->
      <ModalPopup theme="sale" @close="handleModal">
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
        <template v-slot:links>
          <a href="#">Sign Up</a>
          <a href="#">More Info</a>
        </template>
      </ModalPopup>
    </teleport>

    <teleport to=".modals" v-if="showModalTwo">
      <ModalPopup theme="sale" @close="handleModalTwo">
        <h1>Sign Up newsletter</h1>
        <p>To promo codes</p>
      </ModalPopup>
    </teleport>
    <button @click="handleModal">Show/Hide Me</button>
    <button @click="handleModalTwo">Show/Hide Modal Two</button>

  </div>
</template>

<script>
import ModalPopup from './components/ModalPopup.vue'
export default {
  name: 'App',
  components:{ ModalPopup },
  data(){
    return {
      title: 'My first vue App!',
      header: 'Sign Up for the giveway',
      text: 'Grab your ninja swang for half price',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleModal(){
      this.showModal = !this.showModal
    },
    handleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
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
