<script setup>
import { onMounted } from 'vue'
import { useItemsStore } from '../stores/items'

// ❗ FIX: this was missing!
const store = useItemsStore()

onMounted(() => {
  if (!store.items.length) {
    store.fetchItems()
  }
})
</script>

<template>
  <div class="container py-4">
    <h2 class="fw-bold mb-4 border-bottom pb-2">Adatok</h2>

    <div v-if="store.loading" class="alert alert-info">Betöltés...</div>
    <div v-if="store.error" class="alert alert-danger">{{ store.error }}</div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div
        v-for="item in store.items"
        :key="item.id"
        class="col"
      >
        <div class="card h-100 shadow-sm border-0">
          <img
            :src="item.image"
            :alt="item.title"
            class="card-img-top"
          />

          <div class="card-body d-flex flex-column">
            <h3 class="h5 fw-semibold mb-3">
              {{ item.title }}
            </h3>

            <router-link
              :to="{ name: 'Details', params: { id: item.id } }"
              class="btn btn-primary mt-auto"
            >
              Részletek
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
