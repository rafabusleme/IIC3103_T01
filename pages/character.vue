<template>
  <div class="character-container">
    <div class="characters-title">Resultados para: {{ $route.query.name }}</div>
    <div v-if="characters" class="characters-data">
      <div class="characters">
        <bullet
          v-for="(char, index) in characters"
          :key="index"
          class="bullet"
          :img="char.img"
          :title="char.name"
          @click.native="openModal(char.name)"
        />
      </div>
      <div class="pagination">
        <button v-if="page > 1" @click="getMoreCharacters(false)">Prev</button>
        <button v-if="characters.length == 10" @click="getMoreCharacters()">
          Next
        </button>
      </div>
    </div>

    <character-modal
      v-if="showModal"
      :character-name="characterName"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import {
  getCharacterByName,
  getPaginatedCharacters,
} from '@/services/breakingBad'
import CharacterModal from '@/components/Modal/CharacterModal'
export default {
  components: { CharacterModal },
  data() {
    return {
      characters: [],
      characterName: '',
      page: 1,
      showModal: false,
    }
  },
  async fetch() {
    const response = await getCharacterByName(
      this.$axios,
      this.$route.query.name
    )
    this.characters = response
  },
  fetchOnServer: false,
  computed: {
    character() {
      return this.$route.query.name
    },
  },
  watch: {
    async character(newChar) {
      const response = await getCharacterByName(
        this.$axios,
        this.$route.query.name
      )
      this.characters = response
      this.page = 1
    },
  },
  methods: {
    openModal(characterName) {
      this.characterName = characterName.replace(' ', '+')
      this.showModal = true
    },
    async getMoreCharacters(next = true) {
      this.page = next ? this.page + 1 : this.page - 1
      const offset = (this.page - 1) * 10
      const response = await getPaginatedCharacters(
        this.$axios,
        this.$route.query.name,
        10,
        offset
      )
      this.characters = response
    },
  },
}
</script>

<style scoped>
.character-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.characters-title {
  display: flex;
  margin: 20px;
  color: #032202;
}
.characters-data {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  border: 4px solid #29773e;
  background-color: #29773e;
  padding: 20px 50px;
}
.characters {
  display: flex;
  flex-wrap: wrap;
  max-height: 400px;
  overflow-y: auto;
}
.bullet {
  width: 40%;
}
@media screen and (max-width: 1000px) {
  .bullet {
    width: 100%;
  }
}
</style>
