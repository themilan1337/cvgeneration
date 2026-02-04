<script setup lang="ts">
import { IconCircleCheck, IconCircleX, IconSparkles } from "@tabler/icons-vue"

const insights = [
  {
    title: "ATS Optimization",
    description: "Your 'Software Engineer' resume has a high ATS score (95/100). Consider adding more keywords related to 'Cloud Architecture'.",
    type: "positive",
  },
  {
    title: "Experience Clarity",
    description: "The description of your role at 'Acme Corp' is a bit wordy. AI suggests using more action verbs.",
    type: "neutral",
  },
  {
    title: "Portfolio Engagement",
    description: "Visitors spend most time on your 'Projects' section. Consider moving it higher.",
    type: "positive",
  },
]
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <div class="flex items-center gap-3">
        <IconSparkles class="size-8 text-amber-500" />
        <h1 class="text-3xl font-bold tracking-tight">AI Insights</h1>
      </div>
      
      <div class="grid gap-6 md:grid-cols-2">
        <div class="p-6 rounded-2xl border bg-gradient-to-br from-neutral-50 to-white flex flex-col gap-4">
          <h2 class="text-xl font-bold">Resumes Overview</h2>
          <div class="flex items-end gap-2">
            <span class="text-4xl font-black">92</span>
            <span class="text-neutral-500 font-medium mb-1">/ 100 avg. score</span>
          </div>
          <div class="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
            <div class="bg-emerald-500 h-full w-[92%]"></div>
          </div>
        </div>
        
        <div class="p-6 rounded-2xl border bg-gradient-to-br from-neutral-50 to-white flex flex-col gap-4">
          <h2 class="text-xl font-bold">Portfolio Impact</h2>
          <div class="flex items-end gap-2">
            <span class="text-4xl font-black">4.5k</span>
            <span class="text-neutral-500 font-medium mb-1">total views</span>
          </div>
          <p class="text-sm text-neutral-600 font-medium">+12% from last week</p>
        </div>
      </div>

      <div class="flex flex-col gap-4 mt-4">
        <h3 class="text-lg font-bold px-1">Specific Recommendations</h3>
        <div v-for="insight in insights" :key="insight.title" class="p-4 rounded-xl border bg-white flex gap-4">
          <div class="mt-1">
            <IconCircleCheck v-if="insight.type === 'positive'" class="size-6 text-emerald-500" />
            <IconCircleX v-else class="size-6 text-neutral-400" />
          </div>
          <div class="flex flex-col gap-1">
            <span class="font-bold">{{ insight.title }}</span>
            <p class="text-sm text-neutral-600 leading-relaxed">{{ insight.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
