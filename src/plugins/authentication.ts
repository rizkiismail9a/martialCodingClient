import { useAuthStore } from '@/stores/auth'

export const authentication = {
  async install() {
    const authStore = useAuthStore()
    try {
      await authStore.attemp()
      //return kosong ini akan mengembalikan undefined
      //ingat! Ini adalah fungsi async-await, artinya ia akan mengembalikan promise
      return
    } catch (error) {
      return
    }
  }
}
