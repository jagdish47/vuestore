<template>
  <div>
    <div id="navbar">
      <router-link to="/">
        <div id="lhs">Home</div>
      </router-link>
      <div id="rhs">
        <router-link to="/admin">
          <div>Account</div>
        </router-link>
        <div id="cart">
          <q-icon @click="dialog = !dialog" name="shopping_cart" />
          <div id="cart_count">{{ store.cartCount }}</div>
          <cartPopupComponent :dialogVisibility="dialog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../../store";
import cartPopupComponent from "../CartComponents/cartPopup.vue";
import router from "../../router";

const dialog = ref(false);

const store = useCartStore();
</script>

<style scoped>
#navbar {
  display: flex;
  height: 70px;
  align-items: center;
  font-size: 130%;
  border-bottom: 1px solid black;
}

#lhs {
  display: flex;
  flex: 3;
  align-items: center;
}

#rhs {
  display: flex;
  flex: 7;
  gap: 10%;
  align-items: center;
  justify-content: flex-end;
}

#cart {
  display: flex;
  align-items: center;
}

#cart_count {
  padding-bottom: 12px;
}

a {
  text-decoration: none;
  color: green;
}
</style>
