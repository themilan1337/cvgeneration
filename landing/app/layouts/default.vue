<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :is-animated="isHome" :is-visible="headerVisible" v-if="!hideNavbar" />
    <main class="flex-grow">
      <slot />
    </main>
    <!-- Footer is already included in most pages, but we could move it here too for consistency if needed -->
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/landing/Navbar.vue'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'

const route = useRoute()
const isHome = computed(() => route.path === '/')
const headerVisible = ref(false)

// We might want to selectively hide the navbar on certain pages if needed
const hideNavbar = computed(() => false)

onMounted(() => {
  if (isHome.value) {
    // Delay header visibility on homepage to sync with Hero animation
    // Hero.vue handles the timing, we just need to provide the state
    // Actually, Hero.vue will now need to tell the layout when to show the header
    // Or we just show it after a static delay
    setTimeout(() => {
      headerVisible.value = true
    }, 100)
  } else {
    headerVisible.value = true
  }
})
</script>
