import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/token-studio',
      name: 'token-studio',
      component: () => import('../views/TokenStudio.vue')
    },
    {
      path: '/vip-club',
      name: 'vip-club',
      component: () => import('../views/VIPClubView.vue')
    }
  ]
})

export default router 