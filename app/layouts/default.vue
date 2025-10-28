<!-- layouts/default.vue -->
<template>
  <div :class="`${inter} ${roboto} antialiased font-inter`">
    <NuxtPage />
    <SonnerToaster class="fixed top-5 right-5 z-9999" position="bottom-right" />
  </div>
</template>

<script setup lang="ts">
// Import the Toaster equivalent for Vue
import { Toaster as SonnerToaster } from 'vue-sonner'

// Apply your font CSS variables (optional if using CSS vars)
const inter = 'font-inter'
const roboto = 'font-roboto'
</script>

<style scoped>
/* optional root layout styling */
</style>
