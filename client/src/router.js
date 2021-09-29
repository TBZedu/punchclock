import { createRouter, createWebHistory } from 'vue-router'
import securityService from '@/services/security'

import Categories from '@/views/Categories.vue'
import Entries from '@/views/Entries.vue'
import Teams from '@/views/Teams.vue'
import Users from '@/views/Users.vue'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Entries',
    component: Entries,
    meta: {
      authRequired: 'user'
    }
  },{
    path: '/admin/users',
    name: 'Users',
    component: Users,
    meta: {
      authRequired: 'admin'
    }
  },
  {
    path: '/admin/teams',
    name: 'Teams',
    component: Teams,
    meta: {
      authRequired: 'admin'
    }
  },{
    path: '/admin/categories',
    name: 'Categories',
    component: Categories,
    meta: {
      authRequired: 'admin'
    }
  }
  
  
  ,{
    path: '/login',
    name: 'Login',
    component: Login,
  },{
    path: '/register',
    name: 'Register',
    component: Register,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(securityService)

export default router
