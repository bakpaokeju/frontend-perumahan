import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import admin from '../views/admin.vue'
import tabel from '../views/tabel.vue'
import update from '../views/update.vue'
import landing from '../views/landing.vue'
import { getUserState } from '../firebase'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: { requiresUnauth: true }
    },
    {
      path: '/tabel',
      name: 'tabel',
      component: tabel,
      meta: { requiresUnauth: true }
    },
    {
      path: '/landing',
      name: 'landing',
      component: landing,
      meta: { requiresunAuth: true }
    },
    {
      path: '/update/:id?',
      name: 'update',
      component: update,
      meta: { requiresAuth: true }
    },    
    {
      path: '/login',
      name: 'update',
      component: () => import('../views/login.vue'),
      meta: { requiresAuth: true }
    },
  ]
})

export default router
