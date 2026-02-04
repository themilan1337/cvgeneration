<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

const route = useRoute()
const pageTitle = computed(() => {
  const path = route.path
  if (path.includes('resumes')) return 'My Resumes'
  if (path.includes('portfolios')) return 'Portfolios'
  if (path.includes('domains')) return 'Custom Domains'
  if (path.includes('ai-insights')) return 'AI Insights'
  if (path.includes('analytics')) return 'Analytics'
  if (path.includes('settings')) return 'Settings'
  return 'Overview'
})
</script>

<template>
  <header class="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
    <div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
      <SidebarTrigger class="-ml-1" />
      <Separator
        orientation="vertical"
        class="mx-2 data-[orientation=vertical]:h-4"
      />
      <h1 class="text-base font-semibold">
        {{ pageTitle }}
      </h1>
      <div class="ml-auto flex items-center gap-2">
        <button class="bg-neutral-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-neutral-800 transition-all">
          Quick Action
        </button>
      </div>
    </div>
  </header>
</template>
