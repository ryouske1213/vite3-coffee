import { createRouter, createWebHistory  } from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/Home/Home.vue'
import About from '../views/Home/About.vue'
import Question from '../views/Home/Question.vue'
import Coffee_bag from '../views/Home/Coffee_bag.vue'
import Coffee_items from '../views/Home/Coffee_items.vue'
import Shopping from '../views/Home/Shopping.vue'
import Login from '../views/login/index.vue'
import WesternFood from '../views/Home/WesternFood.vue'

export const router = createRouter({
  history: createWebHistory (),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/Coffee_bag',
      name: 'Coffee_bag',
      component: Coffee_bag
    },
    {
      path: '/Question',
      name: 'Question',
      component: Question
    },
    {
      path: '/Coffee_items/:id',
      name: 'Coffee_items',
      component: Coffee_items
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/Login/index',
      name: 'Login',
      component: Login
    },
    {
      path: '/WesternFood',
      name: 'WesternFood',
      component: WesternFood
    }
]
})

export default router