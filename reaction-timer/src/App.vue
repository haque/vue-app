<template>
  <h1>Reaction Timer App</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <BlockCamp v-if="isPlaying" :delay="delay" @end="endGame"/>
  <ResultsCamp v-if="showResults" :score="score" />
</template>

<script>
import BlockCamp from './components/BlockCamp.vue'
import ResultsCamp from './components/ResultsCamp.vue'

export default {
  name: 'App',
  components: { BlockCamp, ResultsCamp },
  data(){
    return{
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods:{
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
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
</style>
