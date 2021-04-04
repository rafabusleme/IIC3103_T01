<template>
  <div class="search-container">
    <input
      v-model="characterName"
      class="search-input"
      type="text"
      placeholder="Busca a un personaje..."
    />
    <button class="search-button" @click="searchCharacter">Buscar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characterName: '',
    }
  },
  methods: {
    searchCharacter() {
      this.$router.push({
        path: `/character`,
        query: { name: this.characterName },
      })
      this.characterName = ''
    },
  },
}
</script>

<style>
.search-container {
  background-color: #369457;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-right: 40px;
}
.search-input {
  background-color: beige;
  border: none;
  padding: 10px;
}
.search-button {
  background-color: #1f6032;
  border: none;
  padding: 10px;
  color: beige;
  font-weight: bold;
  cursor: pointer;
}
.search-button:hover {
  background-color: #29773e;
}
</style>
