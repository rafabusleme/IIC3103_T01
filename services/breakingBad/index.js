export const getEpisodesBySerie = async function (axios, serieName) {
  try {
    const response = await axios.get(`/episodes?series=${serieName}`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getEpisodeById = async function (axios, episodeId) {
  try {
    const response = await axios.get(`/episodes/${episodeId}`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}
