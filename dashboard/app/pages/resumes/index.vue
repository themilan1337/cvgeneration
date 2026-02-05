<script setup lang="ts">
import DataTable from "@/components/DataTable.vue"
import { ref } from "vue"

const resumes = ref([])

function navigateToCreate() {
  navigateTo("/resumes/new")
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold tracking-tight">My Resumes</h1>
        <button 
          @click="navigateToCreate"
          class="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-all"
        >
          Create New Resume
        </button>
      </div>
      <DataTable v-if="resumes.length > 0" :data="resumes" />
      <div v-else class="flex flex-col items-center justify-center py-16 px-4">
        <p class="text-neutral-500 text-lg font-medium">No resumes yet</p>
        <p class="text-neutral-400 text-sm mt-2">Create your first resume to get started</p>
      </div>
    </div>
  </NuxtLayout>
</template>
