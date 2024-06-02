import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import EmployeeList from '../components/EmployeeList.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/employee',
    component: EmployeeList
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
