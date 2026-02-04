<template>
  <div class="min-h-screen font-sans text-gray-900 bg-white">
    <div class="pt-24 pb-12 px-6 text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Simple, Transparent Pricing</h1>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Choose the plan that's right for your career stage. No hidden fees, just pure professional growth.
      </p>
    </div>

    <Pricing />

    <section class="max-w-4xl mx-auto py-24 px-6 border-t border-slate-100 dark:border-slate-800">
      <h2 class="text-3xl font-bold text-center mb-16 dark:text-white">Frequently Asked Questions</h2>
      <div class="space-y-8">
        <div v-for="(faq, index) in faqs" :key="index" class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900">
          <h3 class="text-xl font-bold mb-4 dark:text-white">{{ faq.question }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Pricing from '@/components/landing/Pricing.vue'
import Footer from '@/components/landing/Footer.vue'

const faqs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time from your account settings. You will continue to have access to your plan until the end of your current billing period."
  },
  {
    question: "Does the AI support languages other than English?",
    answer: "Currently, our AI is optimized for English, but we are actively working on expanding support to other major languages including Spanish, French, and German."
  },
  {
    question: "How secure is my data?",
    answer: "We take data security very seriously. All your personal information and documents are encrypted and stored securely in accordance with industry best practices."
  }
]

useSeoMeta({
  title: 'Pricing | CV Gen - Affordable AI Solutions',
  ogTitle: 'Pricing | CV Gen - Affordable AI Solutions',
  description: 'Find the perfect plan to boost your career. Affordable AI-powered resume and portfolio generation for everyone.',
  ogDescription: 'Find the perfect plan to boost your career. Affordable AI-powered resume and portfolio generation for everyone.',
  ogImage: 'https://cvgen.app/og-pricing.jpg',
  twitterCard: 'summary_large_image',
})
</script>
