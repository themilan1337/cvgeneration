<template>
  <section class="relative bg-white pt-6 pb-20 lg:pt-8 lg:pb-28 overflow-hidden">
    <!-- Sticky Header -->
    <header class="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2">
           <div class="h-8 w-8 bg-black rounded-lg"></div>
           <span class="text-lg font-bold tracking-tight text-gray-900">CV Gen</span>
        </div>
        <nav class="hidden md:flex gap-8">
            <a href="#features" class="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" class="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#about" class="text-sm font-medium text-gray-600 hover:text-gray-900">About</a>
        </nav>
        <div class="flex items-center gap-4">
           <button class="text-sm font-semibold text-gray-900 hover:text-gray-700">Log in</button>
           <button class="bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 rounded-lg">Sign up</button>
        </div>
      </div>
    </header>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
      <div class="lg:grid lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
            Build your AI-powered professional presence in minutes.
          </h1>
          <p class="mx-auto lg:mx-0 max-w-lg text-lg text-gray-600 mb-10">
            Generate resumes, portfolios, and custom domains effortlessly. Stand out with AI-driven insights and design.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <button class="rounded-lg bg-black px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Get Started
            </button>
            <button class="rounded-lg bg-gray-100 px-8 py-3.5 text-base font-semibold text-gray-900 hover:bg-gray-200">
              View Demo
            </button>
          </div>
        </div>
        <div class="relative mt-16 lg:mt-0 lg:col-span-6">
           <div class="relative rounded-2xl bg-gray-50 border border-gray-200 p-2 shadow-sm aspect-[4/3] flex items-center justify-center">
              <div class="text-gray-400 font-medium">UI Mockup Placeholder</div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Minimal setup
</script>
