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

useSeoMeta({
  title: 'CV Gen | AI-Powered Professional Presence Platform',
  description: 'Build your AI-powered professional presence in minutes. Generate high-quality resumes, dynamic portfolios, and custom domains effortlessly with CV Gen.',
  ogTitle: 'CV Gen | AI-Powered Professional Presence Platform',
  ogDescription: 'Build your AI-powered professional presence in minutes. Generate high-quality resumes, dynamic portfolios, and custom domains effortlessly with CV Gen.',
  ogImage: 'https://cvgen.app/og-main.jpg',
  twitterCard: 'summary_large_image',
})
</script>