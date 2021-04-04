<template>
  <div class="bullet-container">
    <img v-if="img" :src="img" alt="" />
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Example Title',
    },
  },
}
</script>

<style scoped>
.bullet-container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  margin: 5px 10px;
  border: 2px solid #032202;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.bullet-container:hover {
  transform: scale(1.05);
}
img {
  width: 20%;
  height: 50%;
  max-height: 50px;
  border-radius: 100px;
  margin-right: 20px;
}
</style>
