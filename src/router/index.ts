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
      path: '/main',
      name: 'main',
      component: () => import('../views/IndexView.vue')
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
    },
    {
      path: '/promotion',
      name: 'promotion',
      component: () => import('../views/PromotionView.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/WalletView.vue')
    },
    {
      path: '/my-page',
      name: 'my-page',
      component: () => import('../views/MyPageView.vue')
    },
    {
      path: '/figma-import',
      name: 'figma-import',
      component: () => import('../views/FigmaImportView.vue')
    },
    {
      path: '/figma-test',
      name: 'figma-test',
      component: () => import('../views/FigmaTestPage.vue')
    },
    {
      path: '/mcp-status',
      name: 'mcp-status',
      component: () => import('../views/MCPConnection.vue')
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/EnvironmentGuide.vue')
    },

    {
      path: '/header-test',
      name: 'header-test',
      component: () => import('../views/HeaderTestView.vue')
    }
  ]
})

export default router 