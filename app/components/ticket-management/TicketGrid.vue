<script setup lang="ts">
import TicketCard from "@/components/ticket-management/TicketCard.vue";

// Props
const props = defineProps<{
  tickets: {
    title: string;
    id: string;
    description: string;
    status: "open" | "in-progress" | "closed";
    assignee: string;
  }[];
  profiles: { username: string }[];
}>();
</script>

<template>
  <section
    :class="[
      'grid gap-5 mt-5',
      props.tickets.length > 0
        ? 'grid-cols-1 md:grid-cols-2'
        : 'grid-cols-1 w-full h-full'
    ]"
  >
    <template v-if="props.tickets.length > 0">
      <TicketCard
        v-for="(ticket, index) in props.tickets"
        :key="index"
        :ticket="ticket"
        :profiles="props.profiles"
      />
    </template>
    <template v-else>
      <div class="w-full h-full flex justify-center items-center text-closed text-xl">
        No tickets available.
      </div>
    </template>
  </section>
</template>
