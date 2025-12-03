<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useItemsStore } from '../stores/items'

// ✨ Importáljuk az assets-ből a képet
import photo from '../assets/photo-1515879218367-8466d910aaa4.jpg'

const route = useRoute()
const router = useRouter()
const store = useItemsStore()

const item = computed(() =>
  store.items.find(i => String(i.id) === String(route.params.id))
)

onMounted(async () => {
  if (!store.items.length) {
    await store.fetchItems()
  }
})
</script>

<template>
  <div class="p-6 max-w-3xl mx-auto">
    <button
      @click="router.push('/adatok')"
      class="mb-4 text-blue-600 hover:underline"
    >
      ← Vissza a listához
    </button>

    <div v-if="!item" class="text-gray-600">
      Adat betöltése...
    </div>

    <div v-else class="border rounded-lg shadow p-6">
      <img
        :src="photo"
        :alt="item.title"
        class="w-full h-64 object-cover rounded mb-4"
      />
      <h1 class="text-2xl font-bold mb-2">
        {{ item.title }}
      </h1>

      <p class="text-gray-700 mb-2">
        {{ item.description }}
      </p>

      <!-- opcionális: az összes mező debug-ként -->
      <pre class="mt-4 text-xs bg-gray-100 p-2 rounded">
{{ item }}
      </pre>
    </div>
  </div>
</template>