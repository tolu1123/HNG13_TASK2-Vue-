<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Field } from "@/components/ui/field"
import EditTicketForm from "@/components/ticket-management/EditTicketForm.vue"

// Props
const props = defineProps<{
  ticket: {
    title: string
    id: string
    description: string
    status: "open" | "in-progress" | "closed"
    assignee: string
  }
  profiles: { username: string }[]
}>()

// Reactive state for dialog open
const open = ref(false)
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <Button class="text-gray-500 hover:text-gray-700 bg-transparent hover:bg-transparent">
        <v-icon name="md-edit-outlined" class="h-4 w-4" />
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Edit Ticket #{{ props.ticket.id.slice(0, 8) }}</DialogTitle>
        <DialogDescription class="sr-only">
          This is a dialog for editing tickets.
        </DialogDescription>
      </DialogHeader>

      <div class="flex items-center gap-2">
        <EditTicketForm
          :ticket="props.ticket"
          :profiles="props.profiles"
          :set-open="(v: boolean) => (open = v)"
        />
      </div>

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
