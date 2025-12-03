<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <nav class="bg-gray-200 px-6 py-3 flex space-x-4">
      <router-link to="/" class="text-blue-600 hover:underline">
        Főoldal
      </router-link>
      <router-link to="/adatok" class="text-blue-600 hover:underline">
        Adatok
      </router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
