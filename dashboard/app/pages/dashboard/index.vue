<script setup lang="ts">
import ChartAreaInteractive from "@/components/ChartAreaInteractive.vue"
import DataTable from "@/components/DataTable.vue"
import SectionCards from "@/components/SectionCards.vue"

const data = [
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
    id: 2,
    header: "Personal Portfolio 2024",
    type: "Web Portfolio",
    status: "Published",
    target: "850",
    limit: "Unlimited",
    reviewer: "Custom Domain",
  },
  {
    id: 3,
    header: "UI/UX Designer CV",
    type: "Modern CV",
    status: "Draft",
    target: "0",
    limit: "2k",
    reviewer: "AI Review Pending",
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
    id: 5,
    header: "Milan's Portfolio",
    type: "Web Portfolio",
    status: "Published",
    target: "2,100",
    limit: "Unlimited",
    reviewer: "milan.cv",
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
    <div class="@container/main flex flex-1 flex-col gap-2">
      <div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div class="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable :data="data" />
      </div>
    </div>
  </NuxtLayout>
</template>