import baseConfig from './baseConfig'

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const parseMediaURL = (url: string) => {
  return url.length > 0 ? baseConfig.baseURL + url : ''
}
