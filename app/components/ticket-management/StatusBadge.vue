<script setup lang="ts">
import { Badge } from "@/components/ui/badge"

const props = defineProps<{
  status: "open" | "in-progress" | "closed"
}>()

const statusColors: Record<string, string> = {
  open: "#36b37e",
  "in-progress": "#ffab00",
  closed: "#6b778c",
}

const color = computed(() => statusColors[props.status] || "#000")
</script>

<template>
  <Badge
    :style="{ backgroundColor: color, color: '#fff' }"
    class="text-xs font-semibold px-2 py-1 rounded-full capitalize"
  >
    {{ props.status }}
  </Badge>
</template>
