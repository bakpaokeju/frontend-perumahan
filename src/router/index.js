import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import admin from '../views/admin.vue'
import tabel from '../views/tabel.vue'
import update from '../views/update.vue'
import landing from '../views/landing.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/tabel',
      name: 'tabel',
      component: tabel
    },
    {
      path: '/landing',
      name: 'landing',
      component: landing
    },
    {
      path: '/update/:id?',
      name: 'update',
      component: update
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
