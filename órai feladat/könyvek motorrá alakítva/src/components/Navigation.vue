<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container d-flex justify-content-center">    
      <div>
        <RouterLink to="/" class="nav-link d-inline text-light px-3">Kezdőlap</RouterLink>
        <RouterLink to="/motorcycles" class="nav-link d-inline text-light px-3">Motorok</RouterLink>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>