<template>
  <div class="job-details-content">
    <div v-if="job" class="job-details">
      <div class="job-details-box" :id="'job-id-'+job.id">
        <h1>Job Title: {{ job.title }}</h1>
        <article>
          <h2>Job Description</h2>
          <p>{{ job.desc }}</p>
        </article>
      </div>
    </div>
    <div v-else>
      <h1>Loading job details.....</h1>
    </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
          //id: this.$route.params.id,
          job: null
        }
    },
    mounted(){
      fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
    }
}
</script>

<style>
.job-details{
  text-align: left;
}
</style>