<script setup lang="ts">
import DataTable from "@/components/DataTable.vue"

const portfolios = [
  {
    id: 2,
    header: "Personal Portfolio 2024",
    type: "Web Portfolio",
    status: "Published",
    target: "850",
    limit: "Unlimited",
    reviewer: "Custom Domain",
  },
  {
    id: 5,
    header: "Milan's Portfolio",
    type: "Web Portfolio",
    status: "Published",
    target: "2,100",
    limit: "Unlimited",
    reviewer: "milan.cv",
  },
]
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold tracking-tight">Portfolios</h1>
        <button class="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-all">
          Create New Portfolio
        </button>
      </div>
      <DataTable :data="portfolios" />
    </div>
  </NuxtLayout>
</template>
