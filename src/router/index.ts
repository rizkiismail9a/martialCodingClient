import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home' as string
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginView.vue'),
      meta: {
        title: 'Login' as string,
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/registerView.vue'),
      meta: {
        title: 'Register' as string,
        requiresGuest: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/userView.vue'),
      meta: {
        title: 'User' as string,
        // Ini agar hanya orang yang punya akun yang bisa masuk
        requiresAuth: true
      }
    }
  ]
})
// Tahukah kau? Ini adalah navigation guard
router.beforeEach((to) => {
  // cek, apakah ada user yang sudah login
  const authStore = useAuthStore()
  document.title = to.meta.title as string
  if (to.meta.requiresAuth && !authStore.getAuthenticated) {
    // Kalau user gak login, lempar dia ke laman login
    return { name: 'login' }
  } else if (to.meta.requiresGuest && authStore.getAuthenticated) {
    return { name: 'home' }
  }
})

export default router
