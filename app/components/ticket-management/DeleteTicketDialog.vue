<script setup lang="ts">
import { ref } from "vue";
import { navigateTo, useRoute } from "#imports";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toastError, toastSuccess } from "@/lib/toasts";
import { useTicketManagement } from '~/composables/useTicketManagement';
import { Ticket } from "lucide-vue-next";

const { deleteTicket } = useTicketManagement();

// Props
const props = defineProps<{
  ticket: {
    id: string;
    title: string;
    description: string;
    status: "open" | "in-progress" | "closed";
    assignee: string;
  };
}>();

const open = ref(false);
const loading = ref(false);

const handleDelete = async () => {
  if (loading.value) return;
  loading.value = true;

   const { error, success } = await deleteTicket(props.ticket.id);

  if (error) {
    if (typeof error === "string") {
      toastError(error);
    } else if (typeof error === "object" && error !== null) {
      // eslint-disable-next-line
      const errorMessage = "message" in error ? (error as any)?.message : "Failed to delete ticket. Please try again.";
      toastError(errorMessage as string);
    } else {
      toastError("An unexpected error occurred");
    }
  }

  if (success) {
    open.value = false;
    toastSuccess(`Ticket "${props.ticket.id.slice(0, 8)}" has been deleted successfully.`);
    
    await navigateTo(useRoute().path, { replace: true });
  }

  loading.value = false;
};
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <Button variant="outline">
        <v-icon name="pr-trash" class="h-4 w-4" />
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[425px] flex flex-col">
      <DialogHeader>
        <DialogTitle class="text-center">
          <span class="inline-block p-3 md:p-4 rounded-full bg-red-700/20 backdrop-opacity-80">
            <v-icon name="ri-alert-line" class="text-3xl md:text-4xl mx-auto text-red-700" />
          </span>
          <p class="font-bold">Confirm Deletion</p>
        </DialogTitle>
        <DialogDescription class="text-center">
          Are you sure you want to permanently delete ticket #
          {{ props.ticket.id.slice(0, 8) }}? This action cannot be undone.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter class="w-full flex justify-between">
        <DialogClose as-child>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button type="button" class="text-white bg-red-700 hover:bg-red-700" @click="handleDelete">
          {{ loading ? "Deleting..." : "Delete" }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
