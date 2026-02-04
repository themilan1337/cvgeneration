<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 font-sans pb-20">
    <div v-if="article" class="max-w-4xl mx-auto px-6 py-12 md:py-24">
      <nav class="mb-12">
        <NuxtLink to="/blog" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline group">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </NuxtLink>
      </nav>

      <header class="mb-12">
        <div class="flex items-center gap-4 mb-6">
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full">
            {{ article.category }}
          </span>
          <time class="text-slate-500 dark:text-slate-400 text-sm" :datetime="article.date">
            {{ formatDate(article.date) }}
          </time>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
          {{ article.title }}
        </h1>

        <div class="h-1 bg-blue-600 w-24 mb-12"></div>
      </header>

      <div class="aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl">
        <img 
          :src="article.image" 
          :alt="article.title"
          class="w-full h-full object-cover"
        />
      </div>

      <article class="prose prose-lg dark:prose-invert max-w-none 
        prose-headings:text-slate-900 dark:prose-headings:text-white 
        prose-p:text-slate-600 dark:prose-p:text-slate-400
        prose-a:text-blue-600 dark:prose-a:text-blue-400
        prose-strong:text-slate-900 dark:prose-strong:text-white
        prose-code:text-blue-600 dark:prose-code:text-blue-400"
        v-html="article.content">
      </article>

      <footer class="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Share this article</h3>
            <p class="text-slate-500 dark:text-slate-400">Help others boost their professional presence.</p>
          </div>
          <div class="flex gap-4">
            <!-- Mock Social Buttons -->
            <div class="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition-all">
              𝕏
            </div>
            <div class="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-blue-700 hover:text-white transition-all">
              f
            </div>
            <div class="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-blue-800 hover:text-white transition-all">
              in
            </div>
          </div>
        </div>
      </footer>
    </div>
    
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Article Not Found</h1>
        <NuxtLink to="/blog" class="text-blue-600 hover:underline">Return to blog</NuxtLink>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { articles } from '@/utils/articles'
import Footer from '@/components/landing/Footer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const article = articles.find(a => a.slug === slug)

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

if (article) {
  useSeoMeta({
    title: `${article.title} | CV Gen Blog`,
    ogTitle: `${article.title} | CV Gen Blog`,
    description: article.seoDescription,
    ogDescription: article.seoDescription,
    ogImage: article.image,
    twitterCard: 'summary_large_image',
    articleAuthor: ['CV Gen Team'],
    articlePublishedTime: article.date,
    articleSection: article.category,
  })
}
</script>
