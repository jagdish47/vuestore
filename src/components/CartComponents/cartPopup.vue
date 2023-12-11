<template>
  <div id="cart">
    <q-dialog :seamless="true" :modelValue="dialogVisibility" :position="right">
      <q-card id="cart_card">
        <q-card-section>
          <div>
            <h4>Recently Added Items</h4>
          </div>
          <h6>Cart Total = {{ cartStore.total }}</h6>

          <q-space />

          <div v-for="product in cartStore.cart" id="cart_products">
            <div id="card_product">
              <div id="lhs">
                <img :src="product.imageUrl" alt="" />
              </div>
              <div id="rhs">
                <p>{{ product.title }}</p>
                <p>{{ product.price }}</p>
                <q-icon @click="removeCart(product.id)" name="delete" />
              </div>
            </div>
          </div>

          <div id="place_order">
            <router-link to="/orders">
              <q-btn color="secondary" label="Proceed" />
            </router-link>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../../store.js";

defineProps(["dialogVisibility"]);
const dialog = ref(true);
const cartStore = useCartStore();

console.log(cartStore);

const removeCart = (id) => {
  cartStore.removefromCart(id);
};
</script>

<style scoped>
#cart_card {
  height: 900px;
  margin-top: 10%;
  width: 300px;
}

#card_product {
  display: flex;
  border: 1px solid black;
}

#cart_product div {
  border: solid 1px black;
  margin-top: 4%;
}

#lhs {
  display: flex;
  flex: 6;
}

#lhs img {
  width: 40%;
}

#rhs {
  display: flex;
  flex: 4;
  flex-direction: column;
}

#place_order {
  margin-top: 5%;
  margin-bottom: 5%;
}

a {
  text-decoration: none;
}
</style>
