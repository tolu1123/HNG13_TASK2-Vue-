<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import { GalleryVerticalEnd } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Button } from "@/components/ui/button"
import { useAuth } from "@/composables/useAuth"

const props = withDefaults(defineProps<SidebarProps>(), {
  variant: "floating",
})

const { logout } = useAuth()

const handleOut = async () => {
  await logout();
  navigateTo("/login")
}
// This is sample data.
const data = {
  items: [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Ticket Management",
      url: "/ticket-management",
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <a href="#">
              <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd class="size-4" />
              </div>
              <div className='flex flex-col gap-0.5 leading-none'>
                <span className='font-medium'>TicketFlow</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu class="gap-2">
          <SidebarMenuItem v-for="item in data.items" :key="item.title">
            <SidebarMenuButton as-child>
              <NuxtLink :to="item.url" class="font-medium">
                {{ item.title }}
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
        <Button
          variant='ghost'
          class='w-full justify-start text-red-600 hover:text-red-700'
          @click="handleOut"
        >
          <v-icon name="md-logout-round" class='mr-2 h-4 w-4' size="4" />
          Sign Out
        </Button>
      </SidebarFooter>
  </Sidebar>
</template>
