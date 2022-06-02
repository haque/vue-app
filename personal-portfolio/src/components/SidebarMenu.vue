<template>
    <i class="fa fa-bars" id="menu-toggle"></i>
    <div id="menu" class="menu">
        <i class="fa fa-times" id="menu-close"></i>
        <div class="container">
        <div class="image">
            <a href="#"><img src="../assets/images/author-image.jpg" alt="" /></a>
        </div>
        <div class="author-content">
            <h4>Reflux Me</h4>
            <span>Web Designer</span>
        </div>
        <nav class="main-nav" role="navigation">
            <ul class="main-menu">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/service">Service</router-link></li>
            <li><router-link to="/my-work">My Work</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
        <div class="social-network">
            <ul class="soial-icons">
            <li>
                <a href="https://fb.com/templatemo"
                ><i class="fa fa-facebook"></i
                ></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-linkedin"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-dribbble"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-rss"></i></a>
            </li>
            </ul>
        </div>
        <div class="copyright-text">
            <p>Copyright 2019 Reflux Design</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>