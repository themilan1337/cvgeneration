<script setup lang="ts">
import { IconArrowRight, IconCheck, IconDownload, IconFileText, IconFolder, IconListDetails, IconLoader, IconSparkles, IconTarget } from "@tabler/icons-vue"
import { ref, computed } from "vue"

type ContentType = "resume" | "portfolio"
type AnalysisStep = "selection" | "analyzing" | "results"

const currentStep = ref<AnalysisStep>("selection")
const selectedType = ref<ContentType>("resume")
const analysisProgress = ref(0)

// Mock analysis results
const analysisResults = ref({
  overallScore: 0,
  strengths: [] as string[],
  improvements: [] as string[],
  keyMetrics: {
    atsCompatibility: 0,
    readability: 0,
    impact: 0,
    completeness: 0
  }
})

const progressSteps = [
  { label: "Scanning document structure", progress: 20 },
  { label: "Analyzing content quality", progress: 40 },
  { label: "Checking ATS compatibility", progress: 60 },
  { label: "Evaluating keywords", progress: 80 },
  { label: "Generating insights", progress: 90 },
  { label: "Finalizing report", progress: 100 }
]

function selectType(type: ContentType) {
  selectedType.value = type
}

function startAnalysis() {
  if (!selectedType.value) return
  
  currentStep.value = "analyzing"
  analysisProgress.value = 0
  
  // Simulate analysis with progress steps
  let currentStepIndex = 0
  
  const interval = setInterval(() => {
    if (currentStepIndex < progressSteps.length) {
      const currentProgress = progressSteps[currentStepIndex]
      if (currentProgress) {
        analysisProgress.value = currentProgress.progress
      }
      currentStepIndex++
    } else {
      clearInterval(interval)
      
      // Generate mock results
      analysisResults.value = {
        overallScore: Math.floor(Math.random() * 15) + 85, // 85-100
        strengths: [
          "Clear and concise professional summary",
          "Strong use of action verbs and quantifiable achievements",
          "Well-structured sections with logical flow",
          "Appropriate keyword density for ATS optimization"
        ],
        improvements: [
          "Consider adding more quantifiable metrics to achievements",
          "Skills section could be expanded with proficiency levels",
          "Contact information formatting can be improved for ATS"
        ],
        keyMetrics: {
          atsCompatibility: Math.floor(Math.random() * 10) + 90,
          readability: Math.floor(Math.random() * 10) + 88,
          impact: Math.floor(Math.random() * 15) + 82,
          completeness: Math.floor(Math.random() * 12) + 85
        }
      }
      
      currentStep.value = "results"
    }
  }, 600)
}

function downloadReport() {
  // TODO: Implement PDF download
  console.log("Downloading report...")
  alert("Report download feature will be implemented soon!")
}

function saveToProject() {
  // TODO: Implement save to project
  console.log("Saving to project...")
  alert("Analysis saved to your project!")
  
  // Reset to selection after saving
  setTimeout(() => {
    resetAnalysis()
  }, 1000)
}

function resetAnalysis() {
  currentStep.value = "selection"
  analysisProgress.value = 0
}

const currentProgressLabel = computed(() => {
  const step = progressSteps.find(s => s.progress === analysisProgress.value)
  return step?.label ?? "Processing..."
})

const scoreColor = computed(() => {
  const score = analysisResults.value.overallScore
  if (score >= 90) return "text-emerald-600"
  if (score >= 75) return "text-blue-600"
  if (score >= 60) return "text-amber-600"
  return "text-red-600"
})

const scoreGradient = computed(() => {
  const score = analysisResults.value.overallScore
  if (score >= 90) return "from-emerald-500 to-teal-500"
  if (score >= 75) return "from-blue-500 to-indigo-500"
  if (score >= 60) return "from-amber-500 to-orange-500"
  return "from-red-500 to-pink-500"
})

// Mock saved analyses
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
  // TODO: Implement view analysis details
  console.log("Viewing analysis:", id)
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <IconSparkles class="size-8 text-amber-500" />
          <h1 class="text-3xl font-bold tracking-tight">AI Insights</h1>
        </div>
        <button 
          v-if="currentStep === 'results'"
          @click="resetAnalysis"
          class="px-4 py-2 rounded-lg border border-neutral-200 font-semibold text-neutral-700 hover:bg-neutral-50 transition-all text-sm"
        >
          New Analysis
        </button>
      </div>

      <!-- Step 1: Type Selection -->
      <div v-if="currentStep === 'selection'" class="flex flex-col items-center justify-center py-12 gap-8">
        <div class="text-center max-w-2xl">
          <h2 class="text-2xl font-bold mb-2">What would you like to analyze?</h2>
          <p class="text-neutral-500">Select the type of content you want our AI to review</p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 w-full max-w-3xl">
          <!-- Resume Option -->
          <div
            @click="selectType('resume')"
            class="group p-8 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-lg"
            :class="selectedType === 'resume' 
              ? 'border-neutral-900 bg-neutral-50 shadow-md' 
              : 'border-neutral-200 hover:border-neutral-300'"
          >
            <div class="flex flex-col items-center text-center gap-4">
              <div 
                class="p-4 rounded-2xl transition-all"
                :class="selectedType === 'resume' ? 'bg-neutral-900' : 'bg-neutral-100 group-hover:bg-neutral-200'"
              >
                <IconFileText 
                  class="size-12 transition-colors"
                  :class="selectedType === 'resume' ? 'text-white' : 'text-neutral-600'"
                />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-1">Resume Analysis</h3>
                <p class="text-sm text-neutral-600">Get insights on your resume's ATS compatibility, structure, and content quality</p>
              </div>
              <div 
                class="size-6 rounded-full border-2 flex items-center justify-center transition-all mt-2"
                :class="selectedType === 'resume' 
                  ? 'border-neutral-900 bg-neutral-900' 
                  : 'border-neutral-300'"
              >
                <div v-if="selectedType === 'resume'" class="size-3 rounded-full bg-white" />
              </div>
            </div>
          </div>

          <!-- Portfolio Option -->
          <div
            @click="selectType('portfolio')"
            class="group p-8 rounded-2xl border-2 transition-all cursor-pointer hover:shadow-lg"
            :class="selectedType === 'portfolio' 
              ? 'border-neutral-900 bg-neutral-50 shadow-md' 
              : 'border-neutral-200 hover:border-neutral-300'"
          >
            <div class="flex flex-col items-center text-center gap-4">
              <div 
                class="p-4 rounded-2xl transition-all"
                :class="selectedType === 'portfolio' ? 'bg-neutral-900' : 'bg-neutral-100 group-hover:bg-neutral-200'"
              >
                <IconFolder 
                  class="size-12 transition-colors"
                  :class="selectedType === 'portfolio' ? 'text-white' : 'text-neutral-600'"
                />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-1">Portfolio Analysis</h3>
                <p class="text-sm text-neutral-600">Analyze your portfolio's impact, presentation, and effectiveness</p>
              </div>
              <div 
                class="size-6 rounded-full border-2 flex items-center justify-center transition-all mt-2"
                :class="selectedType === 'portfolio' 
                  ? 'border-neutral-900 bg-neutral-900' 
                  : 'border-neutral-300'"
              >
                <div v-if="selectedType === 'portfolio'" class="size-3 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>

        <button
          @click="startAnalysis"
          class="px-8 py-3.5 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all flex items-center gap-2 text-lg shadow-lg hover:shadow-xl"
        >
          Start AI Analysis
          <IconArrowRight class="size-5" />
        </button>
      </div>

      <!-- Step 2: Analyzing -->
      <div v-if="currentStep === 'analyzing'" class="flex flex-col items-center justify-center py-16 gap-8">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-full blur-2xl opacity-30 animate-pulse" />
          <div class="relative p-6 rounded-full bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
            <IconSparkles class="size-16 text-amber-600 animate-pulse" />
          </div>
        </div>

        <div class="text-center max-w-lg">
          <h2 class="text-2xl font-bold mb-2">Analyzing Your {{ selectedType === 'resume' ? 'Resume' : 'Portfolio' }}</h2>
          <p class="text-neutral-500">Our AI is reviewing your content for quality and optimization</p>
        </div>

        <div class="w-full max-w-2xl">
          <!-- Progress Bar -->
          <div class="mb-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-semibold text-neutral-700">{{ currentProgressLabel }}</span>
              <span class="text-sm font-bold text-neutral-900">{{ analysisProgress }}%</span>
            </div>
            <div class="w-full bg-neutral-200 h-3 rounded-full overflow-hidden">
              <div 
                class="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-500 ease-out rounded-full"
                :style="{ width: `${analysisProgress}%` }"
              />
            </div>
          </div>

          <!-- Progress Steps -->
          <div class="mt-6 space-y-2">
            <div 
              v-for="(step, index) in progressSteps" 
              :key="index"
              class="flex items-center gap-3 p-3 rounded-lg transition-all"
              :class="analysisProgress >= step.progress ? 'bg-emerald-50' : 'bg-neutral-50'"
            >
              <div 
                class="size-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                :class="analysisProgress >= step.progress 
                  ? 'bg-emerald-500' 
                  : analysisProgress >= step.progress - 20 
                    ? 'bg-neutral-300 animate-pulse' 
                    : 'bg-neutral-200'"
              >
                <IconCheck v-if="analysisProgress >= step.progress" class="size-4 text-white" />
                <IconLoader v-else-if="analysisProgress >= step.progress - 20" class="size-4 text-white animate-spin" />
              </div>
              <span 
                class="text-sm font-medium transition-colors"
                :class="analysisProgress >= step.progress ? 'text-emerald-900' : 'text-neutral-500'"
              >
                {{ step.label }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3: Results -->
      <div v-if="currentStep === 'results'" class="flex flex-col gap-6">
        <!-- Score Card -->
        <div class="p-8 rounded-2xl border bg-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-10 blur-3xl" :class="scoreGradient" />
          
          <div class="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex flex-col items-center md:items-start gap-4">
              <div>
                <h2 class="text-lg font-semibold text-neutral-600 mb-1">Overall AI Score</h2>
                <div class="flex items-baseline gap-3">
                  <span class="text-6xl font-black" :class="scoreColor">
                    {{ analysisResults.overallScore }}
                  </span>
                  <span class="text-3xl text-neutral-400 font-bold">/100</span>
                </div>
              </div>
              <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                <IconCheck class="size-4 text-emerald-600" />
                <span class="text-sm font-semibold text-emerald-700">
                  {{ analysisResults.overallScore >= 90 ? 'Excellent' : analysisResults.overallScore >= 75 ? 'Good' : 'Needs Improvement' }}
                </span>
              </div>
            </div>

            <!-- Key Metrics -->
            <div class="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div class="p-4 rounded-xl bg-neutral-50 border">
                <div class="flex items-center gap-2 mb-2">
                  <IconTarget class="size-4 text-neutral-600" />
                  <p class="text-xs font-semibold text-neutral-500 uppercase">ATS Score</p>
                </div>
                <p class="text-2xl font-black text-neutral-900">{{ analysisResults.keyMetrics.atsCompatibility }}%</p>
              </div>
              <div class="p-4 rounded-xl bg-neutral-50 border">
                <div class="flex items-center gap-2 mb-2">
                  <IconListDetails class="size-4 text-neutral-600" />
                  <p class="text-xs font-semibold text-neutral-500 uppercase">Readability</p>
                </div>
                <p class="text-2xl font-black text-neutral-900">{{ analysisResults.keyMetrics.readability }}%</p>
              </div>
              <div class="p-4 rounded-xl bg-neutral-50 border">
                <div class="flex items-center gap-2 mb-2">
                  <IconSparkles class="size-4 text-neutral-600" />
                  <p class="text-xs font-semibold text-neutral-500 uppercase">Impact</p>
                </div>
                <p class="text-2xl font-black text-neutral-900">{{ analysisResults.keyMetrics.impact }}%</p>
              </div>
              <div class="p-4 rounded-xl bg-neutral-50 border">
                <div class="flex items-center gap-2 mb-2">
                  <IconCheck class="size-4 text-neutral-600" />
                  <p class="text-xs font-semibold text-neutral-500 uppercase">Complete</p>
                </div>
                <p class="text-2xl font-black text-neutral-900">{{ analysisResults.keyMetrics.completeness }}%</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Detailed Insights -->
        <div class="grid gap-6 lg:grid-cols-2">
          <!-- Strengths -->
          <div class="p-6 rounded-2xl border bg-gradient-to-br from-emerald-50 to-white">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <div class="p-2 rounded-lg bg-emerald-100">
                <IconCheck class="size-5 text-emerald-600" />
              </div>
              Strengths
            </h3>
            <div class="space-y-3">
              <div 
                v-for="(strength, index) in analysisResults.strengths" 
                :key="index"
                class="flex gap-3 p-3 rounded-lg bg-white border border-emerald-100"
              >
                <IconCheck class="size-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p class="text-sm text-neutral-700 leading-relaxed">{{ strength }}</p>
              </div>
            </div>
          </div>

          <!-- Areas for Improvement -->
          <div class="p-6 rounded-2xl border bg-gradient-to-br from-amber-50 to-white">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <div class="p-2 rounded-lg bg-amber-100">
                <IconSparkles class="size-5 text-amber-600" />
              </div>
              Recommendations
            </h3>
            <div class="space-y-3">
              <div 
                v-for="(improvement, index) in analysisResults.improvements" 
                :key="index"
                class="flex gap-3 p-3 rounded-lg bg-white border border-amber-100"
              >
                <IconSparkles class="size-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p class="text-sm text-neutral-700 leading-relaxed">{{ improvement }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 p-6 rounded-2xl border bg-gradient-to-r from-neutral-50 to-white">
          <button
            @click="downloadReport"
            class="flex-1 px-6 py-3.5 rounded-lg border-2 border-neutral-900 font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <IconDownload class="size-5" />
            Download Report (PDF)
          </button>
          <button
            @click="saveToProject"
            class="flex-1 px-6 py-3.5 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
          >
            <IconCheck class="size-5" />
            Save to Project
          </button>
        </div>
      </div>

      <!-- Recent AI Analyses Section - Always Visible -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <IconSparkles class="size-6 text-amber-500" />
            <h2 class="text-2xl font-bold">Recent AI Analyses</h2>
          </div>
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
  </NuxtLayout>
</template>
