<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field } from "@/components/ui/field"
import CreateTicketForm from "./CreateTicketForm.vue"

defineProps<{
  profiles: { username: string }[]
}>()

// open state for dialog
const open = ref(false)
</script>

<template>
  <Dialog v-model:open="open">
    <!-- Trigger Button -->
    <DialogTrigger as-child>
      <Button class="bg-[#0052CC] hover:bg-[#0041A8] text-white font-medium">
        <v-icon name="md-add-outlined" class="mr-2 h-4 w-4" />
        Create New Ticket
      </Button>
    </DialogTrigger>

    <!-- Dialog Content -->
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Create New Ticket</DialogTitle>
        <DialogDescription class="sr-only">
          This is a dialog for creating new tickets.
        </DialogDescription>
      </DialogHeader>

      <!-- Form -->
      <div class="flex items-center gap-2">
        <CreateTicketForm :profiles="profiles" :set-open="(v) => (open = v)" />
      </div>

      <!-- Footer -->
      <DialogFooter class="sm:justify-end">
        <Field orientation="horizontal" class="flex justify-end">
          <DialogClose as-child>
            <Button type="button" variant="secondary">Cancel</Button>
          </DialogClose>
          <Button type="submit" form="form-create-ticket">Submit</Button>
        </Field>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
