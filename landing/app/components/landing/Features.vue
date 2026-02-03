<template>
  <section id="features" class="py-24 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to grow your career</h2>
        <p class="mt-4 text-lg text-gray-600">Powerful tools to help you land your dream job and build your personal brand.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-ribbon-100 transition-all group">
          <div class="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-ribbon-50 mb-6 group-hover:bg-blue-ribbon-100 transition-colors">
             <svg class="w-6 h-6 text-blue-ribbon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
             </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">AI Resume Builder</h3>
          <p class="text-gray-600">Create tailored resumes instantly with our advanced AI engine that understands your unique skills.</p>
        </div>

        <!-- Feature 2 -->
        <div class="p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-ribbon-100 transition-all group">
           <div class="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-ribbon-50 mb-6 group-hover:bg-blue-ribbon-100 transition-colors">
             <svg class="w-6 h-6 text-blue-ribbon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
           </div>
           <h3 class="text-xl font-bold text-gray-900 mb-3">Portfolio Generator</h3>
           <p class="text-gray-600">Showcase your work with stunning, auto-generated portfolio sites that look professional on any device.</p>
        </div>

        <!-- Feature 3 -->
        <div class="p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-ribbon-100 transition-all group">
           <div class="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-ribbon-50 mb-6 group-hover:bg-blue-ribbon-100 transition-colors">
             <svg class="w-6 h-6 text-blue-ribbon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
             </svg>
           </div>
           <h3 class="text-xl font-bold text-gray-900 mb-3">Custom Domain</h3>
           <p class="text-gray-600">Connect your own domain name to establish your personal brand and look more credible.</p>
        </div>

        <!-- Feature 4 -->
        <div class="p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-ribbon-100 transition-all group">
           <div class="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-ribbon-50 mb-6 group-hover:bg-blue-ribbon-100 transition-colors">
             <svg class="w-6 h-6 text-blue-ribbon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
           </div>
           <h3 class="text-xl font-bold text-gray-900 mb-3">Smart Personalization</h3>
           <p class="text-gray-600">Automatically adapt your content to different job applications to maximize your success rate.</p>
        </div>

        <!-- Feature 5 -->
         <div class="p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-ribbon-100 transition-all group">
           <div class="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-ribbon-50 mb-6 group-hover:bg-blue-ribbon-100 transition-colors">
             <svg class="w-6 h-6 text-blue-ribbon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
             </svg>
           </div>
           <h3 class="text-xl font-bold text-gray-900 mb-3">Recruiter Insights</h3>
           <p class="text-gray-600">Get data-driven feedback on your profile to understand how you compare to other candidates.</p>
        </div>

        <!-- Feature 6 -->
         <div class="p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-ribbon-100 transition-all group">
           <div class="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-ribbon-50 mb-6 group-hover:bg-blue-ribbon-100 transition-colors">
             <svg class="w-6 h-6 text-blue-ribbon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
             </svg>
           </div>
           <h3 class="text-xl font-bold text-gray-900 mb-3">One-click Publish</h3>
           <p class="text-gray-600">Go live in seconds. Update your information anywhere, anytime, and changes reflect instantly.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
