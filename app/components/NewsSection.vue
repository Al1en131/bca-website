<template>
  <section class="bg-[#F1F5F8] text-slate-900 py-12 lg:py-[86px] font-sans border-t border-slate-200/60 overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-[55.2px] sm:px-6 lg:px-12 space-y-8 lg:space-y-12">
      <!-- Upper Header Grid (Desktop & Mobile) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        <!-- Left Column: Category Label -->
        <div class="lg:col-span-6">
          <span class="text-[#0066AE] font-normal text-lg sm:text-xl tracking-tight">
            News
          </span>
        </div>

        <!-- Right Column: Headline Title & Desktop Tabs -->
        <div class="lg:col-span-6 space-y-8">
          <!-- Main Title Headline -->
          <h2
            class="text-3xl sm:text-4xl lg:text-[56px] font-normal text-[#0E1A2C] max-w-[670px] leading-snug sm:leading-[52px] lg:leading-[62px] tracking-[-0.02em]"
          >
            Information on the Mandatory Use of the Rupiah within the Republic of Indonesia
          </h2>

          <!-- Tab Navigation Bar & View All (Desktop View >= lg) -->
          <div class="hidden lg:flex items-center justify-between gap-4 border-b border-slate-200/80 pb-3">
            <div class="flex items-center space-x-8 text-base font-normal">
              <button
                v-for="tab in tabs"
                :key="tab"
                @click="activeTab = tab"
                class="relative pb-3 transition-colors duration-200 focus:outline-none whitespace-nowrap"
                :class="activeTab === tab ? 'text-[#0E1A2C] font-medium' : 'text-slate-400 hover:text-slate-600'"
              >
                {{ tab }}
                <span
                  v-if="activeTab === tab"
                  class="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066AE]"
                ></span>
              </button>
            </div>

            <!-- View All Link (Desktop) -->
            <a
              href="#view-all-news"
              class="text-sm text-slate-500 hover:text-slate-900 font-normal transition-colors"
            >
              View All
            </a>
          </div>
        </div>
      </div>

      <!-- Tab Navigation Bar (Mobile View < lg - Bleeds edge-to-edge right with no right padding) -->
      <div class="block lg:hidden border-b border-slate-200/80 pb-3 w-[calc(100%+50vw)]">
        <div class="flex items-center space-x-[33px] text-[16px] font-normal overflow-x-auto scrollbar-none pr-0">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="relative pb-3 transition-colors duration-200 focus:outline-none whitespace-nowrap"
            :class="activeTab === tab ? 'text-[#0E1A2C] font-medium' : 'text-slate-400 hover:text-slate-600'"
          >
            {{ tab }}
            <span
              v-if="activeTab === tab"
              class="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0066AE]"
            ></span>
          </button>
        </div>
      </div>

      <!-- News Cards Slider Container (No right padding on Mobile or Desktop - Bleeds 100% to right viewport edge) -->
      <div class="relative w-[calc(100%+50vw)]">
        <div
          ref="sliderRef"
          class="flex gap-4 sm:gap-6 lg:gap-[28px] overflow-x-auto scroll-smooth scrollbar-none pb-4 snap-x snap-mandatory pr-0"
        >
          <!-- News Card Items -->
          <div
            v-for="(card, index) in filteredCards"
            :key="index"
            class="w-[288px] sm:w-[480px] lg:w-[670px] flex-shrink-0 snap-start group cursor-pointer space-y-4"
          >
            <!-- Card Image Container -->
            <div class="relative aspect-[16/10] rounded-[4px] sm:rounded-xl overflow-hidden bg-slate-200 shadow-sm">
              <img
                :src="card.image"
                :alt="card.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <!-- Tag Badge -->
              <span class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-normal px-3 py-1 rounded-md shadow-sm">
                {{ card.tag }}
              </span>
            </div>

            <!-- Card Content -->
            <div class="space-y-2">
              <h3 class="text-base sm:text-xl lg:text-[24px] w-full max-w-[552px] font-normal text-[#0E1A2C] leading-snug group-hover:text-[#0066AE] transition-colors line-clamp-2">
                {{ card.title }}
              </h3>
              <p class="text-xs sm:text-[16px] text-[#B0B5BC] font-normal">
                {{ card.date }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Controls Row: Progress Bar & Arrow Buttons (Desktop) / Progress Bar & View All (Mobile) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
        <div class="hidden lg:block lg:col-span-6"></div>
        <div class="lg:col-span-6 flex items-center justify-between gap-6">
          <!-- Progress Bar Line -->
          <div class="flex-grow max-w-xl h-[2px] bg-slate-300 rounded-full overflow-hidden">
            <div
              class="h-full bg-slate-600 transition-all duration-300 rounded-full"
              :style="{ width: progressWidth + '%' }"
            ></div>
          </div>

          <!-- Desktop Navigation Arrow Buttons (Hidden on mobile) -->
          <div class="hidden lg:flex items-center gap-4 text-slate-500">
            <button
              @click="scrollPrev"
              class="hover:text-slate-900 transition-colors focus:outline-none p-1"
              aria-label="Previous slide"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              @click="scrollNext"
              class="hover:text-slate-900 transition-colors focus:outline-none p-1"
              aria-label="Next slide"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- View All Link (Mobile Only - Bottom Right) -->
          <a
            href="#view-all-news"
            class="block lg:hidden text-xs text-slate-600 hover:text-slate-900 font-normal transition-colors flex-shrink-0"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const sliderRef = ref(null)
const activeTab = ref('News & Features')
const tabs = ['News & Features', 'Edukatips', '#AwasModus']

const cards = ref([
  {
    category: 'News & Features',
    tag: 'News',
    title: 'API BCA for Business Individuals is Now Available to Support Your Business',
    date: 'September 30, 2024',
    image: '/news-1.png'
  },
  {
    category: 'News & Features',
    tag: 'News',
    title: 'myBCA x JDF Returns with “myBCA Mentorship Project”',
    date: 'September 30, 2024',
    image: '/news-2.png'
  },
  {
    category: 'News & Features',
    tag: 'News',
    title: 'Prepare for Sustainable Growth with BCA Financial Solutions!',
    date: 'September 30, 2024',
    image: '/news-3.png'
  },
  {
    category: 'Edukatips',
    tag: 'Edukatips',
    title: 'Tips Aman Bertransaksi Digital dengan Fitur Keamanan BCA',
    date: 'October 15, 2024',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    category: '#AwasModus',
    tag: '#AwasModus',
    title: 'Waspada Modus Penipuan File APK dan Link Palsu Mengatasnamakan BCA',
    date: 'October 20, 2024',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop'
  }
])

const filteredCards = computed(() => {
  return cards.value.filter(c => c.category === activeTab.value)
})

const currentIndex = ref(0)
const progressWidth = computed(() => {
  if (filteredCards.value.length <= 1) return 100
  return Math.min(100, Math.max(35, ((currentIndex.value + 1) / filteredCards.value.length) * 100))
})

function scrollNext() {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: 380, behavior: 'smooth' })
    if (currentIndex.value < filteredCards.value.length - 1) {
      currentIndex.value++
    }
  }
}

function scrollPrev() {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: -380, behavior: 'smooth' })
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }
}
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
