import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/Home/Home.vue'
import About from '../views/Home/About.vue'
import Coffee_bag from '../views/Home/Coffee_bag.vue'
import Coffee_items from '../views/Home/Coffee_items.vue'
import Shopping from '../views/Home/Shopping.vue'

const Router = createRouter({
  history: createWebHashHistory(),
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
      path: '/Coffee_items/:id',
      name: 'Coffee_items',
      component: Coffee_items
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    }
]
})

export default Router