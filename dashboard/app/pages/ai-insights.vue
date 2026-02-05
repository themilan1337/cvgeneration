<script setup lang="ts">
import { IconCircleCheck, IconCircleX, IconSparkles } from "@tabler/icons-vue"
import { ref } from "vue"

interface Insight {
  title: string
  description: string
  type: string
}

const insights = ref<Insight[]>([])
const resumeScore = ref(0)
const portfolioViews = ref(0)
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
            <span class="text-4xl font-black">{{ resumeScore }}</span>
            <span class="text-neutral-500 font-medium mb-1">/ 100 avg. score</span>
          </div>
          <div class="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
            <div class="bg-emerald-500 h-full" :style="{ width: `${resumeScore}%` }"></div>
          </div>
        </div>
        
        <div class="p-6 rounded-2xl border bg-gradient-to-br from-neutral-50 to-white flex flex-col gap-4">
          <h2 class="text-xl font-bold">Portfolio Impact</h2>
          <div class="flex items-end gap-2">
            <span class="text-4xl font-black">{{ portfolioViews.toLocaleString() }}</span>
            <span class="text-neutral-500 font-medium mb-1">total views</span>
          </div>
          <p v-if="portfolioViews > 0" class="text-sm text-neutral-600 font-medium">+12% from last week</p>
        </div>
      </div>

      <div class="flex flex-col gap-4 mt-4">
        <h3 class="text-lg font-bold px-1">Specific Recommendations</h3>
        <div v-if="insights.length > 0">
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
        <div v-else class="flex flex-col items-center justify-center py-12 px-4">
          <p class="text-neutral-500 text-lg font-medium">No AI insights available yet</p>
          <p class="text-neutral-400 text-sm mt-2">Create resumes to get personalized recommendations</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
