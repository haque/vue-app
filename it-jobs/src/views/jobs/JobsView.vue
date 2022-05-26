<template>
    <div class="jobs-content">
        <h1>Jobs</h1>
        <div v-if="jobs.length">
            <div class="job-box" v-for="job in jobs" :key="job.id" :id="'job-id-'+job.id">
                <router-link :to="{ name: 'job-details', params:{ id: job.id } }"><h2>{{ job.title }}</h2></router-link>
            </div>
        </div>
        <div v-else>
            <h3>Loading Jobs...</h3>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            jobs:[]
        }
    },
    mounted(){ // Mounted hook
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
.job-box h2{
    background: #f4f4f4;
    padding: 10px;
    cursor: pointer;
    color: #444;
}
.job-box h2:hover{
    background: #ddd;
}
.job-box a{
    text-decoration: none;
}
</style>