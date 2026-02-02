<template>
  <section id="pricing" class="py-24 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
        <p class="mt-4 text-lg text-gray-600">Start for free, upgrade when you need more power.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Free Plan -->
        <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col">
          <h3 class="text-lg font-semibold text-gray-900">Free</h3>
          <p class="mt-4 text-sm text-gray-500">Perfect for trying out the platform.</p>
          <p class="mt-8">
            <span class="text-4xl font-bold tracking-tight text-gray-900">$0</span>
            <span class="text-base font-medium text-gray-500">/mo</span>
          </p>
          <ul class="mt-8 space-y-4 flex-1">
            <li class="flex items-center text-sm text-gray-600">
               <svg class="h-5 w-5 text-blue-ribbon-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
               1 Resume
            </li>
             <li class="flex items-center text-sm text-gray-600">
               <svg class="h-5 w-5 text-blue-ribbon-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
               Basic Portfolio
            </li>
          </ul>
          <button class="mt-8 block w-full rounded-lg bg-gray-50 px-4 py-2.5 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100 ring-1 ring-inset ring-gray-200">
            Get Started
          </button>
        </div>

        <!-- Pro Plan -->
        <div class="rounded-2xl border-2 border-blue-ribbon-600 bg-white p-8 shadow-lg flex flex-col relative scale-105">
           <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-blue-ribbon-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Popular
           </div>
          <h3 class="text-lg font-semibold text-gray-900">Pro</h3>
          <p class="mt-4 text-sm text-gray-500">For serious professionals.</p>
          <p class="mt-8">
            <span class="text-4xl font-bold tracking-tight text-blue-ribbon-900">$12</span>
            <span class="text-base font-medium text-gray-500">/mo</span>
          </p>
          <ul class="mt-8 space-y-4 flex-1">
            <li class="flex items-center text-sm text-gray-600">
               <svg class="h-5 w-5 text-blue-ribbon-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
               Unlimited Resumes
            </li>
             <li class="flex items-center text-sm text-gray-600">
               <svg class="h-5 w-5 text-blue-ribbon-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
               Custom Domain
            </li>
             <li class="flex items-center text-sm text-gray-600">
               <svg class="h-5 w-5 text-blue-ribbon-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
               AI Personalization
            </li>
          </ul>
          <button class="mt-8 block w-full rounded-lg bg-blue-ribbon-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-ribbon-500 shadow-sm transition-colors">
            Start Free Trial
          </button>
        </div>

        <!-- Team Plan -->
        <div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col">
          <h3 class="text-lg font-semibold text-gray-900">Team</h3>
          <p class="mt-4 text-sm text-gray-500">For agencies and teams.</p>
          <p class="mt-8">
            <span class="text-4xl font-bold tracking-tight text-gray-900">$49</span>
            <span class="text-base font-medium text-gray-500">/mo</span>
          </p>
          <ul class="mt-8 space-y-4 flex-1">
            <li class="flex items-center text-sm text-gray-600">
               <svg class="h-5 w-5 text-blue-ribbon-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
               Includes 5 Pro seats
            </li>
             <li class="flex items-center text-sm text-gray-600">
               <svg class="h-5 w-5 text-blue-ribbon-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
               Team Analytics
            </li>
             <li class="flex items-center text-sm text-gray-600">
               <svg class="h-5 w-5 text-blue-ribbon-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
               Priority Support
            </li>
          </ul>
          <button class="mt-8 block w-full rounded-lg bg-gray-50 px-4 py-2.5 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100 ring-1 ring-inset ring-gray-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
