<script setup lang="ts">
import { IconArrowLeft, IconCheck, IconCopy, IconExternalLink, IconLoader } from "@tabler/icons-vue"
import { ref, computed } from "vue"

type ConnectionMethod = "cname" | "arecord" | "nameservers"

const domain = ref("")
const selectedMethod = ref<ConnectionMethod>("cname")
const isVerifying = ref(false)
const verificationStatus = ref<"idle" | "success" | "error">("idle")
const copiedField = ref<string | null>(null)

const connectionMethods = [
  { 
    value: "cname" as ConnectionMethod, 
    label: "CNAME + TXT",
    description: "Рекомендуется",
    difficulty: "Легко"
  },
  { 
    value: "arecord" as ConnectionMethod, 
    label: "A Record",
    description: "Для корневых доменов",
    difficulty: "Средне"
  },
  { 
    value: "nameservers" as ConnectionMethod, 
    label: "Nameservers",
    description: "Полный контроль",
    difficulty: "Сложно"
  },
]

// Mock DNS records - в реальности будут генерироваться на сервере
const dnsRecords = computed(() => {
  const cleanDomain = domain.value.toLowerCase().trim()
  
  if (selectedMethod.value === "cname") {
    return [
      {
        type: "CNAME",
        name: cleanDomain || "your-domain.com",
        value: "cname.cvgeneration.app",
        ttl: "3600"
      },
      {
        type: "TXT",
        name: `_cvgen-verification.${cleanDomain || "your-domain.com"}`,
        value: "cvgen-site-verification=abc123xyz789",
        ttl: "3600"
      }
    ]
  } else if (selectedMethod.value === "arecord") {
    return [
      {
        type: "A",
        name: "@",
        value: "76.76.21.21",
        ttl: "3600"
      },
      {
        type: "TXT",
        name: `_cvgen-verification`,
        value: "cvgen-site-verification=abc123xyz789",
        ttl: "3600"
      }
    ]
  } else {
    return [
      {
        type: "NS",
        name: "@",
        value: "ns1.cvgeneration.app",
        ttl: "-"
      },
      {
        type: "NS",
        name: "@",
        value: "ns2.cvgeneration.app",
        ttl: "-"
      }
    ]
  }
})

function handleCancel() {
  navigateTo("/domains")
}

async function copyToClipboard(text: string, field: string) {
  try {
    await navigator.clipboard.writeText(text)
    copiedField.value = field
    setTimeout(() => {
      copiedField.value = null
    }, 2000)
  } catch (err) {
    console.error("Failed to copy:", err)
  }
}

async function verifyDomain() {
  if (!domain.value) return
  
  isVerifying.value = true
  verificationStatus.value = "idle"
  
  // Simulate API call
  setTimeout(() => {
    // Mock verification - в реальности будет API запрос
    const success = Math.random() > 0.3
    verificationStatus.value = success ? "success" : "error"
    isVerifying.value = false
    
    if (success) {
      setTimeout(() => {
        navigateTo("/domains")
      }, 2000)
    }
  }, 2500)
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="px-4 lg:px-6 py-6 flex flex-col gap-6">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <button
          @click="handleCancel"
          class="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Back to domains"
        >
          <IconArrowLeft class="size-5" />
        </button>
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Connect Custom Domain</h1>
          <p class="text-neutral-500 mt-1">Connect your domain to make your portfolio accessible via your custom URL</p>
        </div>
      </div>

      <div class="grid gap-6 lg:grid-cols-3">
        <!-- Main Content -->
        <div class="lg:col-span-2 flex flex-col gap-6">
          <!-- Domain Input -->
          <div class="p-6 rounded-2xl border bg-white flex flex-col gap-4">
            <div>
              <h2 class="text-xl font-bold">Your Domain</h2>
              <p class="text-sm text-neutral-500 mt-1">Enter the domain you want to connect</p>
            </div>
            
            <div class="flex flex-col gap-2">
              <label for="domain" class="text-sm font-semibold text-neutral-700">
                Domain Name <span class="text-red-500">*</span>
              </label>
              <input
                id="domain"
                v-model="domain"
                type="text"
                required
                placeholder="example.com"
                class="px-4 py-3 rounded-lg border border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 outline-none transition-all text-lg"
              />
              <p class="text-xs text-neutral-500">Don't include http:// or https://</p>
            </div>
          </div>

          <!-- Connection Method Selection -->
          <div class="p-6 rounded-2xl border bg-white flex flex-col gap-4">
            <div>
              <h2 class="text-xl font-bold">Connection Method</h2>
              <p class="text-sm text-neutral-500 mt-1">Choose how you want to connect your domain</p>
            </div>

            <div class="grid gap-3">
              <div
                v-for="method in connectionMethods"
                :key="method.value"
                @click="selectedMethod = method.value"
                class="p-4 rounded-xl border-2 transition-all cursor-pointer hover:border-neutral-300"
                :class="selectedMethod === method.value ? 'border-neutral-900 bg-neutral-50' : 'border-neutral-200'"
              >
                <div class="flex items-start justify-between">
                  <div class="flex items-start gap-3">
                    <div class="mt-0.5">
                      <div 
                        class="size-5 rounded-full border-2 flex items-center justify-center transition-all"
                        :class="selectedMethod === method.value ? 'border-neutral-900 bg-neutral-900' : 'border-neutral-300'"
                      >
                        <div v-if="selectedMethod === method.value" class="size-2 rounded-full bg-white" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold text-lg">{{ method.label }}</div>
                      <p class="text-sm text-neutral-600 mt-0.5">{{ method.description }}</p>
                    </div>
                  </div>
                  <span 
                    class="text-xs font-semibold px-2 py-1 rounded-full"
                    :class="{
                      'bg-emerald-100 text-emerald-700': method.difficulty === 'Легко',
                      'bg-amber-100 text-amber-700': method.difficulty === 'Средне',
                      'bg-orange-100 text-orange-700': method.difficulty === 'Сложно'
                    }"
                  >
                    {{ method.difficulty }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- DNS Configuration -->
          <div class="p-6 rounded-2xl border bg-white flex flex-col gap-4">
            <div>
              <h2 class="text-xl font-bold">DNS Configuration</h2>
              <p class="text-sm text-neutral-500 mt-1">Add these DNS records to your domain provider</p>
            </div>

            <!-- Instructions based on method -->
            <div class="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div class="flex gap-3">
                <div class="text-blue-600 mt-0.5">
                  <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-blue-900 mb-1">
                    {{ selectedMethod === 'cname' ? 'CNAME Setup' : selectedMethod === 'arecord' ? 'A Record Setup' : 'Nameserver Setup' }}
                  </h3>
                  <p class="text-sm text-blue-800 leading-relaxed">
                    <template v-if="selectedMethod === 'cname'">
                      Go to your domain provider's DNS settings and add a CNAME record pointing to our servers, plus a TXT record for verification.
                      This is the recommended method for subdomains.
                    </template>
                    <template v-else-if="selectedMethod === 'arecord'">
                      Add an A record pointing to our server IP address. This method is required for root domains (e.g., example.com).
                      Also add the TXT record for domain verification.
                    </template>
                    <template v-else>
                      Update your domain's nameservers at your registrar. This gives us full control over your DNS settings.
                      Note: This will affect all DNS records for your domain.
                    </template>
                  </p>
                </div>
              </div>
            </div>

            <!-- DNS Records Table -->
            <div class="overflow-hidden rounded-lg border">
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-neutral-50 border-b">
                    <tr>
                      <th class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Type</th>
                      <th class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Name</th>
                      <th class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">Value</th>
                      <th v-if="selectedMethod !== 'nameservers'" class="px-4 py-3 text-left text-xs font-semibold text-neutral-600 uppercase">TTL</th>
                      <th class="px-4 py-3 text-right text-xs font-semibold text-neutral-600 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr v-for="(record, index) in dnsRecords" :key="index" class="hover:bg-neutral-50">
                      <td class="px-4 py-3">
                        <span class="px-2 py-1 rounded text-xs font-bold bg-neutral-900 text-white">
                          {{ record.type }}
                        </span>
                      </td>
                      <td class="px-4 py-3">
                        <code class="text-sm font-mono bg-neutral-100 px-2 py-1 rounded">{{ record.name }}</code>
                      </td>
                      <td class="px-4 py-3">
                        <code class="text-sm font-mono bg-neutral-100 px-2 py-1 rounded">{{ record.value }}</code>
                      </td>
                      <td v-if="selectedMethod !== 'nameservers'" class="px-4 py-3">
                        <span class="text-sm text-neutral-600">{{ record.ttl }}</span>
                      </td>
                      <td class="px-4 py-3 text-right">
                        <button
                          @click="copyToClipboard(record.value, `${record.type}-${index}`)"
                          class="p-2 rounded-lg hover:bg-neutral-200 transition-colors text-neutral-600 hover:text-neutral-900"
                        >
                          <IconCheck v-if="copiedField === `${record.type}-${index}`" class="size-4 text-emerald-600" />
                          <IconCopy v-else class="size-4" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Verification Status -->
            <div v-if="verificationStatus !== 'idle'" class="p-4 rounded-lg" :class="{
              'bg-emerald-50 border border-emerald-200': verificationStatus === 'success',
              'bg-red-50 border border-red-200': verificationStatus === 'error'
            }">
              <div class="flex items-start gap-3">
                <IconCheck v-if="verificationStatus === 'success'" class="size-5 text-emerald-600 mt-0.5" />
                <svg v-else class="size-5 text-red-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <h4 class="font-semibold" :class="{
                    'text-emerald-900': verificationStatus === 'success',
                    'text-red-900': verificationStatus === 'error'
                  }">
                    {{ verificationStatus === 'success' ? 'Domain Verified Successfully!' : 'Verification Failed' }}
                  </h4>
                  <p class="text-sm mt-1" :class="{
                    'text-emerald-800': verificationStatus === 'success',
                    'text-red-800': verificationStatus === 'error'
                  }">
                    {{ verificationStatus === 'success' 
                      ? 'Your domain is now connected and will be active shortly. Redirecting...' 
                      : 'DNS records not found or incorrect. Please check your configuration and try again in a few minutes.' 
                    }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3 justify-end pt-2">
              <button
                type="button"
                @click="handleCancel"
                class="px-6 py-2.5 rounded-lg border border-neutral-200 font-semibold text-neutral-700 hover:bg-neutral-50 transition-all"
              >
                Cancel
              </button>
              <button
                @click="verifyDomain"
                :disabled="!domain || isVerifying"
                class="px-6 py-2.5 rounded-lg bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <IconLoader v-if="isVerifying" class="size-4 animate-spin" />
                {{ isVerifying ? 'Verifying...' : 'Verify Connection' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar - Help & Resources -->
        <div class="lg:col-span-1 flex flex-col gap-4">
          <!-- Help Card -->
          <div class="p-6 rounded-2xl border bg-gradient-to-br from-purple-50 to-white sticky top-6">
            <h3 class="font-bold text-lg mb-3">Need Help?</h3>
            <div class="flex flex-col gap-3 text-sm">
              <a href="#" class="flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors">
                <IconExternalLink class="size-4" />
                <span>DNS Configuration Guide</span>
              </a>
              <a href="#" class="flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors">
                <IconExternalLink class="size-4" />
                <span>Popular DNS Providers</span>
              </a>
              <a href="#" class="flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors">
                <IconExternalLink class="size-4" />
                <span>Troubleshooting</span>
              </a>
            </div>

            <div class="mt-6 p-4 bg-white rounded-lg border">
              <p class="text-xs text-neutral-600 leading-relaxed">
                <strong class="text-neutral-900">Note:</strong> DNS changes can take up to 48 hours to propagate globally, 
                though they usually happen much faster (5-15 minutes).
              </p>
            </div>
          </div>

          <!-- Common Providers -->
          <div class="p-6 rounded-2xl border bg-white">
            <h3 class="font-bold text-lg mb-3">Popular DNS Providers</h3>
            <div class="flex flex-col gap-2 text-sm">
              <div class="flex items-center gap-2 text-neutral-600">
                <div class="size-2 rounded-full bg-neutral-400"></div>
                <span>GoDaddy</span>
              </div>
              <div class="flex items-center gap-2 text-neutral-600">
                <div class="size-2 rounded-full bg-neutral-400"></div>
                <span>Namecheap</span>
              </div>
              <div class="flex items-center gap-2 text-neutral-600">
                <div class="size-2 rounded-full bg-neutral-400"></div>
                <span>Cloudflare</span>
              </div>
              <div class="flex items-center gap-2 text-neutral-600">
                <div class="size-2 rounded-full bg-neutral-400"></div>
                <span>Google Domains</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
