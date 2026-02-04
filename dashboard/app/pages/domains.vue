<script setup lang="ts">
import { IconExternalLink, IconSettings } from "@tabler/icons-vue"

const domains = [
  {
    domain: "milan.cv",
    status: "Active",
    connectedTo: "Milan's Portfolio",
    expiry: "2025-02-15",
  },
  {
    domain: "portfolio.milan.dev",
    status: "Active",
    connectedTo: "Personal Portfolio 2024",
    expiry: "N/A (Subdomain)",
  },
]
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold tracking-tight">Custom Domains</h1>
        <button class="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-all">
          Connect Domain
        </button>
      </div>
      
      <div class="grid gap-4">
        <div v-for="domain in domains" :key="domain.domain" class="flex items-center justify-between p-4 rounded-xl border bg-card">
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <span class="font-bold text-lg text-neutral-900">{{ domain.domain }}</span>
              <span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">{{ domain.status }}</span>
            </div>
            <p class="text-sm text-neutral-500">Connected to: <span class="text-neutral-900 font-medium">{{ domain.connectedTo }}</span></p>
          </div>
          <div class="flex items-center gap-3">
             <button class="p-2 rounded-lg hover:bg-neutral-100 text-neutral-600">
               <IconSettings class="size-5" />
             </button>
             <button class="p-2 rounded-lg hover:bg-neutral-100 text-neutral-600">
               <IconExternalLink class="size-5" />
             </button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
