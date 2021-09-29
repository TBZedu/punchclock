import { createRouter, createWebHistory } from 'vue-router'
import securityService from '@/services/security'

import Categories from '@/views/Categories.vue'
import Entries from '@/views/Entries.vue'
import Teams from '@/views/Teams.vue'
import Users from '@/views/Users.vue'

import Login from '@/views/Login.vue'
import Logout from '@/views/Logout.vue'
import Register from '@/views/Register.vue'

export const routes = [
  {
    path: '/',
    name: 'Entries',
    component: Entries,
    meta: {
      authRequired: 'user',
      inNav: true
    }
  },{
    path: '/admin/users',
    name: 'Users',
    component: Users,
    meta: {
      authRequired: 'admin',
      inNav: true
    }
  },
  {
    path: '/admin/teams',
    name: 'Teams',
    component: Teams,
    meta: {
      authRequired: 'admin',
      inNav: true
    }
  },{
    path: '/admin/categories',
    name: 'Categories',
    component: Categories,
    meta: {
      authRequired: 'admin',
      inNav: true
    }
  },
  
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      authRequired: 'guest',
      inNav: true
    }
  },{
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      authRequired: 'guest',
      inNav: true
    }
  },{
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: {
      authRequired: 'user',
      inNav: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(securityService)

export default router
