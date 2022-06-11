<template>
  <div class="container mt-4">
    <div class="row">
        <div class="col">
            <img src="../assets/loading.gif" alt="loading" class="d-block m-auto spinner-size">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SpinnerView'
}
</script>

<style>
    .spinner-size {
        max-width: 150px;
        width: 100%;
    }
</style>