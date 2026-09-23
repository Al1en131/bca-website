<template>
  <div
    class="bg-[#F0F5FA] rounded-xl shadow-2xl overflow-hidden w-full sm:w-[316px] text-[#0F3759] font-sans border border-white/60 transition-all"
  >
    <!-- Card Title Header -->
    <div class="pt-4 px-5 pb-3">
      <h3 class="text-[20px] font-normal tracking-tight text-[#0F3759]">
        e-Rate BCA
      </h3>
    </div>

    <!-- Divider Line -->
    <div class="border-b border-[#E1E8EE] mx-5"></div>

    <!-- Currency Row with Switcher -->
    <div class="flex items-center justify-between px-5 py-3">
      <div class="flex items-center gap-3">
        <!-- EU Flag SVG Badge -->
        <svg class="w-6 h-6 rounded-full flex-shrink-0 shadow-sm" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#003399" />
          <circle cx="12" cy="5" r="0.9" fill="#FFCC00" />
          <circle cx="15.5" cy="6" r="0.9" fill="#FFCC00" />
          <circle cx="18" cy="8.5" r="0.9" fill="#FFCC00" />
          <circle cx="19" cy="12" r="0.9" fill="#FFCC00" />
          <circle cx="18" cy="15.5" r="0.9" fill="#FFCC00" />
          <circle cx="15.5" cy="18" r="0.9" fill="#FFCC00" />
          <circle cx="12" cy="19" r="0.9" fill="#FFCC00" />
          <circle cx="8.5" cy="18" r="0.9" fill="#FFCC00" />
          <circle cx="6" cy="15.5" r="0.9" fill="#FFCC00" />
          <circle cx="5" cy="12" r="0.9" fill="#FFCC00" />
          <circle cx="6" cy="8.5" r="0.9" fill="#FFCC00" />
          <circle cx="8.5" cy="6" r="0.9" fill="#FFCC00" />
        </svg>

        <span class="text-[16px] font-normal text-[#0F3759]">
          {{ currentRate.code }}
        </span>
      </div>

      <!-- Arrow Navigation Controls -->
      <div class="flex items-center gap-3 text-[#0F3759]">
        <button
          @click="prevRate"
          class="p-0.5 hover:opacity-75 transition-opacity focus:outline-none"
          aria-label="Previous currency"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          @click="nextRate"
          class="p-0.5 hover:opacity-75 transition-opacity focus:outline-none"
          aria-label="Next currency"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Bottom Rates Grid (Flush edge-to-edge) -->
    <div class="grid grid-cols-2 text-[14px] tracking-tight">
      <!-- Buy Rate Box -->
      <div class="bg-[#E4F0F9] px-4 py-3 flex items-center justify-between border-r border-[#D5E6F3]">
        <span class="text-[#0F3759] font-normal">Buy</span>
        <span class="text-[#0F3759] font-normal">{{ currentRate.buy }}</span>
      </div>

      <!-- Sell Rate Box -->
      <div class="bg-[#CCE5F7] px-4 py-3 flex items-center justify-between">
        <span class="text-[#0F3759] font-normal">Sell</span>
        <span class="text-[#0F3759] font-normal">{{ currentRate.sell }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const rates = ref([
  { code: 'EUR', buy: '16,841.00', sell: '16,841.00' },
  { code: 'USD', buy: '15,450.00', sell: '15,470.00' },
  { code: 'SGD', buy: '11,720.00', sell: '11,750.00' },
  { code: 'JPY', buy: '105.20', sell: '106.80' }
])

const currentIndex = ref(0)
const currentRate = computed(() => rates.value[currentIndex.value])

function nextRate() {
  currentIndex.value = (currentIndex.value + 1) % rates.value.length
}

function prevRate() {
  currentIndex.value = (currentIndex.value - 1 + rates.value.length) % rates.value.length
}
</script>
