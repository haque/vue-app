<template>
  <div class="click" v-if="showBlock" @click="stopTimer">
      <span>click Me</span>
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
      return {
        showBlock: false,
        timer: null,
        reactionTime: 0
      }
    },
    mounted(){
      console.log('components mounted')
      setTimeout(() => {
        this.showBlock = true
        console.log(this.delay);
        this.startTimer()
      }, this.delay)
      
    },
    methods:{
      startTimer(){
        this.timer = setInterval(() =>{
          this.reactionTime += 10;
        }, 10)
      },
      stopTimer(){
        clearInterval(this.timer)
        this.$emit('end', this.reactionTime)
      }
    }
}
</script>

<style>
  .click {
      width: 300px;
      height: 200px;
      background: green;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px auto;
  }
  button{
    background: green;
    color:#fff;
    border:none;
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
  }
  button[disabled]{
    opacity: .2;
    cursor: not-allowed;
  }
</style>