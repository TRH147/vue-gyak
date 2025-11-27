<template>
<div class="p-6">
<button @click="$router.back()" class="mb-4">← Vissza</button>
<div v-if="product" class="grid grid-cols-1 md:grid-cols-3 gap-6">
<img :src="product.image" class="w-full md:col-span-1 h-80 object-contain bg-white rounded shadow" />
<div class="md:col-span-2">
<h1 class="text-2xl font-bold">{{ product.title }}</h1>
<p class="text-gray-600 my-3">{{ product.category }}</p>
<div class="text-xl font-semibold mb-4">${{ product.price }}</div>
<p class="mb-6">{{ product.description }}</p>
<button class="px-4 py-2 rounded bg-indigo-600 text-white">Add to cart</button>
</div>
</div>
<div v-else class="text-center p-10">Betöltés...</div>
</div>
</template>


<script>
import { fetchProductById } from '../api.js'
export default {
props: ['id'],
data() { return { product: null } },
async created() {
const id = this.$route.params.id
this.product = await fetchProductById(id)
}
}
</script>