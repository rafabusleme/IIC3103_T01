<template>
  <div class="season-container">
    <div class="season-title">
      <h3>Breaking Bad - Temporada {{ $route.query.number }}</h3>
    </div>
    <div class="episodes-container">
      <h4>Capítulos</h4>
      <div v-if="seasonEpisodes.length" class="episodes">
        <bullet
          v-for="(episode, index) in seasonEpisodes"
          :key="index"
          class="bullet"
          :title="`${index + 1}: ${episode.title}`"
          @click.native="goToEpisode(episode.episode_id)"
        />
      </div>
      <div v-else class="episodes">No hay capitulos para mostrar :(</div>
    </div>
  </div>
</template>

<script>
import { getEpisodesBySerie } from '@/services/breakingBad'
import { BREAKING_BAD_NAME } from '@/constants/services'
import { filterBy } from '@/utils'
import Bullet from '~/components/Bullet.vue'
export default {
  components: { Bullet },
  data() {
    return {
      breakingBadAllEpisodes: [],
    }
  },
  async fetch() {
    this.breakingBadAllEpisodes = await getEpisodesBySerie(
      this.$axios,
      BREAKING_BAD_NAME
    )
  },
  fetchOnServer: false,
  computed: {
    seasonEpisodes() {
      if (this.$route.query.number) {
        return filterBy(
          this.breakingBadAllEpisodes,
          'season',
          this.$route.query.number
        )
      }
      return []
    },
  },
  methods: {
    goToEpisode(episodeId) {
      this.$router.push({
        path: `/episode`,
        query: { number: episodeId },
      })
    },
  },
}
</script>

<style scoped>
.season-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.season-title {
  display: flex;
  margin: 20px;
  color: #032202;
}
.episodes-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 4px solid #29773e;
  background-color: #29773e;
  padding: 20px 50px;
}
.episodes {
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
