import { defineStore } from 'pinia'

export interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
}
export interface State {
  user: User
  isAuthenticated: boolean
  accessToken: string
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
    user: (state: State) => state.user,
    isAuthenticated: (state: State) => (state.user?.id ? true : false)
  },
  actions: {}
})
