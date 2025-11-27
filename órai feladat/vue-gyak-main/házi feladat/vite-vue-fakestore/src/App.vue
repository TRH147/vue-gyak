<template>
<div class="min-h-screen bg-gray-50">
<header class="bg-white shadow">
<div class="max-w-6xl mx-auto p-4 flex justify-between items-center">
<router-link to="/" class="font-bold text-xl">Fake Store Replica</router-link>
<nav class="space-x-4">
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
</nav>
</div>
</header>


<main class="max-w-6xl mx-auto p-6">
<ProductGrid v-if="products" :products="products" @add="onAddToCart" />
<div v-else class="text-center p-10">Betöltés...</div>
</main>


<footer class="text-center p-6 text-sm text-gray-500">Demo built with Vue + Tailwind</footer>
</div>
</template>


<script>
import ProductGrid from './components/ProductGrid.vue'
import { fetchProducts } from './api.js'
export default {
components: { ProductGrid },
data() { return { products: null } },
async created() {
this.products = await fetchProducts()
},
methods: {
onAddToCart(product) { alert('Added to cart: ' + product.title) }
}
}
</script>