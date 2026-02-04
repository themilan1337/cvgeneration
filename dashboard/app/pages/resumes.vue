<script setup lang="ts">
import DataTable from "@/components/DataTable.vue"

const resumes = [
  {
    id: 1,
    header: "Senior Software Engineer Resume",
    type: "Classic Resume",
    status: "Published",
    target: "1,240",
    limit: "5k",
    reviewer: "AI Optimized",
  },
  {
    id: 4,
    header: "Google Application Resume",
    type: "Classic Resume",
    status: "Published",
    target: "45",
    limit: "5k",
    reviewer: "ATS Optimized",
  },
  {
    id: 6,
    header: "Academic CV - PhD",
    type: "Formal CV",
    status: "Published",
    target: "120",
    limit: "1k",
    reviewer: "Standard",
  },
]
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold tracking-tight">My Resumes</h1>
        <button class="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-all">
          Create New Resume
        </button>
      </div>
      <DataTable :data="resumes" />
    </div>
  </NuxtLayout>
</template>
