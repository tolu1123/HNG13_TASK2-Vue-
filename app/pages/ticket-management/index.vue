<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import { useTickets } from '@/composables/useTickets'
import { useRoute } from 'vue-router';

import { ref } from "vue";
import CreateTicketDialog from "@/components/ticket-management/CreateTicketDialog.vue";
import SearchBar from "@/components/ticket-management/SearchBar.vue";
import TicketGrid from "@/components/ticket-management/TicketGrid.vue";


const { getUser } = useAuth();
const route = useRoute()
const onRun: () => void = async() => {
  const { user, error} = await getUser()
  if(!user || error) {
    navigateTo(`/login?redirect=${route.fullPath}`);
  }
}

onRun()


// Define the ticket type
type Ticket = {
  title: string;
  id: string;
  description: string;
  status: "open" | "in-progress" | "closed";
  assignee: string;
};

const ticketData = ref<Ticket[]>([]);
const error = ref<string | null>(null);
const { tickets } = useTickets()

const getData = async() => {
  try {
    const { data, error: ticketError } = await tickets();

    if (ticketError) {
      error.value = ticketError.message || 'Failed to fetch tickets';
      return;
    }

    if (data) {
      ticketData.value = data; // Now properly typed as Ticket[]
    }
  } catch (err) {
    error.value = 'An unexpected error occurred';
    console.error('Error fetching tickets:', err);
  }
}

getData()


// // Mock data for tickets
// const tickets = ref<Ticket[]>([
//   {
//     id: "1a2b3c4d",
//     title: "Fix login authentication",
//     description: "Login fails for certain users with 2FA enabled.",
//     status: "open",
//     assignee: "alice",
//   },
//   {
//     id: "5e6f7g8h",
//     title: "Update dashboard charts",
//     description: "Charts are not rendering properly on mobile screens.",
//     status: "in-progress",
//     assignee: "bob",
//   },
//   {
//     id: "9i0j1k2l",
//     title: "Resolve notification bug",
//     description: "Users are not receiving email notifications after signup.",
//     status: "closed",
//     assignee: "charlie",
//   },
// ]);

// Mock data for profiles
const profiles = ref([
  { username: "alice" },
  { username: "bob" },
  { username: "charlie" },
]);

definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <main class="min-h-full">
    <!-- Top bar: Search + Create Ticket -->
    <section class="flex gap-5 mb-5">
      <SearchBar />
      <CreateTicketDialog :profiles="profiles" />
    </section>

    <!-- Ticket grid -->
    <div v-if="error">An error occurred: {{ error }}</div>
    <TicketGrid v-else :tickets="ticketData" :profiles="profiles" />
  </main>
</template>