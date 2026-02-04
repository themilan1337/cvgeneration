<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 font-sans">
    <section class="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
      <div class="max-w-7xl mx-auto relative z-10">
        <h1 class="text-4xl md:text-7xl font-bold mb-8 italic">Empowering Professionals with <span class="text-blue-400">AI</span>.</h1>
        <p class="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
          At CV Gen, we believe that everyone deserves a world-class professional presence. Our mission is to bridge the gap between talent and opportunity using cutting-edge artificial intelligence.
        </p>
      </div>
      <!-- Decorative element -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent skew-x-12 transform translate-x-1/4"></div>
    </section>

    <main class="py-24 px-6 max-w-7xl mx-auto">
      <section class="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">Our Story</h2>
          <div class="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Founded in 2025, CV Gen started with a simple observation: the traditional process of resume building and portfolio creation was broken. It was slow, inconsistent, and often failed to accurately reflect a candidate's true potential.
            </p>
            <p>
              We saw an opportunity to use AI not just to automate tasks, but to enhance human creativity and storytelling. Today, we help thousands of professionals across the globe tell their stories better.
            </p>
          </div>
        </div>
        <div class="relative group">
          <div class="absolute -inset-4 bg-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 class="text-2xl font-bold mb-6 text-slate-900 dark:text-white italic">"AI is the ultimate creative partner for the modern professional."</h3>
            <p class="text-slate-500 dark:text-slate-400">— The CV Gen Vision</p>
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div v-for="(value, index) in values" :key="index" class="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500 transition-colors">
          <div class="text-4xl mb-6">{{ value.icon }}</div>
          <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{{ value.title }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{{ value.description }}</p>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/landing/Footer.vue'

const values = [
  {
    icon: "🚀",
    title: "Innovation",
    description: "We are constantly pushing the boundaries of what's possible with AI to provide you with the best tools."
  },
  {
    icon: "🤝",
    title: "Accessibility",
    description: "Our goal is to make high-quality professional branding tools available to everyone, everywhere."
  },
  {
    icon: "💎",
    title: "Quality",
    description: "We don't settle for mediocre. Our AI is trained to produce results that meet the highest professional standards."
  }
]

useSeoMeta({
  title: 'About Us | CV Gen - Our Mission & Vision',
  ogTitle: 'About Us | CV Gen - Our Mission & Vision',
  description: 'Learn about the team behind CV Gen and our mission to revolutionize professional branding with AI.',
  ogDescription: 'Learn about the team behind CV Gen and our mission to revolutionize professional branding with AI.',
  ogImage: 'https://cvgen.app/og-about.jpg',
  twitterCard: 'summary_large_image',
})
</script>
