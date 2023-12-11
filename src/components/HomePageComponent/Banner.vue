<template>
  <div id="welcome_div">
    <h1>{{ welcomemsg }}</h1>
  </div>
</template>

<script setup>
defineProps(["welcomemsg"]);
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3rem;
}

#welcome_div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-bottom: solid 1px black;
  color: rgb(54, 126, 89);
}
</style>
