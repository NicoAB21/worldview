import { AxiosError } from 'axios'
import { api } from '../API'
import axios from 'axios'
import { log } from 'console'

export const fetchAll = async () => {
  return await api.get('/all/')
}

export const fetchFrance = async () => {
  return await api.get('/name/France')
}

export const fetchCountry = async (code: any) => {
  return await api.get('/alpha/' + code).then((response) => response.data)
}

export const fetchCountryName = async (name: any) => {
  try {
    const res = await api.get('/name/' + name).then((response) => response.data)
    return res
  } catch (error) {
    return []
  }
}
