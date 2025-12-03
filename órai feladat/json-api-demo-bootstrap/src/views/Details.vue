<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useItemsStore } from '../stores/items'

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
  <div class="container py-4">
    <button
      @click="router.push('/adatok')"
      class="btn btn-outline-secondary mb-4"
    >
      ← Vissza a listához
    </button>

    <div v-if="!item" class="text-muted fs-5">
      Adat betöltése...
    </div>

    <div v-else class="card shadow-lg border-0 overflow-hidden">
      <div class="row g-0">
        <div class="col-md-5">
          <img
            :src="item.image"
            :alt="item.title"
            class="img-fluid h-100 object-fit-cover"
          />
        </div>

        <div class="col-md-7">
          <div class="card-body p-4">

            <h1 class="h3 fw-bold mb-3">{{ item.title }}</h1>

            <p class="text-muted fs-5 mb-4">
              {{ item.description }}
            </p>

            <div class="bg-light p-3 rounded small">
              <strong>Debug data:</strong>
              <pre class="mb-0">{{ item }}</pre>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

