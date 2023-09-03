const capitalizeFirstLetter = (input: string) => {
  if (typeof input !== 'string' || input.length === 0) {
    return input
  }
  return input.charAt(0).toUpperCase() + input.slice(1)
}

const encodeSpaces = (input: string) => {
  if (typeof input !== 'string') {
    return input
  }

  return input.replace(/ /g, '%20')
}

export { capitalizeFirstLetter, encodeSpaces }
