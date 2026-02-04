<template>
  <section class="relative bg-white pt-0 pb-20 lg:pt-0 lg:pb-28 overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 pb-12">
      <div class="lg:grid lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          <h1 ref="titleRef" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6 text-center lg:text-left opacity-0">
            Build your professional presence in minutes.
          </h1>
          <p ref="subTitleRef" class="mx-auto lg:mx-0 max-w-lg text-lg text-gray-600 mb-10 opacity-0">
            Generate resumes, portfolios, and custom domains effortlessly. Stand out with AI-driven insights and design.
          </p>
          <div ref="actionsRef" class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0">
             <button class="rounded-lg bg-neutral-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 transition-all">
              Get Started
            </button>
            <button class="rounded-lg bg-gray-100 px-8 py-3.5 text-base font-semibold text-gray-900 hover:bg-gray-200">
              View Demo
            </button>
          </div>
        </div>
        <div ref="imageRef" class="relative mt-16 lg:mt-0 lg:col-span-6 flex items-center justify-center opacity-0">
           <img src="/hero.png" alt="Hero Illustration" class="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </div>

    <!-- Logo Loop Section -->
    <div ref="logoLoopRef" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 opacity-0">
      <p class="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-12">
        Trusted by creators and professionals
      </p>
      <div class="relative overflow-hidden">
        <LogoLoop
          :logos="techLogos"
          :speed="80"
          direction="left"
          :logoHeight="32"
          :gap="80"
          :pauseOnHover="true"
          :scaleOnHover="false"
          :fadeOut="true"
          fadeOutColor="#ffffff"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import LogoLoop from './LogoLoop.vue'

const titleRef = ref<HTMLElement | null>(null)
const subTitleRef = ref<HTMLElement | null>(null)
const actionsRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const logoLoopRef = ref<HTMLElement | null>(null)

const techLogos = [
  { node: '<span class="text-2xl font-bold text-gray-300">Company</span>' },
  { node: '<span class="text-2xl font-bold text-gray-300">Startup</span>' },
  { node: '<span class="text-2xl font-bold text-gray-300">Agency</span>' },
  { node: '<span class="text-2xl font-bold text-gray-300">Corporation</span>' },
  { node: '<span class="text-2xl font-bold text-gray-300">Venture</span>' },
]

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } })
  
  tl.to(titleRef.value, { opacity: 1 }, "+=0.2")
    .to(subTitleRef.value, { opacity: 1 }, "-=0.6")
    .to(actionsRef.value, { opacity: 1 }, "-=0.6")
    .to(imageRef.value, { opacity: 1 }, "-=0.6")
    .to(logoLoopRef.value, { opacity: 1 }, "-=0.6")
})
</script>
