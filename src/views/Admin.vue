<template>
  <div>
    <NavbarComponent />
    <h4>Add Product</h4>
    <AddProductFormComponent />
  </div>
</template>

<script setup>
import AddProductFormComponent from "../components/AdminComponent/addProductForm.vue";
import NavbarComponent from "../components/HomePageComponent/Navbar.vue";
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  contact: 0,
  city: "",
  age: 0,
});

const name = ref("");
const number = ref(0);
</script>

<style scoped>
h4 {
  font-size: 1rem;
  font-weight: 600;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
