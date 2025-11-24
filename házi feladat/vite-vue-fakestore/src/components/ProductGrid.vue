<template>
  <div>
    <!-- Kereső és kategória -->
    <div class="flex gap-2 items-center mb-4">
      <input
        v-model="q"
        placeholder="Keresés..."
        class="border rounded p-2 flex-1"
      />
      <select v-model="category" class="border rounded p-2">
        <option value="">Összes</option>
        <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
      </select>
    </div>

    <!-- Grid konténer -->
    <div class="product-grid">
      <!-- Itt használjuk a filtered computed property-t -->
      <ProductCard
        v-for="p in filtered"
        :key="p.id"
        :product="p"
        @add="$emit('add', $event)"
      />
    </div>

    <!-- Nincs találat -->
    <div v-if="!filtered.length" class="text-center mt-10 text-gray-500">
      Nincs találat.
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductGrid',
  components: { ProductCard },
  props: { products: Array },
  data() {
    return { q: '', category: '' }
  },
  computed: {
    categories() {
      return [...new Set((this.products || []).map(p => p.category))]
    },
    filtered() {
      return (this.products || []).filter(p => {
        const matchesQ = `${p.title} ${p.description}`
          .toLowerCase()
          .includes(this.q.toLowerCase())
        const matchesC = this.category ? p.category === this.category : true
        return matchesQ && matchesC
      })
    }
  }
}
</script>
