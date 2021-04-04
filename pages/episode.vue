<template>
  <div class="episode-container">
    <div class="episode-title">
      <h3>{{ episodeData.series }} - {{ episodeData.title }}</h3>
    </div>
    <div class="episode-data">
      <span>Número episodio: {{ episodeData.episode }}</span>
      <span>Número temporada: {{ episodeData.season }}</span>
      <span>Fecha de lanzamiento: {{ episodeData.air_date }}</span>
      <h4>Personajes</h4>
      <div v-if="episodeData.characters" class="episode-characters">
        <bullet
          v-for="(character, index) in episodeData.characters"
          :key="index"
          class="bullet"
          :title="`${character}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getEpisodeById } from '@/services/breakingBad'
export default {
  data() {
    return {
      episodeData: {},
    }
  },
  async fetch() {
    console.log(this.$route.query.number)
    const response = await getEpisodeById(this.$axios, this.$route.query.number)
    this.episodeData = response[0]
  },
  fetchOnServer: false,
}
</script>

<style scoped>
.episode-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.episode-title {
  display: flex;
  margin: 20px;
  color: #032202;
}
.episode-data {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  border: 4px solid #29773e;
  background-color: #29773e;
  padding: 20px 50px;
}
.episode-characters {
  border-top: 3px solid #032202;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-height: 300px;
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
