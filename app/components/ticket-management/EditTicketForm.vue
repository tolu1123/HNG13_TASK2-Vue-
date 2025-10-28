<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { useForm } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import * as z from "zod"
import { toast } from "vue-sonner"

// Props
const props = defineProps<{
  ticket: {
    title: string
    description: string
    assignee: string
    status: "open" | "in-progress" | "closed"
    id: string
  }
  profiles: { username: string }[]
  setOpen: (v: boolean) => void
}>()

// Validation schema using zod
const formSchema = toTypedSchema(
  z.object({
    title: z.string().min(1, "Title field cannot be empty."),
    description: z.string().min(5, "Description must be at least 5 characters."),
    assignee: z.string().min(1, "Assignee is required."),
    status: z.enum(["open", "in-progress", "closed"], {
      required_error: "Select a status",
    }),
  })
)

// Initialize form with ticket values
const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: props.ticket.title,
    description: props.ticket.description,
    assignee: props.ticket.assignee,
    status: props.ticket.status,
  },
})

// Submission handler
const onSubmit = form.handleSubmit(async (values) => {
  try {
    // const { error, success } = await updateTicket(props.ticket.id, values)
    const success = true
    const error = null

    if (error) {
      toast.error(typeof error === "string" ? error : "An error occurred.")
      return
    }

    if (success) {
      form.resetForm({ values })
      props.setOpen(false)
      toast.success(`Ticket "${values.title}" has been updated successfully.`)
    }
    // eslint-disable-next-line
  } catch (err) {
    toast.error("Unexpected error. Please try again.")
  }
})
</script>

<template>
  <form class="w-full space-y-6" @submit.prevent="onSubmit">
    <div class="grid grid-cols-2 gap-4">
      <!-- Title -->
      <FormField v-slot="{ componentField }" name="title" >
        <FormItem class="col-span-2">
          <FormLabel for="title">Title</FormLabel>
          <FormControl>
            <Input id="title" placeholder="e.g., Fix login authentication flow" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Description -->
      <FormField v-slot="{ componentField }" name="description">
        <FormItem class="col-span-2">
          <FormLabel for="description">Description</FormLabel>
          <FormControl>
            <Textarea
              id="description"
              placeholder="Provide a detailed description of the issue..."
              class="min-h-[120px] resize-none"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Assignee -->
      <FormField v-slot="{ componentField }" name="assignee">
        <FormItem>
          <FormLabel for="assignee">Assignee</FormLabel>
          <FormControl>
            <Select v-bind="componentField">
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Select assignee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="profile in props.profiles"
                  :key="profile.username"
                  :value="profile.username"
                >
                  {{ profile.username }}
                </SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Status -->
      <FormField v-slot="{ componentField }" name="status">
        <FormItem>
          <FormLabel for="status">Status</FormLabel>
          <FormControl>
            <Select v-bind="componentField">
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>

    <Button type="submit" class="w-full">Update Ticket</Button>
  </form>
</template>
