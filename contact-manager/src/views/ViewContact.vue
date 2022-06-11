<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, doloremque porro. Cumque deserunt veniam magni architecto eligendi nesciunt fugit fuga, asperiores eum, culpa repellendus porro quibusdam animi magnam numquam atque?</p>
      </div>
    </div>
  </div>
  <!-- Spinner -->
  <SpinnerView v-if="loading" />

  <div class="container" v-if="!loading && errorMessage">
    <div class="row">
      <div class="col">
        <h4 class="text-danger fw-bold text-center">{{ errorMessage }}</h4>
      </div>
    </div>
  </div>
  <div class="container mt-3" v-if="!loading && isDone">
    <div class="row align-items-center ">
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-image-big">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name: <span class="fw-bold">{{ contact.name }}</span></li>
          <li class="list-group-item">Email: <span class="fw-bold">{{  contact.email}}</span></li>
          <li class="list-group-item">Mobile: <span class="fw-bold">{{ contact.mobile }}</span></li>
          <li class="list-group-item">Company: <span class="fw-bold">{{ contact.company }}</span></li>
          <li class="list-group-item">Title: <span class="fw-bold">{{ contact.title }}</span></li>
          <li class="list-group-item">Group: <span class="fw-bold">{{ group.name }}</span></li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '@/service/ContactService'
import SpinnerView from '@/components/SpinnerView.vue';

export default {
  name: 'ViewContact',
  components: { SpinnerView },
  data: function(){
    return{
      loading: false,
      contact: {},
      errorMessage: null,
      group: {},
      contactId: this.$route.params.id
    }
  },
  created: async function(){
    try{
      this.loading = true;
      let response = await ContactService.getContact(this.contactId)
      this.contact = response.data
      // Get group data by contact
      let groupResponse = await ContactService.getGroup(response.data)
      this.group = groupResponse.data

      this.loading = false;
    }
    catch(error){
      this.errorMessage = error
      this.loading = false
    }
  },
  methods: {
    isDone: function(){
      return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0
    }
  }
}
</script>

<style>

</style>