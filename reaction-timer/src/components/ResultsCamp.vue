<template>
  <p>Reaction Time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data(){
        return {
            rank: null
        }
    },
    mounted(){
        if( this.score < 250 ){
            this.rank = 'Much Better'
        }else if( this.score < 400 ){
            this.rank = 'Rapid Reflexes'
        }else{
            this.rank = 'Snail Pace......'
        }
    }
}
</script>

<style>
    .rank{
        color:rgb(6, 177, 120);
        font-size: 1.4rem;
        font-weight: bold;
    }
</style>