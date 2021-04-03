<template>
  <div class="app-container">
    <NavBar />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('../assets/imgs/app-background.jpg');
  background-size: cover;
  box-sizing: border-box;
}
</style>
