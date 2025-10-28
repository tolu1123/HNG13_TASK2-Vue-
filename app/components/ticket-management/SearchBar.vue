<script setup lang="ts">
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="relative w-full max-w-sm">
    <!-- Search icon -->
    <v-icon
      name="ri-search-line"
      class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      width="18"
      height="18"
    />

    <!-- Input field -->
    <Input
      type="text"
      placeholder="Search tickets..."
      class="pl-10 bg-white text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300"
    />
  </div>
</template>
