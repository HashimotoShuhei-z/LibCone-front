import api from '../../api/$api'
import aspida from '@aspida/fetch'

export const useApiClient = () => {
  const baseURL = 'http://localhost:8000'

  // const token = localStorage.getItem('token')
  const token = '4|3tuM5uyEGUFkeEAe8vkJ5qTgKBF5OIzRfmdGyroeebcf4a05'

  const headers: Record<string, string> = {
    'Content-Type': 'application/json'
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  // クライアントを定義
  const client = api(
    aspida(fetch, {
      baseURL,
      headers
    })
  ).api

  return client
}
