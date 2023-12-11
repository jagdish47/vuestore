<template>
  <div id="container">
    <div id="lhs">
      <img :src="productData.imageUrl" />
    </div>
    <div id="rhs">
      <p>{{ productData.title }}</p>
      <p>{{ productData.price }}</p>
      <q-btn
        @click="addtoCart(productData)"
        id="addtocart_btn"
        color="black"
        label="Add to Cart"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { doc, getDoc, db } from "../../firebase";
import { useRoute } from "vue-router";

import { useCartStore } from "../../store.js"; //importing store from store.js

export default {
  setup() {
    const route = useRoute();
    const productData = ref({});

    const cartStore = useCartStore();

    const addtoCart = (productData) => {
      cartStore.addtoCart(productData);
    };

    onMounted(async () => {
      try {
        const docRef = doc(db, "vuestore", route.params.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          let prod = docSnap.data();
          prod.id = docSnap.id;
          productData.value = prod;
          console.log("Document data:", productData.value);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    });

    return {
      productData,
      addtoCart,
    };
  },
};
</script>

<style scoped>
#addtocart_btn {
  width: 50%;
}

#container {
  display: flex;
  margin-top: 5%;
}

#lhs {
  display: flex;
  flex: 4;
}

#lhs img {
  width: 90%;
}

#lhs {
  display: flex;
  flex: 6;
}

#rhs {
  display: flex;
  flex: 6;
  flex-direction: column;
  margin-left: 3%;
  font-size: 180%;
}
</style>
