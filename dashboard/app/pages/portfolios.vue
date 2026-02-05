<script setup lang="ts">
import DataTable from "@/components/DataTable.vue"
import { ref } from "vue"

const portfolios = ref([])
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold tracking-tight">Portfolios</h1>
        <button class="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-all">
          Create New Portfolio
        </button>
      </div>
      <DataTable v-if="portfolios.length > 0" :data="portfolios" />
      <div v-else class="flex flex-col items-center justify-center py-16 px-4">
        <p class="text-neutral-500 text-lg font-medium">No portfolios yet</p>
        <p class="text-neutral-400 text-sm mt-2">Create your first portfolio to showcase your work</p>
      </div>
    </div>
  </NuxtLayout>
</template>
