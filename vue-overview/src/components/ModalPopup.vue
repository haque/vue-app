<template>
    <div>
        <div class="backdrop" @click.self="closeModal"> 
            <div class="modal" :class="{sale: theme === 'sale'}">
                <slot></slot>
                <div class="custom-link">
                    <slot name="links"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        //props: ['header', 'text', 'theme'],
        props: ['theme'],
        methods: {
            closeModal(){
                this.$emit('close')
            }
        }
    }
</script>

<style>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: rgb(255, 0, 0);
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1{
        color:bisque;
        margin-bottom:20px;
    }
    .modal p{
        font-style: normal;
        color: #fff
    }
    .modal a {
        border: 1px solid #fff;
        margin-right: 15px;
        border-radius: 5px;
        padding: 10px 20px;
        margin-top: 30px;
        display: inline-block;
        color: #fff;
        text-decoration: none;
    }
</style>