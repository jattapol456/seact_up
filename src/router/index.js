import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inclub from '../views/Inclub.vue'
import Create from '../views/Create.vue'
import ClubForm from '../views/ClubForm'
import Formcreate from '../views/Formcreate'
import Login from '../views/Login'
import Loginaddmin from '../views/Loginaddmin'
import Requestclub from '../views/Requestclub'
import Profile from '../views/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inclub',
    name: 'Inclub',
    component: Inclub
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/clubform',
    name: 'ClubForm',
    component: ClubForm
  },
  {
    path: '/formcreate',
    name: 'Formcreate',
    component: Formcreate
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/loginaddmin',
    name: 'Loginaddmin',
    component: Loginaddmin
  },
  {
    path: '/requestclub',
    name: 'Requestclub',
    component: Requestclub
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
