<template>
  <Modal>
    <div slot="content">
      <div v-if="character" class="character-container">
        <div class="avatar">
          <img :src="character.img" alt="" />
          <button @click="$emit('close')">X</button>
        </div>
        <div class="character-data">
          <span>Nombre: {{ character.name }}</span>
          <span>Cumpleaños: {{ character.birthday }}</span>
          <span>Estado: {{ character.status }}</span>
          <span>Ocupacion: {{ character.occupation }}</span>
          <span>Nickname: {{ character.nickname }}</span>
          <span>Actor/Actriz: {{ character.portrayed }}</span>
        </div>
        <div class="seasons">
          <div class="breaking-bad-seasons">
            <span>Temporadas en Breaking Bad:</span>
            <button
              v-for="(season, index) in character.appearance"
              :key="index"
              class="bullet"
              @click="goToSeason('breaking-bad', index + 1)"
            >
              {{ index + 1 }}
            </button>
          </div>
          <div class="better-call-saul-seasons">
            <span>Temporadas en Better Call Saul:</span>
            <button
              v-for="(season, index) in character.better_call_saul_appearance"
              :key="index"
              class="bullet"
              @click="goToSeason('better-call-saul', index + 1)"
            >
              {{ index + 1 }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import { getCharacterByName } from '@/services/breakingBad'
export default {
  props: {
    characterName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      character: {},
    }
  },
  async fetch() {
    const response = await getCharacterByName(this.$axios, this.characterName)
    this.character = response[0]
  },
  fetcrOnServer: false,
  methods: {
    goToSeason(serieName, seasonNumber) {
      this.$router.push({
        path: `${serieName}/season`,
        query: { number: seasonNumber },
      })
    },
  },
}
</script>

<style scoped>
.character-container {
  background-color: beige;
  color: #29773e;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 300px;
  padding: 20px;
}
.avatar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
.character-data {
  display: flex;
  flex-direction: column;
}
.seasons {
  width: 100%;
}
.breaking-bad-seasons {
  display: flex;
  align-items: center;
}
.better-call-saul-seasons {
  display: flex;
  align-items: center;
}
.bullet {
  background-color: #29773e;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: beige;
  text-align: center;
  margin: 5px;
}
</style>
