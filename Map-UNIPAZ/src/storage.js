export const getConfigStorage = () => {
  return JSON.parse(window.localStorage.getItem('config'))
}

export const setConfigStorage = (config) => {
  const lastConfig = getConfigStorage()
  const newConfig = { ...lastConfig, ...config }

  window.localStorage.setItem('config', JSON.stringify(newConfig))
}
