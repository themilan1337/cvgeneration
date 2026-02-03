<script lang="ts" setup>
import { rand } from "@vueuse/core";
import TestimonialSlider from './TestimonialSlider.vue';

const testimonials = [
  {
    img: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
    quote:
      "CV Gen is sleeker than my star cruiser. Launch-ready in seconds. My professional identity is now light-years ahead.",
    name: "Buzz Lightyear",
    role: "Intergalactic Interface Command",
  },
  {
    img: `https://randomuser.me/api/portraits/women/${getRandomNumber()}.jpg`,
    quote:
      "Creating a portfolio here feels like ridin' a horse with turbo boosters. CV Gen's definitely got giddyup!",
    name: "Jessie",
    role: "UX Designer & Career Specialist",
  },
  {
    img: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
    quote:
      "I’ve seen some clunky resume builders in my day... but this one? Smoother than a tumbleweed on Tuesday.",
    name: "Woody",
    role: "Senior Recruiter",
  },
  {
    img: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
    quote:
      "I was terrified of job hunting. Then I used CV Gen. Nothing exploded. I'm actually thriving in my new role.",
    name: "Rex",
    role: "Software Engineer",
  },
];

function getRandomNumber() {
  return rand(1, 99);
}
</script>

<template>
  <section class="py-24 bg-white overflow-hidden border-t border-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What professionals say</h2>
        <p class="mt-4 text-lg text-gray-600">Join thousands of others who built their career with CV Gen.</p>
      </div>
      
      <div class="flex justify-center px-4 sm:px-12">
        <TestimonialSlider :testimonials="testimonials" />
      </div>
    </div>
  </section>
</template>
