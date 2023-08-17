import { defineStore } from 'pinia'
import { useApi, useApiPrivate } from '../composables/useApi'
export interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  full_name: string
}
export interface State {
  user: User
  isAuthenticated: boolean
  accessToken: string
}
export interface LoginData {
  email: string
  password: string
}
export interface RegisterData {
  email: string
  username: string
  first_name: string
  last_name: string
  password: string
  password_confirm: string
}
export const useAuthStore = defineStore('auth', {
  state: (): State => {
    return {
      user: {} as User,
      isAuthenticated: false,
      accessToken: ''
    }
  },
  getters: {
    userDetail: (state: State) => state.user,
    getAuthenticated: (state: State) => (state.user?.email ? true : false)
  },
  actions: {
    // Problem muncul saat kita reload/refresh browser yang kita pakai. Ia akan membuat semua data login hilang. Agar itu tidak terjadi, kita harus panggil fungsi refresh setiap kali aplikasi atau browser di-refresh
    async attemp() {
      try {
        await this.refresh()
        await this.getUser()
        // Sekarang, kita ingin agar fungsi ini dipanggil setiap kali website di-refresh
        return
      } catch (err) {
        return
      }
    },
    async login(payload: LoginData) {
      try {
        const { data } = await useApi().post('/api/auth/login', payload)
        this.accessToken = data?.access_token
        // Setelah kita dapat access token, kita ambil data user
        await this.getUser()
      } catch (error: Error | any) {
        throw error.response.message
      }
    },
    async register(payload: RegisterData) {
      try {
        const { data } = await useApi().post('/api/auth/register', payload)
        return data
      } catch (error: Error | any) {
        throw error.response.message
      }
    },
    async getUser() {
      try {
        const { data } = await useApiPrivate().get('/api/auth/user')
        this.user = data
      } catch (error: Error | any) {
        throw error.response.message
      }
    },
    async logout() {
      try {
        const { data } = await useApiPrivate().post('/api/auth/logout')
        this.accessToken = ''
        this.user = {} as User
        return data
      } catch (error: Error | any) {
        throw error.response.message
      }
    },
    async refresh() {
      try {
        const { data } = await useApi().post('/api/auth/refresh')
        this.accessToken = data?.access_token
        return data
      } catch (error: Error | any) {
        throw error.response.message
      }
    }
  }
})
