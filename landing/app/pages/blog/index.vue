<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
    <section class="py-24 px-6 bg-slate-50 dark:bg-slate-900">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6">Blog</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Expert insights on AI, career growth, and personal branding.
        </p>
      </div>
    </section>

    <main class="max-w-7xl mx-auto py-16 px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <NuxtLink 
          v-for="article in articles" 
          :key="article.slug"
          :to="`/blog/${article.slug}`"
          class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
        >
          <div class="relative h-56 overflow-hidden">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-800 dark:text-slate-200 text-sm font-medium rounded-full border border-white/20">
                {{ article.category }}
              </span>
            </div>
          </div>
          
          <div class="p-8">
            <div class="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
              <time :datetime="article.date">{{ formatDate(article.date) }}</time>
              <span class="mx-2">•</span>
              <span>5 min read</span>
            </div>
            
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
              {{ article.title }}
            </h2>
            
            <p class="text-slate-600 dark:text-slate-400 line-clamp-3 mb-6">
              {{ article.excerpt }}
            </p>
            
            <div class="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
              Read More 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { articles } from '@/utils/articles'
import Footer from '@/components/landing/Footer.vue'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useSeoMeta({
  title: 'Blog | CV Gen - AI Career Insights',
  ogTitle: 'Blog | CV Gen - AI Career Insights',
  description: 'Explore the latest articles on AI-powered resume writing, professional branding, and career success strategies.',
  ogDescription: 'Explore the latest articles on AI-powered resume writing, professional branding, and career success strategies.',
  ogImage: 'https://serene.ws/og-blog.jpg',
  twitterCard: 'summary_large_image',
})
</script>