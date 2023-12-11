import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const total = ref(0);
  const cartCount = computed(() => cart.value.length);

  const addtoCart = (product) => {
    cart.value.push(product);
    total.value += +product.price;
  };

  const removefromCart = (id) => {
    cart.value = cart.value.filter((product) => product.id !== id);
    console.log(total.value);
  };

  return { cartCount, cart, addtoCart, removefromCart, total };
});
