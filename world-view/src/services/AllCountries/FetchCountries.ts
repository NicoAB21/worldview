import { api } from '../API'

export const fetchAll = async () => {
  return await api.get('/all/')
}

export const fetchFrance = async () => {
  return await api.get('/name/France')
}

export const fetchCountry = async (code) => {
  return await api.get('/alpha/' + code).then((response) => response.data)
}

export const fetchCountryName = async (name) => {
  return await api.get('/name/' + name).then((response) => response.data)
}
