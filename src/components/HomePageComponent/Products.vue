<template>
  <div id="products">
    <div
      v-for="element in products"
      @click="showProduct(element.id)"
      id="individual_product"
    >
      <img :src="element.imageUrl" />
      <p>{{ element.title }}</p>
      <p>{{ element.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { db, collection, getDocs } from "../../firebase";

const products = ref([]);

const router = useRouter();

const showProduct = (id) => {
  console.log({ id });
  router.push(`productdetails/${id}`);
};

const getData = async () => {
  const result = await getDocs(collection(db, "vuestore"));

  result.forEach((doc) => {
    let product = doc.data();
    product.id = doc.id;
    products.value.push(product);
  });
};

onMounted(async () => {
  getData();
});
</script>

<style scoped>
#products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3%;
  grid-gap: 3%;
}

#products img {
  width: 100%;
}
</style>
