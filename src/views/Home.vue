<template>
  <div id="container">
    <NavbarComponent />
    <BannerComponent welcomemsg="Welcome to Vuestore" />
    <ProductComponent />
  </div>
</template>

<script setup>
import NavbarComponent from "../components/HomePageComponent/Navbar.vue";
import BannerComponent from "../components/HomePageComponent/Banner.vue";
import ProductComponent from "../components/HomePageComponent/Products.vue";
</script>

<style scoped>
#container {
  padding-left: 2%;
  padding-right: 2%;
}
</style>
