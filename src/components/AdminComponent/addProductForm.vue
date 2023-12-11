<template>
  <div id="addproductform">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="form.title"
        label="Product Title *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="form.price"
        label="Product Price *"
        lazy-rules
      />

      <q-file
        v-model="file"
        label="Choose Product Image"
        @update:modelValue="fileupload"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import {
  getStorage,
  ref as firebaseref,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
  collection,
  db,
} from "../../firebase.js";
const file = ref(null);

const form = reactive({
  title: "",
  price: 0,
  imageUrl: "",
});

const onSubmit = async () => {
  try {
    //addDoc(collection(db, "NameOfCollection"),DataToSend(as Object))
    const docRef = await addDoc(collection(db, "vuestore"), form);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const fileupload = () => {
  const storage = getStorage(); //Initializing storage
  const storageRef = firebaseref(storage, "products/" + file.value.name); //path to store at firebase
  const uploadTask = uploadBytesResumable(storageRef, file.value); //passing file data

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {},
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        form.imageUrl = downloadURL;
      });
    }
  );
};
</script>

<style scoped>
#addproductform {
  width: 50%;
}
</style>
