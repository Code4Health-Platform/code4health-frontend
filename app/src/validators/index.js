const Match = (valueA, valueB) => {
  return valueA === valueB
}

const Email = (value) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(value).toLowerCase())
}

const MinimumLength = (value, length) => {
  if (!value || value.length < length) {
    return false
  }

  return true
}

export {
  Email,
  Match,
  MinimumLength
}
