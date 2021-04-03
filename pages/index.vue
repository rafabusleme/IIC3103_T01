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
        />
      </div>
      <div class="serie">
        <div>Better Call Saul</div>
        <bullet
          v-for="index in parseInt(betterCallSaulSeasons)"
          :key="index"
          :title="`Temporada ${index}`"
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
}
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-title {
  display: flex;
  margin: 20px;
}
.series-container {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
}
.serie {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
