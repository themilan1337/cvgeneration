<script setup lang="ts">
import ChartAreaInteractive from "@/components/ChartAreaInteractive.vue"
import SectionCards from "@/components/SectionCards.vue"
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <h1 class="text-3xl font-bold tracking-tight">Detailed Analytics</h1>
      
      <SectionCards />
      
      <div class="rounded-xl border bg-card p-4">
        <h2 class="text-xl font-bold mb-4 px-2">Visitor Trends</h2>
        <ChartAreaInteractive />
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div class="p-6 rounded-2xl border bg-white flex flex-col gap-2">
          <span class="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Top Resume</span>
          <span class="text-lg font-bold">-</span>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-2xl font-black">0</span>
            <span class="text-xs font-bold text-neutral-400 bg-neutral-50 px-2 py-0.5 rounded-full">views</span>
          </div>
        </div>
        <div class="p-6 rounded-2xl border bg-white flex flex-col gap-2">
          <span class="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Top Portfolio</span>
          <span class="text-lg font-bold">-</span>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-2xl font-black">0</span>
            <span class="text-xs font-bold text-neutral-400 bg-neutral-50 px-2 py-0.5 rounded-full">views</span>
          </div>
        </div>
        <div class="p-6 rounded-2xl border bg-white flex flex-col gap-2">
          <span class="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Storage Used</span>
          <span class="text-lg font-bold">0 MB / 5 GB</span>
          <div class="w-full bg-neutral-100 h-2 rounded-full mt-2 overflow-hidden">
            <div class="bg-primary h-full w-[0%]"></div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
