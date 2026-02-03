<template>
  <div class="min-h-screen font-sans text-gray-900 bg-white">
    <Hero />
    <Features />
    <ValueProposition />
    <Testimonials />
    <Pricing />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/landing/Hero.vue'
import Features from '@/components/landing/Features.vue'
import ValueProposition from '@/components/landing/ValueProposition.vue'
import Testimonials from '@/components/landing/Testimonials.vue'
import Pricing from '@/components/landing/Pricing.vue'
import Footer from '@/components/landing/Footer.vue'

useHead({
  title: 'CV Gen - AI Professional Presence',
  meta: [
    { name: 'description', content: 'Build your AI-powered professional presence in minutes. Generate resumes, portfolios, and custom domains effortlessly.' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>