<script setup lang="ts">
import { IconArrowLeft, IconBrandLinkedin, IconCloudUpload, IconFile, IconSparkles, IconX } from "@tabler/icons-vue"
import { ref } from "vue"

type CreationMethod = "upload" | "linkedin" | "scratch"

interface PortfolioFormData {
  title: string
  method: CreationMethod
  linkedinUrl: string
  uploadedFile: File | null
}

const formData = ref<PortfolioFormData>({
  title: "",
  method: "upload",
  linkedinUrl: "",
  uploadedFile: null,
})

const isDragging = ref(false)
const isImporting = ref(false)
const fileInputRef = ref<HTMLInputElement | null>(null)

const creationMethods = [
  { 
    value: "upload" as CreationMethod, 
    label: "Upload File",
    description: "Upload your existing resume/CV",
    icon: IconCloudUpload
  },
  { 
    value: "linkedin" as CreationMethod, 
    label: "Import from LinkedIn",
    description: "Auto-fill from your LinkedIn profile",
    icon: IconBrandLinkedin
  },
  { 
    value: "scratch" as CreationMethod, 
    label: "Start from Scratch",
    description: "Build your portfolio step by step",
    icon: IconSparkles
  },
]

function handleCancel() {
  navigateTo("/portfolios")
}

function handleDragEnter(e: DragEvent) {
  e.preventDefault()
  isDragging.value = true
}

function handleDragLeave(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false
}

function handleDragOver(e: DragEvent) {
  e.preventDefault()
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  isDragging.value = false
  
  const files = e.dataTransfer?.files
  if (files && files.length > 0 && files[0]) {
    handleFileSelect(files[0])
  }
}

function handleFileSelect(file: File) {
  // Validate file type
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ]
  
  if (!allowedTypes.includes(file.type)) {
    alert('Please upload a PDF, DOC, DOCX, or TXT file')
    return
  }
  
  // Validate file size (10MB max)
  const maxSize = 10 * 1024 * 1024
  if (file.size > maxSize) {
    alert('File size must be less than 10MB')
    return
  }
  
  formData.value.uploadedFile = file
}

function handleFileInputChange(e: Event) {
  const target = e.target as HTMLInputElement
  const files = target.files
  if (files && files.length > 0 && files[0]) {
    handleFileSelect(files[0])
  }
}

function removeFile() {
  formData.value.uploadedFile = null
  if (fileInputRef.value) {
    fileInputRef.value.value = ''
  }
}

function openFileDialog() {
  fileInputRef.value?.click()
}

async function handleLinkedInImport() {
  if (!formData.value.linkedinUrl) {
    alert('Please enter your LinkedIn profile URL')
    return
  }
  
  isImporting.value = true
  
  // Simulate API call to import from LinkedIn
  setTimeout(() => {
    isImporting.value = false
    // TODO: Implement actual LinkedIn import
    console.log('Importing from LinkedIn:', formData.value.linkedinUrl)
    navigateTo('/portfolios')
  }, 2500)
}

function handleSubmit() {
  if (!formData.value.title) {
    alert('Please enter a portfolio title')
    return
  }
  
  if (formData.value.method === 'upload' && !formData.value.uploadedFile) {
    alert('Please upload a file')
    return
  }
  
  if (formData.value.method === 'linkedin') {
    handleLinkedInImport()
    return
  }
  
  // TODO: Implement portfolio creation API call
  console.log('Creating portfolio:', formData.value)
  navigateTo('/portfolios')
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <button
          @click="handleCancel"
          class="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Back to portfolios"
        >
          <IconArrowLeft class="size-5" />
        </button>
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Create New Portfolio</h1>
          <p class="text-neutral-500 mt-1">Showcase your work and achievements</p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="grid gap-6 lg:grid-cols-3">
        <!-- Main Content -->
        <div class="lg:col-span-2 flex flex-col gap-6">
          <!-- Portfolio Title -->
          <div class="p-6 rounded-2xl border bg-white flex flex-col gap-4">
            <div>
              <h2 class="text-xl font-bold">Portfolio Information</h2>
              <p class="text-sm text-neutral-500 mt-1">Give your portfolio a descriptive title</p>
            </div>
            
            <div class="flex flex-col gap-2">
              <label for="title" class="text-sm font-semibold text-neutral-700">
                Portfolio Title <span class="text-red-500">*</span>
              </label>
              <input
                id="title"
                v-model="formData.title"
                type="text"
                required
                placeholder="e.g., UX/UI Design Portfolio 2024"
                class="px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 outline-none transition-all"
              />
            </div>
          </div>

          <!-- Creation Method Selection -->
          <div class="p-6 rounded-2xl border bg-white flex flex-col gap-4">
            <div>
              <h2 class="text-xl font-bold">How would you like to create?</h2>
              <p class="text-sm text-neutral-500 mt-1">Choose your preferred method</p>
            </div>

            <div class="grid gap-3">
              <div
                v-for="method in creationMethods"
                :key="method.value"
                @click="formData.method = method.value"
                class="p-4 rounded-xl border-2 transition-all cursor-pointer hover:border-neutral-300"
                :class="formData.method === method.value ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200'"
              >
                <div class="flex items-start gap-3">
                  <div class="mt-0.5">
                    <div 
                      class="size-5 rounded-full border-2 flex items-center justify-center transition-all"
                      :class="formData.method === method.value ? 'border-neutral-900 bg-neutral-900' : 'border-neutral-300'"
                    >
                      <div v-if="formData.method === method.value" class="size-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2">
                      <component :is="method.icon" class="size-5 text-neutral-700" />
                      <div class="font-bold text-lg">{{ method.label }}</div>
                    </div>
                    <p class="text-sm text-neutral-600 mt-0.5">{{ method.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Method-specific Content -->
          <!-- Upload Method -->
          <div v-if="formData.method === 'upload'" class="p-6 rounded-2xl border bg-white flex flex-col gap-4">
            <div>
              <h2 class="text-xl font-bold">Upload Your File</h2>
              <p class="text-sm text-neutral-500 mt-1">Drag and drop or click to browse</p>
            </div>

            <!-- Drag & Drop Zone -->
            <div
              @dragenter="handleDragEnter"
              @dragleave="handleDragLeave"
              @dragover="handleDragOver"
              @drop="handleDrop"
              @click="openFileDialog"
              class="border-2 border-dashed rounded-xl p-8 transition-all cursor-pointer"
              :class="isDragging 
                ? 'border-neutral-900 bg-neutral-50' 
                : formData.uploadedFile 
                  ? 'border-emerald-300 bg-emerald-50' 
                  : 'border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50'"
            >
              <input
                ref="fileInputRef"
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                class="hidden"
                @change="handleFileInputChange"
              />

              <div v-if="!formData.uploadedFile" class="flex flex-col items-center justify-center gap-3 text-center">
                <IconCloudUpload class="size-12 text-neutral-400" />
                <div>
                  <p class="text-lg font-semibold text-neutral-700">
                    Drop your file here, or <span class="text-neutral-900">browse</span>
                  </p>
                  <p class="text-sm text-neutral-500 mt-1">Supports PDF, DOC, DOCX, TXT (max 10MB)</p>
                </div>
              </div>

              <div v-else class="flex items-center gap-4">
                <div class="p-3 rounded-lg bg-emerald-100">
                  <IconFile class="size-8 text-emerald-700" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-semibold text-neutral-900 truncate">{{ formData.uploadedFile.name }}</p>
                  <p class="text-sm text-neutral-500">{{ formatFileSize(formData.uploadedFile.size) }}</p>
                </div>
                <button
                  @click.stop="removeFile"
                  type="button"
                  class="p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                >
                  <IconX class="size-5" />
                </button>
              </div>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p class="text-sm text-blue-800">
                <strong>Tip:</strong> We'll automatically extract information from your file to create your portfolio. 
                You can edit and enhance it afterwards.
              </p>
            </div>
          </div>

          <!-- LinkedIn Import Method -->
          <div v-if="formData.method === 'linkedin'" class="p-6 rounded-2xl border bg-white flex flex-col gap-4">
            <div>
              <h2 class="text-xl font-bold">Import from LinkedIn</h2>
              <p class="text-sm text-neutral-500 mt-1">Connect your LinkedIn profile to auto-fill your portfolio</p>
            </div>

            <div class="flex flex-col gap-2">
              <label for="linkedinUrl" class="text-sm font-semibold text-neutral-700">
                LinkedIn Profile URL <span class="text-red-500">*</span>
              </label>
              <div class="flex gap-2">
                <input
                  id="linkedinUrl"
                  v-model="formData.linkedinUrl"
                  type="url"
                  required
                  placeholder="https://www.linkedin.com/in/your-profile"
                  class="flex-1 px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 outline-none transition-all"
                />
              </div>
            </div>

            <div class="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <div class="flex gap-3">
                <IconBrandLinkedin class="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div class="text-sm">
                  <p class="text-blue-900 font-semibold mb-1">How it works:</p>
                  <ol class="list-decimal list-inside space-y-1 text-blue-800">
                    <li>Make sure your LinkedIn profile is set to public</li>
                    <li>Paste your LinkedIn profile URL above</li>
                    <li>We'll import your experience, education, and skills</li>
                    <li>Review and customize your portfolio</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <!-- Start from Scratch Method -->
          <div v-if="formData.method === 'scratch'" class="p-6 rounded-2xl border bg-white flex flex-col gap-4">
            <div>
              <h2 class="text-xl font-bold">Build from Scratch</h2>
              <p class="text-sm text-neutral-500 mt-1">Create your portfolio step by step with our guided builder</p>
            </div>

            <div class="p-8 rounded-xl bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 border border-purple-200">
              <div class="flex flex-col items-center text-center gap-4">
                <IconSparkles class="size-12 text-purple-600" />
                <div>
                  <h3 class="text-lg font-bold text-neutral-900">Interactive Portfolio Builder</h3>
                  <p class="text-sm text-neutral-600 mt-1">
                    You'll be guided through each section to create a professional portfolio:
                  </p>
                </div>
                <div class="grid grid-cols-2 gap-3 w-full mt-2">
                  <div class="p-3 bg-white rounded-lg border">
                    <p class="text-xs font-semibold text-neutral-500">STEP 1</p>
                    <p class="text-sm font-bold text-neutral-900 mt-1">About You</p>
                  </div>
                  <div class="p-3 bg-white rounded-lg border">
                    <p class="text-xs font-semibold text-neutral-500">STEP 2</p>
                    <p class="text-sm font-bold text-neutral-900 mt-1">Projects</p>
                  </div>
                  <div class="p-3 bg-white rounded-lg border">
                    <p class="text-xs font-semibold text-neutral-500">STEP 3</p>
                    <p class="text-sm font-bold text-neutral-900 mt-1">Experience</p>
                  </div>
                  <div class="p-3 bg-white rounded-lg border">
                    <p class="text-xs font-semibold text-neutral-500">STEP 4</p>
                    <p class="text-sm font-bold text-neutral-900 mt-1">Skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3 justify-end">
            <button
              type="button"
              @click="handleCancel"
              class="px-6 py-2.5 rounded-lg border border-neutral-200 font-semibold text-neutral-700 hover:bg-neutral-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isImporting"
              class="px-6 py-2.5 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <IconBrandLinkedin v-if="isImporting" class="size-4 animate-pulse" />
              {{ isImporting ? 'Importing from LinkedIn...' : 'Create Portfolio' }}
            </button>
          </div>
        </div>

        <!-- Sidebar - Tips -->
        <div class="lg:col-span-1 flex flex-col gap-4">
          <!-- Tips Card -->
          <div class="p-6 rounded-2xl border bg-gradient-to-br from-amber-50 to-white sticky top-6">
            <h3 class="font-bold text-lg mb-3">💡 Pro Tips</h3>
            <div class="flex flex-col gap-3 text-sm">
              <div class="p-3 bg-white rounded-lg border">
                <p class="font-semibold text-neutral-900 mb-1">Upload Method</p>
                <p class="text-neutral-600">Best for quickly getting started with existing content</p>
              </div>
              <div class="p-3 bg-white rounded-lg border">
                <p class="font-semibold text-neutral-900 mb-1">LinkedIn Import</p>
                <p class="text-neutral-600">Automatically fills in your professional information</p>
              </div>
              <div class="p-3 bg-white rounded-lg border">
                <p class="font-semibold text-neutral-900 mb-1">From Scratch</p>
                <p class="text-neutral-600">Full creative control with guided steps</p>
              </div>
            </div>
          </div>

          <!-- File Format Support -->
          <div class="p-6 rounded-2xl border bg-white">
            <h3 class="font-bold text-lg mb-3">Supported Formats</h3>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2 text-sm">
                <div class="size-2 rounded-full bg-emerald-500"></div>
                <span class="text-neutral-700">PDF Documents</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <div class="size-2 rounded-full bg-emerald-500"></div>
                <span class="text-neutral-700">Microsoft Word (.doc, .docx)</span>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <div class="size-2 rounded-full bg-emerald-500"></div>
                <span class="text-neutral-700">Text Files (.txt)</span>
              </div>
              <div class="mt-2 pt-2 border-t">
                <p class="text-xs text-neutral-500">Maximum file size: 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>
