<template>
  <div class="col-md-4 col-lg-3 mb-4">
    <div class="card h-100">
      
      <!-- Motor képe -->
      <img 
        :src="motor.image"
        class="card-img-top"
        :alt="motor.model"
        style="width:280px; object-fit:cover;"
      >

      <div class="card-body">
        <!-- Márka + Modell -->
        <h5 class="card-title">
          {{ motor.brand }} {{ motor.model }}
        </h5>

        <!-- Részletek gomb -->
        <button class="btn btn-primary w-100" @click="goToDetails">
          Részletek
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  motor: Object
})

const router = useRouter()

function goToDetails() {
  router.push(`/motorcycles/${props.motor.id}`)
}
</script>
