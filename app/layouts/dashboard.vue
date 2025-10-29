<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<script lang="ts">
export const iframeHeight = "800px"
export const description = "A floating sidebar with submenus."
</script>



<template>
  <SidebarProvider :style="{ '--sidebar-width': '19rem' }">
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 px-4">
        <SidebarTrigger class="-ml-1" />
        <Separator
          orientation="vertical"
          class="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem class="hidden md:block">
              <BreadcrumbLink href="#">
                {{ route.path.replace("/", "").split("-").map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(" ") }}
              </BreadcrumbLink>
            </BreadcrumbItem>
             
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full h-full">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
