<template>
  <div class="home-container">
    <div class="home-title"><h3>Informate sobre tus series favoritas</h3></div>
    <div class="series-container">
      <div class="serie">
        <div>Breaking Bad</div>
        <bullet
          v-for="index in parseInt(breakingBadSeasons)"
          :key="index"
          :title="`Temporada ${index}`"
          @click.native="goToSeason('breaking-bad', index)"
        />
      </div>
      <div class="serie">
        <div>Better Call Saul</div>
        <bullet
          v-for="index in parseInt(betterCallSaulSeasons)"
          :key="index"
          :title="`Temporada ${index}`"
          @click.native="goToSeason('better-call-saul', index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getEpisodesBySerie } from '@/services/breakingBad'
import { BREAKING_BAD_NAME, BETTER_CALL_SAUL_NAME } from '@/constants/services'
import { getMax } from '@/utils'
import Bullet from '~/components/Bullet.vue'
export default {
  components: { Bullet },
  data() {
    return {
      breakingBadSeasons: 0,
      betterCallSaulSeasons: 0,
    }
  },
  async fetch() {
    const firstResponse = await getEpisodesBySerie(
      this.$axios,
      BREAKING_BAD_NAME
    )
    const secondResponse = await getEpisodesBySerie(
      this.$axios,
      BETTER_CALL_SAUL_NAME
    )
    this.breakingBadSeasons = getMax(firstResponse, 'season')
    this.betterCallSaulSeasons = getMax(secondResponse, 'season')
  },
  fetchOnServer: false,
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
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-title {
  display: flex;
  margin: 20px;
  color: #032202;
}
.series-container {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
.serie {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px;
  margin: 5px;
  border-radius: 10px;
  border: 4px solid #29773e;
  background-color: #29773e;
  max-height: 400px;
  overflow-y: auto;
}
@media screen and (max-width: 1000px) {
  .series-container {
    width: 80%;
    align-items: center;
    flex-direction: column;
  }
}
</style>
