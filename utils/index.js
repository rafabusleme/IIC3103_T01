export const getMax = (array, attr) => {
  let max = 0
  for (let index = 0; index < array.length; index++) {
    const count = array[index][attr]
    if (count > max) {
      max = count
    }
  }
  return max
}

export const filterBy = (array, attr, value) => {
  const filtered = array.filter((elem) => {
    if (elem[attr] === value) {
      return true
    }
    return false
  })
  return filtered
}
