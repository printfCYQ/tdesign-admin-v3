import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/', component: () => import('@/pages/home/index.vue') },
  { path: '/login', component: () => import('@/pages/login/index.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
