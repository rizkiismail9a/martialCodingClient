import { axiosInstance } from '../utils/axios'
import { useAuthStore } from '../stores/auth'

export function useApi() {
  // request interceptor
  const authStore = useAuthStore()
  axiosInstance.interceptors.request.use(
    // kalau sukses mau ngapain?
    (config) => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authStore.accessToken}`
      }
      return config
    },
    //kalau error mau ngapain?
    (err) => Promise.reject(err)
  )
  // response interceptor
  axiosInstance.interceptors.response.use(
    // kalau respon dari backend diterima dengan baik, ya, sudah, teruskan
    (response) => response,
    // kalau respon dari backend ada yang salah, ngapain?
    async (err) => {
      return Promise.reject(err)
    }
  )
  return axiosInstance
}
