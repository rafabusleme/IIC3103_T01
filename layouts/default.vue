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
  box-sizing: border-box;
}
.app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #032202;
  background-image: url('../assets/imgs/app-background.jpg');
  background-size: contain;
  box-sizing: border-box;
  color: beige;
}
button {
  background-color: #29773e;
  color: white;
  padding: 10px;
  border: 1px solid #032202;
  cursor: pointer;
}
</style>
