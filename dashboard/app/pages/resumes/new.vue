<script setup lang="ts">
import { IconArrowLeft, IconSparkles } from "@tabler/icons-vue"
import { ref } from "vue"

interface ResumeFormData {
  title: string
  sectionType: string
  fullName: string
  email: string
  phone: string
  summary: string
}

const formData = ref<ResumeFormData>({
  title: "",
  sectionType: "classic",
  fullName: "",
  email: "",
  phone: "",
  summary: "",
})

const sectionTypes = [
  { value: "classic", label: "Classic Resume" },
  { value: "modern", label: "Modern CV" },
  { value: "formal", label: "Formal CV" },
]

function handleSubmit() {
  // TODO: Implement resume creation API call
  console.log("Creating resume:", formData.value)
  // Navigate back to resumes page after creation
  navigateTo("/resumes")
}

function handleCancel() {
  navigateTo("/resumes")
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <div class="flex items-center gap-4">
        <button
          @click="handleCancel"
          class="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Back to resumes"
        >
          <IconArrowLeft class="size-5" />
        </button>
        <div class="flex items-center gap-3">
          <IconSparkles class="size-8 text-amber-500" />
          <h1 class="text-3xl font-bold tracking-tight">Create New Resume</h1>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="grid gap-6 lg:grid-cols-2">
        <!-- Resume Title -->
        <div class="p-6 rounded-2xl border bg-white flex flex-col gap-4 lg:col-span-2">
          <h2 class="text-xl font-bold">Basic Information</h2>
          
          <div class="grid gap-4 lg:grid-cols-2">
            <div class="flex flex-col gap-2">
              <label for="title" class="text-sm font-semibold text-neutral-700">
                Resume Title <span class="text-red-500">*</span>
              </label>
              <input
                id="title"
                v-model="formData.title"
                type="text"
                required
                placeholder="e.g., Senior Software Engineer Resume"
                class="px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 outline-none transition-all"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="sectionType" class="text-sm font-semibold text-neutral-700">
                Resume Type <span class="text-red-500">*</span>
              </label>
              <select
                id="sectionType"
                v-model="formData.sectionType"
                required
                class="px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 outline-none transition-all bg-white"
              >
                <option v-for="type in sectionTypes" :key="type.value" :value="type.value">
                  {{ type.label }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Personal Details -->
        <div class="p-6 rounded-2xl border bg-white flex flex-col gap-4 lg:col-span-2">
          <h2 class="text-xl font-bold">Personal Details</h2>
          
          <div class="grid gap-4 lg:grid-cols-2">
            <div class="flex flex-col gap-2">
              <label for="fullName" class="text-sm font-semibold text-neutral-700">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                v-model="formData.fullName"
                type="text"
                required
                placeholder="John Doe"
                class="px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 outline-none transition-all"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm font-semibold text-neutral-700">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                placeholder="john@example.com"
                class="px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 outline-none transition-all"
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="phone" class="text-sm font-semibold text-neutral-700">
              Phone Number
            </label>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              class="px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 outline-none transition-all"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="summary" class="text-sm font-semibold text-neutral-700">
              Professional Summary
            </label>
            <textarea
              id="summary"
              v-model="formData.summary"
              rows="4"
              placeholder="Brief overview of your professional background and key achievements..."
              class="px-4 py-2.5 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 outline-none transition-all resize-none"
            />
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3 justify-end lg:col-span-2">
          <button
            type="button"
            @click="handleCancel"
            class="px-6 py-2.5 rounded-lg border border-neutral-200 font-semibold text-neutral-700 hover:bg-neutral-50 transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-6 py-2.5 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all"
          >
            Create Resume
          </button>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>
