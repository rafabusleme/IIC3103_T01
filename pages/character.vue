<template>
  <div class="character-container">
    <div class="characters-title">Resultados para: {{ $route.query.name }}</div>
    <div class="characters-data">
      <div v-if="characters" class="characters">
        <bullet
          v-for="(char, index) in characters"
          :key="index"
          class="bullet"
          :img="char.img"
          :title="char.name"
          @click.native="openModal(char.name)"
        />
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
import { getCharacterByName } from '@/services/breakingBad'
import CharacterModal from '@/components/Modal/CharacterModal'
export default {
  components: { CharacterModal },
  data() {
    return {
      characters: [],
      characterName: '',
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
    },
  },
  methods: {
    openModal(characterName) {
      this.characterName = characterName.replace(' ', '+')
      this.showModal = true
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
