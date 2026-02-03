<template>
  <section class="relative bg-white pt-0 pb-20 lg:pt-0 lg:pb-28 overflow-hidden">
    <!-- Sticky Header -->
    <header 
      ref="headerRef"
      class="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md opacity-0"
    >
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-2">
           <div class="h-8 w-8 bg-blue-ribbon-600 rounded-lg"></div>
           <span class="text-lg font-bold tracking-tight text-gray-900">CV Gen</span>
        </div>
        
        <!-- Desktop Nav -->
        <nav class="hidden md:flex gap-8">
            <a href="#features" class="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" class="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#about" class="text-sm font-medium text-gray-600 hover:text-gray-900">About</a>
        </nav>
        
        <div class="hidden md:flex items-center gap-4">
           <button class="text-sm font-semibold text-gray-900 hover:text-blue-ribbon-600 transition-colors">Log in</button>
           <button class="bg-blue-ribbon-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-ribbon-700 rounded-lg">Sign up</button>
        </div>

        <!-- Burger Button (Mobile) -->
        <button 
          @click="toggleMenu"
          class="flex md:hidden flex-col justify-center items-center h-10 w-10 gap-1.5 focus:outline-none z-[60]"
        >
          <span 
            class="h-0.5 w-6 bg-gray-900 transition-transform duration-300 rounded-full"
            :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
          ></span>
          <span 
            class="h-0.5 w-6 bg-gray-900 transition-opacity duration-300 rounded-full"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span 
            class="h-0.5 w-6 bg-gray-900 transition-transform duration-300 rounded-full"
            :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
          ></span>
        </button>
      </div>

    </header>

    <!-- Mobile Menu Overlay (Teleported to body to fix transparency/stacking issues) -->
    <Teleport to="body">
      <div 
        ref="menuRef"
        class="fixed inset-0 bg-white z-[9999] translate-x-full md:hidden flex flex-col pt-24 px-8 w-full h-full"
        style="background-color: #ffffff; opacity: 1 !important;"
      >
        <!-- Close button inside the menu for better UX -->
        <button 
          @click="toggleMenu"
          class="absolute top-6 right-6 h-10 w-10 flex items-center justify-center focus:outline-none"
        >
          <svg class="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex flex-col gap-8">
          <a 
            v-for="(link, i) in menuLinks" 
            :key="i"
            :href="link.href"
            ref="menuLinksRef"
            @click="isMenuOpen = false"
            class="text-2xl font-bold text-gray-900 hover:text-blue-ribbon-600 transition-colors"
          >
            {{ link.name }}
          </a>
          <hr class="border-gray-100" />
          <div class="flex flex-col gap-4">
            <button class="w-full text-left text-xl font-semibold text-gray-900">Log in</button>
            <button class="w-full bg-blue-ribbon-600 text-white py-4 rounded-xl text-xl font-bold">Sign up</button>
          </div>
        </div>
      </div>
    </Teleport>

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
             <button class="rounded-lg bg-blue-ribbon-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-ribbon-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-ribbon-600 transition-all">
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
import { ref, watch, onMounted } from 'vue'
import gsap from 'gsap'
import LogoLoop from './LogoLoop.vue'

const isMenuOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const subTitleRef = ref<HTMLElement | null>(null)
const actionsRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const logoLoopRef = ref<HTMLElement | null>(null)
const menuLinksRef = ref<HTMLElement[]>([])

const techLogos = [
  { node: '<span class="text-2xl font-bold text-gray-300">Company</span>' },
  { node: '<span class="text-2xl font-bold text-gray-300">Startup</span>' },
  { node: '<span class="text-2xl font-bold text-gray-300">Agency</span>' },
  { node: '<span class="text-2xl font-bold text-gray-300">Corporation</span>' },
  { node: '<span class="text-2xl font-bold text-gray-300">Venture</span>' },
]

const menuLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } })
  
  tl.to(headerRef.value, { opacity: 1 })
    .to(titleRef.value, { opacity: 1 }, "-=0.4")
    .to(subTitleRef.value, { opacity: 1 }, "-=0.6")
    .to(actionsRef.value, { opacity: 1 }, "-=0.6")
    .to(imageRef.value, { opacity: 1 }, "-=0.6")
    .to(logoLoopRef.value, { opacity: 1 }, "-=0.6")
})

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    gsap.to(menuRef.value, {
      x: 0,
      duration: 0.6,
      ease: 'power4.out'
    })
    gsap.fromTo(menuLinksRef.value, 
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.1 }
    )
  } else {
    document.body.style.overflow = ''
    gsap.to(menuRef.value, {
      x: '100%',
      duration: 0.4,
      ease: 'power3.in'
    })
  }
})
</script>
