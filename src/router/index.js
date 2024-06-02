import { createRouter, createWebHashHistory} from 'vue-router'
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
  history: createWebHashHistory(),
  routes
})

export default router
