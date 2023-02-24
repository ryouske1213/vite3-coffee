import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/Home/Home.vue'

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
    path: '/',
    name: 'index',
    component: Index
    },
    {
    path: '/home',
    name: 'home',
    component: Home
    },
]
})

export default Router