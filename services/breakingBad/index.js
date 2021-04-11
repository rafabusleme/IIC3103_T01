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

export const getCharacterByName = async function (axios, characterName) {
  try {
    const response = await axios.get(`/characters?name=${characterName}`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getPaginatedCharacters = async function (
  axios,
  characterName,
  limit = 10,
  offset = 10
) {
  try {
    const response = await axios.get(
      `/characters?name=${characterName}&limit=${limit}&offset=${offset}`
    )
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export const getQuotesByAuthor = async function (axios, characterName) {
  try {
    const response = await axios.get(`/quote?author=${characterName}`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}
