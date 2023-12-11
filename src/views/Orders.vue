<template>
  <Navbar />
  <div id="container">
    <q-form @submit="onSubmit" class="q-gutter-md" id="orders_form">
      <q-input filled v-model="form.name" label="Your Name *" lazy-rules />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Your Contact *"
        lazy-rules
      />
      <q-input
        filled
        v-model="form.address"
        label="Your Address *"
        lazy-rules
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import Navbar from "../components/HomePageComponent/Navbar.vue";
import { reactive } from "vue";
import { useCartStore } from "../store.js";
import { collection, addDoc, db } from "../firebase";

const cartStore = useCartStore();

const onSubmit = async () => {
  const docRef = await addDoc(collection(db, "orders"), form);
  console.log("Document written with id:", docRef.id);
};

const form = reactive({
  name: "",
  contact: null,
  address: "",
  order: cartStore.cart,
  total: cartStore.total,
});

console.log(form);
</script>

<style scoped>
#container {
  margin-top: 10%;
}

#orders_form {
  width: 50%;
}
</style>
