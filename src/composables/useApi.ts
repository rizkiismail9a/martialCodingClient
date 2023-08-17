import { axiosInstance, axiosPrivateInstance } from '../utils/axios'
import { useAuthStore } from '../stores/auth'
import { watchEffect } from 'vue'
// import { error } from 'console'

function useApiPrivate() {
  // request interceptor
  const authStore = useAuthStore()
  watchEffect(() => {
    axiosPrivateInstance.interceptors.request.use(
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
    axiosPrivateInstance.interceptors.response.use(
      // kalau respon dari backend diterima dengan baik, ya, sudah, teruskan
      (response) => response,
      // kalau respon dari backend ada yang salah, ngapain?
      async (err) => {
        // cek, apakah dari request config di atas ada error
        const prevRequest = err?.config //Ada object err dengan value config tidak?
        if ((err?.response?.status === 401 || err?.response?.status === 403) && !prevRequest.sent) {
          prevRequest.sent = true
          await authStore.refresh()
          prevRequest.headers.Authorization = authStore.accessToken
          return axiosPrivateInstance(prevRequest)
        }
        return Promise.reject(err)
      }
    )
  })
  return axiosPrivateInstance
}

const useApi = () => {
  return axiosInstance
}

export { useApiPrivate, useApi }
