<script setup lang="ts">
import type { Component } from "vue"
import { IconPlus } from "@tabler/icons-vue"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

interface NavItem {
  title: string
  url: string
  icon?: Component
}

defineProps<{
  items: NavItem[]
}>()
</script>

<template>
  <SidebarGroup>
    <SidebarGroupContent class="flex flex-col gap-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="New Resume"
            class="bg-neutral-900 text-white hover:bg-neutral-800 hover:text-white active:bg-neutral-900 active:text-white transition-all py-5"
            as-child
          >
            <a href="/resumes/new">
              <IconPlus class="size-5" />
              <span class="font-bold">New Resume</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      
      <SidebarMenu>
        <SidebarMenuItem v-for="item in items" :key="item.title">
          <SidebarMenuButton :tooltip="item.title" as-child>
             <a :href="item.url" class="flex items-center gap-2">
                <component :is="item.icon" v-if="item.icon" class="size-5" />
                <span class="font-medium text-neutral-600">{{ item.title }}</span>
             </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
