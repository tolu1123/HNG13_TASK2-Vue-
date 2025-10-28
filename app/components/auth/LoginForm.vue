<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useAuth } from '@/composables/useAuth'
import { toastError, toastSuccess } from "~/lib/toasts"
import { toast } from "vue-sonner"
 

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { login } = useAuth()

const formSchema = toTypedSchema(z.object({   
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password too long"),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(async (values) => {
 try {
      const { email, password } = values;
      const { error, success } = await login(email, password);

      if (error) {
         
        // Handling specific implied errors: like non-unique username or failure with server
        if (typeof error === "string") {
          toastError(error);
        }
        // Error from Auth service
        else {
          toast.error(
            error?.message || "An unexpected error occurred during sign up"
          );
        }
      }

      if (success) {
        toastSuccess("Account created successfully");

        await navigateTo("/dashboard");
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toastError("An unexpected error occurred. Please try again.");
    }
})
 
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)"> 
    <Card class="overflow-hidden p-0">
      <CardContent class="grid p-0 md:grid-cols-2">
        <form class="p-6 md:p-8" @submit.prevent="onSubmit" >
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold">
                Welcome back
              </h1>
              <p class="text-muted-foreground text-balance">
                Login to your TicketFlow account
              </p>
            </div>
            <FormField v-slot="{ componentField }" name="email" class="grid gap-3">
              <FormItem>
                <FormLabel for="email">Email</FormLabel>
                <FormControl>
                  <Input id="email" type="email" placeholder="m@example.com" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="password" class="grid gap-3">
              <FormItem>
                <FormLabel for="password">Password</FormLabel>
                <FormControl>
                  <Input id="password" type="password" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            
            <Button type="submit" class="w-full">
              Login
            </Button>
             
            <div class="text-center text-sm">
              Don't have an account?
              <NuxtLink to="/sign-up" class="underline underline-offset-4">
                Sign up
              </NuxtLink>
            </div>
          </div>
        </form>
        <div class="bg-muted relative hidden md:block">
          <img
            src="/placeholder.svg"
            alt="Image"
            class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          >
        </div>
      </CardContent>
    </Card>
    <div class="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
      By clicking continue, you agree to our unseen (oopy, me playing around)
        <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>.
    </div>
  </div>
</template>
