<template>
  <header 
    class="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-opacity duration-500"
    :class="{ 'opacity-0': isAnimated && !isVisible, 'opacity-100': !isAnimated || isVisible }"
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="flex items-center gap-2">
         <span class="text-lg font-bold tracking-tight text-gray-900">CV Gen</span>
      </NuxtLink>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          <NuxtLink to="/#features" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group">
            Features
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink to="/blog" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group">
            Blog
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink to="/pricing" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group">
            Pricing
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          <NuxtLink to="/about" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group">
            About
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-600 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
      </nav>
      
      <div class="hidden md:flex items-center gap-4">
         <NuxtLink to="/login" class="text-sm font-semibold text-gray-900 hover:text-neutral-600 transition-colors">Log in</NuxtLink>
         <NuxtLink to="/signup" class="bg-neutral-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 rounded-lg">Sign up</NuxtLink>
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

  <!-- Mobile Menu Overlay -->
  <Teleport to="body">
    <div 
      ref="menuRef"
      class="fixed inset-0 bg-white z-[9999] translate-x-full md:hidden flex flex-col pt-24 px-8 w-full h-full shadow-2xl"
      style="background-color: #ffffff; opacity: 1 !important;"
    >
      <button 
        @click="toggleMenu"
        class="absolute top-6 right-6 h-10 w-10 flex items-center justify-center focus:outline-none"
      >
        <svg class="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="flex flex-col gap-8">
        <NuxtLink 
          v-for="(link, i) in menuLinks" 
          :key="i"
          :to="link.href"
          @click="isMenuOpen = false"
          class="text-2xl font-bold text-gray-900 hover:text-neutral-600 transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
        <hr class="border-gray-100" />
        <div class="flex flex-col gap-4">
          <NuxtLink to="/login" class="w-full text-left text-xl font-semibold text-gray-900">Log in</NuxtLink>
          <NuxtLink to="/signup" class="w-full bg-neutral-600 text-white py-4 rounded-xl text-xl font-bold text-center">Sign up</NuxtLink>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  isAnimated?: boolean
  isVisible?: boolean
}>()

const isMenuOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)

const menuLinks = [
  { name: 'Features', href: '/#features' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    gsap.to(menuRef.value, {
      x: 0,
      duration: 0.6,
      ease: 'power4.out'
    })
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
