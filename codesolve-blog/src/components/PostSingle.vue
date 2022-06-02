<template>
  <div class="post-details">
     <router-link :to="{ name: 'details', params: { id: post.id } }"><h3>{{ post.title }}</h3></router-link>
     <p>{{ senippt }}</p>
     <span v-for="tag in post.tags" :key="tag">
         #{{ tag }}
     </span>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['post'],
    setup(props){
        const senippt = computed( () => {
            return props.post.body.substring(0, 100) + '.....'
        } )
        return { senippt }
    }
}
</script>

<style>

</style>