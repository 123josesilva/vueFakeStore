<script setup>
</script>

<template>
  <div id="nav">
    <div id="logo-fake">My Fake Store</div>
    <router-link to="/">Home</router-link> -
    <router-link to="/carrinho">Carrinho (0)</router-link>
  </div>
  <RouterView />
</template>

<style scoped>
#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  color: white;
  box-shadow: 2px 2px 5px #9c9a9a;
}

a {
  color: white;
  text-decoration: none;
}

.router-link-exact-active {
  color: #007bff;
}
</style>
