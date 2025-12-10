<template>
  <div class="container">
    <h2 class="my-4 text-center">Motorok</h2>

    <div class="row">
      <MotorCard
        v-for="motor in motorcyclesStore.motorcycles"
        :key="motor.id"
        :motor="motor"
        @details="showDetails"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMotorcyclesStore } from '../stores/motorcycles'
import MotorCard from '../components/MotorCard.vue'

const motorcyclesStore = useMotorcyclesStore()

onMounted(() => motorcyclesStore.fetchMotorcycles())

const showDetails = (id) => {
  console.log('Motor azonosító:', id)
}
</script>
