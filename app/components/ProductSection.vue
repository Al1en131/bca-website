<template>
  <section class="bg-[#053262] text-white py-16 lg:py-28 font-sans border-t border-blue-900/40">
    <div class="max-w-[1440px] mx-auto px-[55.2px] sm:px-6 lg:px-12">
      <!-- 2-Column Main Showcase Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-20 items-start">
        
        <!-- Left Column: Product Label & Left Image -->
        <div class="flex flex-col">
          <!-- Category Label -->
          <div>
            <span class="text-slate-300 font-normal text-sm sm:text-base tracking-normal">
              Product
            </span>
          </div>

          <!-- Left Column Image (Mobile Payment) - Hidden on Mobile (< lg), Displayed on Desktop (>= lg) -->
          <div class="hidden lg:block mt-8 lg:mt-[180px] xl:mt-[357px]">
            <div class="rounded-2xl sm:rounded-[8px] overflow-hidden shadow-2xl aspect-[4/3] bg-blue-950/40">
              <img
                src="/product-1.png"
                alt="Mobile Payment Transaction"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <!-- Right Column: Upper Text, Right Image (with top & bottom space), Lower Text -->
        <div class="flex flex-col mt-6 lg:mt-0">
          <!-- Upper Title & Description Block -->
          <div class="space-y-4 sm:space-y-6 max-w-xl">
            <h2 class="text-3xl sm:text-5xl lg:text-[54px] font-light leading-[1.1]">
              <span class="text-sky-400 font-light block">myBCA</span>
              <span class="text-white font-light block mt-1">seamless World</span>
            </h2>
            <p class="text-slate-300/80 text-base sm:text-[18px] font-light leading-relaxed max-w-[430px]">
             myBCA is a banking application from BCA accessible using BCA ID for easy browsing of information and transactions across BCA’s banking portfolio.
            </p>
          </div>

          <!-- Right Column Image (Generous spacing top & bottom) -->
          <div class="my-[90px] sm:my-16 lg:mt-[140px] xl:mt-[254px]">
            <div class="rounded-[8px] overflow-hidden shadow-2xl aspect-[4/3] bg-blue-950/40">
              <img
                src="/product-2.png"
                alt="Senior using myBCA app"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <!-- Lower Subheadline & Description Block -->
          <div class="space-y-6 sm:space-y-[45px] max-w-xl mt-0 sm:mt-8">
            <h3
              class="text-[24px] sm:text-4xl lg:text-[56px] text-white leading-tight sm:leading-[52px] lg:leading-[62px] tracking-[-0.02em] font-normal"
            >
              For Convenient<br />
              Transactions and<br />
              Investments
            </h3>
            <p class="text-slate-300/80 text-base sm:text-[18px] font-light leading-relaxed max-w-[470px]">
              myBCA is a banking application from BCA accessible using BCA ID for easy browsing of information and transactions across BCA's banking portfolio.
            </p>
          </div>
        </div>

      </div>

      <!-- Feature Interactive Accordion List -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center pt-[45.87px] sm:pt-20 mt-0 sm:mt-24">
        <!-- Left Column: Smartphone App Preview -->
        <div class="flex justify-center lg:justify-start">
          <div class="rounded-[8px] overflow-hidden w-full max-w-[440px] lg:ml-[72px]">
            <img
              :src="activeFeature.image"
              :alt="activeFeature.title"
              class="w-full aspect-[16/10] sm:h-[276px] object-cover rounded-xl shadow-xl transition-all duration-500"
            />
          </div>
        </div>

        <!-- Right Column: Interactive Feature List -->
        <div class="space-y-4 sm:space-y-6 pt-4 lg:pt-[58px]">
          <div class="divide-y divide-blue-400/20">
            <div
              v-for="(feature, index) in features"
              :key="index"
              @click="activeFeatureIndex = index"
              class="py-5 sm:py-[35px] cursor-pointer group transition-colors"
            >
              <div class="flex items-center justify-between">
                <h4
                  class="text-[22px] sm:text-2xl lg:text-[32px] font-normal transition-colors duration-200 leading-snug sm:leading-[45px] tracking-tight"
                  :class="activeFeatureIndex === index ? 'text-white' : 'text-blue-200/60 group-hover:text-blue-100'"
                >
                  {{ feature.title }}
                </h4>
              </div>
            </div>
          </div>

          <!-- Learn More Link -->
          <div class="pt-4">
            <a
              href="#learn-mybca"
              class="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white hover:text-sky-300 transition-colors group"
            >
              <span>Learn More</span>
              <svg
                class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFeatureIndex = ref(0)

const features = [
  {
    title: 'Accessible through smartphone apps and through mybca.bca.co.id',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Open Deposit & Investment online',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Integrated banking services',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Pay & Top Up Various Needs',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop'
  }
]

const activeFeature = computed(() => features[activeFeatureIndex.value])
</script>
