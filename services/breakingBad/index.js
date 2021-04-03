export const getEpisodesBySerie = async function (axios, serieName) {
  try {
    const response = await axios.get(`/episodes?=${serieName}`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}
