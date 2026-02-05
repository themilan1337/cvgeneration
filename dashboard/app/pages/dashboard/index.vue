<script setup lang="ts">
import SectionCards from "@/components/SectionCards.vue"
import { IconSparkles } from "@tabler/icons-vue"

interface SavedAnalysis {
  id: number
  title: string
  type: "Resume" | "Portfolio"
  score: number
  date: string
  status: "Completed" | "Processing"
}

const savedAnalyses: SavedAnalysis[] = [
  {
    id: 1,
    title: "Senior Software Engineer Resume",
    type: "Resume",
    score: 94,
    date: "2024-02-03",
    status: "Completed"
  },
  {
    id: 2,
    title: "UX/UI Design Portfolio",
    type: "Portfolio",
    score: 88,
    date: "2024-02-01",
    status: "Completed"
  },
  {
    id: 3,
    title: "Product Manager Resume",
    type: "Resume",
    score: 91,
    date: "2024-01-28",
    status: "Completed"
  },
  {
    id: 4,
    title: "Full Stack Developer Portfolio",
    type: "Portfolio",
    score: 86,
    date: "2024-01-25",
    status: "Completed"
  }
]

function viewAnalysis(id: number) {
  navigateTo('/ai-insights')
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="@container/main flex flex-1 flex-col gap-2">
      <div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        
        <!-- AI Analyses Section -->
        <div class="px-4 lg:px-6 flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <IconSparkles class="size-6 text-amber-500" />
              <h2 class="text-2xl font-bold">Recent AI Analyses</h2>
            </div>
            <button
              @click="navigateTo('/ai-insights')"
              class="px-4 py-2 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all text-sm"
            >
              New Analysis
            </button>
          </div>

          <div v-if="savedAnalyses.length > 0" class="overflow-hidden rounded-xl border bg-white">
            <table class="w-full">
              <thead class="bg-neutral-50 border-b">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Title</th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Type</th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Score</th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Status</th>
                  <th class="px-6 py-3 text-right text-xs font-semibold text-neutral-600 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y">
                <tr 
                  v-for="analysis in savedAnalyses" 
                  :key="analysis.id"
                  class="hover:bg-neutral-50 transition-colors"
                >
                  <td class="px-6 py-4">
                    <p class="font-semibold text-neutral-900">{{ analysis.title }}</p>
                  </td>
                  <td class="px-6 py-4">
                    <span class="px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {{ analysis.type }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <span class="text-2xl font-black text-neutral-900">
                        {{ analysis.score }}
                      </span>
                      <span class="text-sm text-neutral-500">/100</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-sm text-neutral-600">{{ formatDate(analysis.date) }}</p>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="size-2 rounded-full bg-neutral-400"></div>
                      <span class="text-sm font-medium text-neutral-700">{{ analysis.status }}</span>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button
                      @click="viewAnalysis(analysis.id)"
                      class="px-4 py-2 rounded-lg text-sm font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
                    >
                      View Report
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-else class="p-12 rounded-xl border bg-white text-center">
            <IconSparkles class="size-12 text-neutral-300 mx-auto mb-4" />
            <p class="text-neutral-500 text-lg font-medium">No analyses yet</p>
            <p class="text-neutral-400 text-sm mt-2">Create your first AI analysis to get started</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>