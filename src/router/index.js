import { createRouter, createWebHistory } from 'vue-router'
import Functional from '../views/Functional.vue'
import Entertainment from '../views/Entertainment.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/Functional'
  },
  {
    path: '/Functional',
    name: 'Functional',
    component: Functional
  },
  {
    path: '/Entertainment',
    name: 'Entertainment',
    component: Entertainment
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
