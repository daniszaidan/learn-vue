import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '@/views/FormView.vue'
import PiniaView from '@/views/PiniaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: FormView,
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaView,
    },
  ],
})

export default router
