import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
        title: 'login' as string
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/registerView.vue'),
      meta: {
        title: 'register' as string
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/userView.vue'),
      meta: {
        title: 'User' as string
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
