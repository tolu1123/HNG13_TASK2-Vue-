<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import { useTickets } from '@/composables/useTickets'
import { useRoute } from 'vue-router';

 definePageMeta({
  layout: 'dashboard',
  // middleware: ['auth']
})

const { getUser } = useAuth();
const route = useRoute()
const onRun: () => void = async() => {
  const { user, error} = await getUser()
  if(!user || error) {
    navigateTo(`/login?redirect=${route.fullPath}`);
  }
}

onRun()

const totalT = ref(0)
const openT = ref(0)
const closedT = ref(0)
const { totalTickets, openTickets, closedTickets } = useTickets()

const getData = async() => {
  const total = await totalTickets();
  const open = await openTickets();
  const closed = await closedTickets();

  totalT.value = typeof total === "number" ? total: 0;
  openT.value = typeof open === "number" ? open: 0;
  closedT.value = typeof closed === "number" ? closed: 0;
}

getData()
</script>

<template>
  <main>
    <div>
      <!-- Section for cards -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <!-- Total Tickets -->
        <div class="flex gap-2 px-5 py-6 rounded-xl shadow-lg">
          <span
            class="h-fit inline-block text-2xl rounded-xl aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] px-2"
          >
            <v-icon name="md-analytics-outlined" />
          </span>
          <div>
            <h6>Total Tickets</h6>
            <p class="font-roboto text-lg md:text-xl font-bold">{{ totalT }}</p>
          </div>
        </div>

        <!-- Open Tickets -->
        <div class="flex gap-2 px-5 py-6 rounded-xl shadow-lg">
          <span
            class="h-fit inline-block text-2xl rounded-xl aspect-square bg-[#FFAB0044] backdrop-opacity-80 text-[#FFAB00] px-2"
          >
            <v-icon name="md-analytics-outlined" />
          </span>
          <div>
            <h6>Open Tickets</h6>
            <p class="font-roboto text-lg md:text-xl font-bold">{{ openT }}</p>
          </div>
        </div>

        <!-- Resolved Tickets -->
        <div class="flex gap-2 px-5 py-6 rounded-xl shadow-lg">
          <span
            class="h-fit inline-block text-2xl rounded-xl aspect-square bg-[#6554C044] backdrop-opacity-80 text-[#6554C0] px-2"
          >
            <v-icon name="md-analytics-outlined" />
          </span>
          <div>
            <h6>Resolved Tickets</h6>
            <p class="font-roboto text-lg md:text-xl font-bold">{{ closedT }}</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
