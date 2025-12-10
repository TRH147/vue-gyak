import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Motorcycles from '../pages/Motorcycles.vue'
import MotorDetails from '../pages/MotorDetails.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/motorcycles', name: 'motorcycles', component: Motorcycles },
  { path: '/motorcycles/:id', name: 'book',component: MotorDetails }
]

export default createRouter({
  history: createWebHistory(),
  routes
})