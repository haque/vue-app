<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Contact Manager
          <router-link :to="{ name: 'AddContact' }" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i> New</router-link>
        </p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos dignissimos debitis officiis quasi nam commodi vero, fuga impedit, mollitia quo, aperiam obcaecati? Doloremque illum labore mollitia iusto inventore hic.
        </p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input v-model="search" type="text" class="form-control" placeholder="Search Contact">
                </div>
                <!-- <div class="col">
                  <button class="btn btn-outline-dark">Search</button>
                </div> -->
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Spinner -->
  <SpinnerView  v-if="loading" />

  <!-- Error Message  -->

  <div class="container mt-4" v-if="!loading && errorMessage">
    <div class="row">
      <div class="col">
        <p class="text-danger text-center">{{ errorMessage }}</p>
      </div>
    </div>
  </div>

  <div class="container mt-3" v-if="contacts.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contact of filterContacts" :key="contact">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img :src="contact.photo" alt="" class="contact-image">
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Name: <span class="fw-bold">{{ contact.name }}</span></li>
                  <li class="list-group-item">Email: <span class="fw-bold">{{ contact.email }}</span></li>
                  <li class="list-group-item">Mobile: <span class="fw-bold">{{ contact.mobile }}</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link :to="{ name: 'ViewContact', params:{ id: contact.id } }" class="btn btn-warning my-1">
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link :to="{ name: 'EditContact', params:{ id: contact.id } }" class="btn btn-primary my-1">
                  <i class="fa fa-pen"></i>
                </router-link>
                <button class="btn btn-danger my-1" @click="handleContactDelete(contact.id)">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '@/service/ContactService'
import SpinnerView from '@/components/SpinnerView.vue'

export default {
  name: 'ContactManager',
  components: { SpinnerView },
  data: function(){
    return{
      search: '',
      deleteMessage: 'Do you really want to delete this contact?',
      loading: false,
      contacts: [],
      errorMessage: null
    }
  },

  created: async function(){
    try{
      this.loading = true
      let response = await ContactService.getAllContacts()
      this.contacts = response.data
      this.loading = false
    }
    catch(error){
      this.errorMessage = error
      this.loading = false
    }
  },

  methods: {
    handleContactDelete: async function(contactId){
      const deleteMsg = confirm(this.deleteMessage)
      if(deleteMsg){
        try{
          this.loading = true
          let response = await ContactService.deleteContact(contactId)
          if( response ){
            let contactResponse = await ContactService.getAllContacts()
            this.contacts = contactResponse.data
            this.loading = false
          }
          
        }
        catch(error){
          this.errorMessage = error
          this.loading = false
        }
      }
    },
  },

  computed: {
    filterContacts: function(){
      let tempCntacts = this.contacts

      //Filter Contacts
      tempCntacts = tempCntacts.filter( (contact) =>{
        return contact.name.toLowerCase().match(this.search.toLowerCase()) // includes == match
      } )

      //Sort Contact ase/desc
      tempCntacts = tempCntacts.slice().sort(function(a, b){
        return (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1;
      });

      return tempCntacts;
    }
  }
}
</script>

<style>

</style>