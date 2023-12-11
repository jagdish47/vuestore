# vuestore

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# Learning VueJS Notes

```
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
    <h3>Count - {{ count }}</h3>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
// Composition API -> Modern way
import { ref } from "vue";
defineProps(["msg", "msg2"]);

let count = ref(0); //reactivity

const increment = () => {
  count.value++;
  console.log("Counter : ", count);
};

/**
 * Options API -> older way Vue 2.0
 export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
    },
  },
};
 */
</script>
<style scoped></style>

```

## How to Fetch Data in VueJs

```

  const responseData = ref(null); //REACTIVE VARIABLE //initially it is null or empty array

    onMounted(async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        responseData.value = response.data;  //when the data got we change ref
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    return {
      responseData,
    };
```

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCpyWK4iMMXk_vN2ySBs4IB2N5TIquxdRM",
authDomain: "vuestore-40419.firebaseapp.com",
projectId: "vuestore-40419",
storageBucket: "vuestore-40419.appspot.com",
messagingSenderId: "237229832178",
appId: "1:237229832178:web:c1bc048c9b72fd2ad95d6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
