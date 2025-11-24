import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import ProductDetail from '../components/ProductDetail.vue'


const routes = [
{ path: '/', component: Home },
{ path: '/product/:id', component: ProductDetail, props: true },
{ path: '/about', component: { template: '<div class="p-6">About page</div>' } }
]


export default createRouter({ history: createWebHistory(), routes })