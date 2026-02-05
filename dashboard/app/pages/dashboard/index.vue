<script setup lang="ts">
import DataTable from "@/components/DataTable.vue"
import SectionCards from "@/components/SectionCards.vue"
import { ref } from "vue"

const data = ref([])
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="@container/main flex flex-1 flex-col gap-2">
      <div class="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div class="px-4 lg:px-6">
          <DataTable :data="data" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>