<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatusBadge from "@/components/ticket-management/StatusBadge.vue";
import EditTicketDialog from "@/components/ticket-management/EditTicketDialog.vue";
import DeleteTicketDialog from "@/components/ticket-management/DeleteTicketDialog.vue";

// Props
const props = defineProps<{
  ticket: {
    title: string;
    id: string;
    description: string;
    status: "open" | "in-progress" | "closed";
    assignee: string;
  };
  profiles: { username: string }[];
}>();
</script>

<template>
  <Card class="shadow-sm">
    <CardHeader class="flex flex-row items-start justify-between">
      <div class="space-y-1">
        <CardTitle class="font-roboto text-lg font-bold">
          {{ props.ticket.title }}
        </CardTitle>
        <CardDescription class="text-sm">
          #{{ props.ticket.id.slice(0, 8) }}
        </CardDescription>
      </div>
      <div class="flex space-x-2">
        <EditTicketDialog :profiles="props.profiles" :ticket="props.ticket" />
        <DeleteTicketDialog :ticket="props.ticket" />
      </div>
    </CardHeader>

    <CardContent>
      <p class="text-sm text-gray-600 mb-4">{{ props.ticket.description }}</p>
      <div class="flex items-center justify-between">
        <StatusBadge :status="props.ticket.status" />
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-500">{{ props.ticket.assignee }}</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
