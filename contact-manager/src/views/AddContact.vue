<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Add Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore error ipsa soluta iure dolor architecto, fuga ab eos quia in laborum ut illo exercitationem cumque numquam fugiat accusantium voluptates aliquam!</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="handleContactSubmit">
          <div class="mb-2">
            <input v-model="contact.name" required="true" type="text" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <input v-model="contact.photo" required="true" type="text" class="form-control" placeholder="Photo URL">
          </div>
          <div class="mb-2">
            <input v-model="contact.email" required="true" type="email" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input v-model="contact.mobile" required="true" type="text" class="form-control" placeholder="Mobile">
          </div>
          <div class="mb-2">
            <input v-model="contact.company" required="true" type="text" class="form-control" placeholder="Company">
          </div>
          <div class="mb-2">
            <input v-model="contact.title" required="true" type="text" class="form-control" placeholder="Title">
          </div>
          <div class="mb-2">
           <select v-model="contact.groupId" required="true" class="form-control" v-if="groups.length > 0">
             <option value="">Select Group</option>
             <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
           </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create">
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-image">
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '@/service/ContactService'
export default {
    name: 'AddContact',
    data: function(){
      return{
        contact:{
          name: '',
          photo: '',
          email: '',
          mobile: '',
          company: '',
          title: '',
          groupId: ''
        },
        groups: []
      }
    },
    created: async function(){
      try{
        let response = await ContactService.getAllGroups()
        this.groups = response.data
      }
      catch(error){
        console.log(error)
      }
    },

    methods: {
      handleContactSubmit: async function(){
        try{
          let response = await ContactService.createContact(this.contact)
          if( !response ){
            return this.$router.push('/contacts/add')
          }
          else{
            return this.$router.push('/')
          }
        }
        catch(error){
          console.log(error)
        }
      }
    }
}
</script>

<style>

</style>