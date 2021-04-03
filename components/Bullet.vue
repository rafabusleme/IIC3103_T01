<template>
  <div class="bullet-container">
    <img v-if="img" src="" alt="" />
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

<style>
.bullet-container {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  margin: 10px;
  border: 1px solid black;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.bullet-container:hover {
  transform: scale(1.05);
}
</style>
