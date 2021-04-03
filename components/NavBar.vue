<template>
  <div class="nav-container">
    <div class="items">
      <nuxt-link to="/" class="item">Home</nuxt-link>
      <nuxt-link to="/about" class="item">About</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.nav-container {
  background-color: #369457;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.items {
  display: flex;
}
.item {
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.item:hover {
  background-color: #1f6032;
}
</style>
