<template>
  <div v-if="motor" class="container mt-5">
    <div class="row">
      
      <!-- Kép -->
      <div class="col-lg-4 text-center">
        <img :src="motor.image" class="img-fluid mb-3" :alt="motor.model" />
      </div>

      <!-- Adatok -->
      <div class="col-lg-8">
        <h2>{{ motor.brand }} {{ motor.model }}</h2>
        <h5>{{ motor.type }} típus</h5>

        <div class="card mb-3">
          <div class="card-body">
            <strong class="fs-4">Motor jellemzői</strong>

            <div><strong>Azonosító:</strong> {{ motor.id }}</div>
            <div><strong>Márka:</strong> {{ motor.brand }}</div>
            <div><strong>Modell:</strong> {{ motor.model }}</div>
            <div><strong>Évjárat:</strong> {{ motor.year }}</div>
            <div><strong>Hengerűrtartalom:</strong> {{ motor.engine }}</div>
            <div><strong>Típus:</strong> {{ motor.type }}</div>
          </div>
        </div>

        <div class="mb-3">
          <strong class="fs-3">Leírás</strong>
          <p>
            A(z) {{ motor.brand }} {{ motor.model }} egy modern, megbízható és népszerű
            {{ motor.type.toLowerCase() }} motor, amely ideális választás az élménydús közlekedéshez.
          </p>
        </div>

        <button class="btn btn-secondary me-2" @click="$router.push('/motorcycles')">
          Vissza a motorokhoz
        </button>
        <button class="btn btn-primary">Kosárba tesz</button>
      </div>

    </div>
  </div>

  <div v-else class="container mt-5">
    <p>Nincs ilyen motor azonosítóval.</p>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { useMotorcyclesStore } from '../stores/motorcycles'
import { computed, onMounted } from 'vue'

const route = useRoute()
const motorcyclesStore = useMotorcyclesStore()

onMounted(() => motorcyclesStore.fetchMotorcycles())

const motor = computed(() =>
  motorcyclesStore.motorcycles.find(m => m.id == route.params.id)
)
</script>
