<script setup lang="ts">
import { IconBell, IconCreditCard, IconLock, IconUser } from "@tabler/icons-vue"

const settingsSections = [
  {
    title: "Account Information",
    icon: IconUser,
    items: ["Profile Details", "Email Preferences", "Connected Socials"],
  },
  {
    title: "Security",
    icon: IconLock,
    items: ["Change Password", "Two-Factor Authentication", "Active Sessions"],
  },
  {
    title: "Billing",
    icon: IconCreditCard,
    items: ["Current Plan", "Payment Methods", "Invoices"],
  },
  {
    title: "Notifications",
    icon: IconBell,
    items: ["Email Alerts", "In-App Notifications", "Browser Push"],
  },
]
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-8 max-w-4xl">
      <h1 class="text-3xl font-bold tracking-tight">Settings</h1>
      
      <div v-for="section in settingsSections" :key="section.title" class="flex flex-col gap-4">
        <div class="flex items-center gap-2 border-b pb-2">
          <component :is="section.icon" class="size-5 text-neutral-500" />
          <h2 class="text-lg font-bold">{{ section.title }}</h2>
        </div>
        <div class="grid gap-2">
          <button v-for="item in section.items" :key="item" class="flex items-center justify-between p-4 rounded-xl border bg-white hover:bg-neutral-50 transition-all text-left">
            <span class="font-medium">{{ item }}</span>
            <span class="text-neutral-400 text-sm">Configure</span>
          </button>
        </div>
      </div>

      <div class="mt-4 p-6 rounded-2xl bg-red-50 border border-red-100">
        <h3 class="text-lg font-bold text-red-900 mb-2">Danger Zone</h3>
        <p class="text-sm text-red-700 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <button class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-all">
          Delete Account
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
