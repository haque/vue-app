<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Edit Contact</p>
        <p class="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum enim rerum praesentium eum mollitia et, sint accusamus, reiciendis consequuntur consequatur? Velit similique inventore dicta incidunt architecto corporis at nihil?</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="handleContactUpdate">
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
          <div class="mb-2" v-if="groups.length > 0">
           <select v-model="contact.groupId" required="true" class="form-control">
             <option value="">Select Group</option>
             <option :value="group.id" v-for="group in groups" :key="group.id">{{ group.name }}</option>
           </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Update">
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
  name: 'EditContact',
  data : function(){
    return{
      contactId: this.$route.params.id,
      loading: false,
      errorMessage: null,
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
      this.loading = true
      let response = await ContactService.getContact(this.contactId)
      this.contact = response.data
      // Get group data by contact
      let groupResponse = await ContactService.getAllGroups()
      this.groups = groupResponse.data
      this.loading = false
    }
    catch(error){
      this.errorMessage = error
      this.loading = false
    }
  },
  methods: {
    handleContactUpdate: async function(){
      try{
        let response = await ContactService.updateContact(this.contact, this.contactId)
        if( !response ){
          return this.$router.push(`/contacts/edit/${this.contactId}`)
        }else{
          return this.$router.push('/')
        }
      }
      catch(error){
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>