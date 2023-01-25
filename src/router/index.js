import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import admin from '../views/admin.vue'
import tabel from '../views/tabel.vue'
import update from '../views/update.vue'
import landing from '../views/landing.vue'
// import { nextTick } from 'vue'
// import { getUserState } from '../firebase'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
    },
    {
      path: '/tabel',
      name: 'tabel',
      component: tabel,
    },
    {
      path: '/landing',
      name: 'landing',
      component: landing,
    },
    {
      path: '/update/:id?',
      name: 'update',
      component: update,
    },    
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
  ]
}) 

// const isauthen = true;
router.beforeEach((to,from, next)=>{
  const isauthen = JSON.parse(localStorage.getItem("autenticated"))
  if(to.name !== "home" && isauthen == false) next({path:"/"})
  if(to.name === "login" && isauthen == true) next({path:"/admin"})
  else next()
})
export default router
