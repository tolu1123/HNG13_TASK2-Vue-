<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import { useTickets } from '@/composables/useTickets'
import { useProfile } from '@/composables/useProfile'
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
const profileData = ref<{ username: string }[]>([]);
const error = ref<string | null>(null);
const { tickets } = useTickets()
const { profiles } = useProfile()

const getData = async() => {
  try {
    const { data, error: ticketError } = await tickets();
    const { profiles: profilesData, profileError } = await profiles();


    if (ticketError || profileError) {
      error.value ='Failed to fetch data';
      return;
    }

    if (data) {
      ticketData.value = data; // Now properly typed as Ticket[]
    }

    if (profilesData) {
      profileData.value = profilesData;
    }
  } catch (err) {
    error.value = 'An unexpected error occurred';
    console.error('Error fetching tickets:', err);
  }
}

getData()

 
definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <main class="min-h-full">
    <!-- Top bar: Search + Create Ticket -->
    <section class="flex gap-5 mb-5">
      <SearchBar />
      <CreateTicketDialog :profiles="profileData" />
    </section>

    <!-- Ticket grid -->
    <div v-if="error">An error occurred: {{ error }}</div>
    <TicketGrid v-else :tickets="ticketData" :profiles="profileData" />
  </main>
</template>