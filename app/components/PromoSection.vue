<template>
  <section class="relative bg-[#06111e] text-white pb-12 pt-[594.32px] sm:py-20 lg:pt-[209px] lg:pb-16 font-sans overflow-x-clip border-t border-white/10">
    <!-- Background Image with Gradient Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="/prmotion.png"
        alt="Promo Background"
        class="w-full h-full object-cover object-center opacity-60"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#06111e] via-[#06111e]/40 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-[1440px] mx-auto px-[31.56px] sm:px-6 lg:px-12 space-y-12 sm:space-y-24 lg:space-y-[169px]">
      <!-- Upper Main Promo Feature -->
      <div class="space-y-4 sm:space-y-6 max-w-2xl">
        <!-- Section Label -->
        <span class="text-xs sm:text-sm text-gray-300 font-normal tracking-wide">
          Promo
        </span>

        <!-- Main Headline -->
        <h2 class="text-[34px] sm:text-4xl lg:text-6xl w-full max-w-[619px] font-light text-white leading-tight lg:leading-[1.15] tracking-[-2%]">
          Brand Lokal Jadi Fenomenal, Tunjukan #KitaBanggaLokal
        </h2>

        <!-- Call to Action Button -->
        <div class="pt-2">
          <a
            href="#promo-detail"
            class="inline-block bg-[#0066cc] hover:bg-blue-600 text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-900/30 hover:shadow-blue-600/40 focus:outline-none"
          >
            Learn More
          </a>
        </div>
      </div>

      <!-- Lower Cards Section ("Promo Lainnya") Slider -->
      <div class="space-y-6 pt-4 sm:pt-8">
        <!-- Section Header Row -->
        <div class="flex items-center justify-between text-xs sm:text-sm">
          <span class="text-gray-300 font-normal">
            Promo Lainnya
          </span>
          <a
            href="#all-promos"
            class="text-white opacity-20 sm:opacity-100 lg:opacity-100 hover:text-white transition-colors font-medium"
          >
            View All
          </a>
        </div>

        <!-- Horizontal Slider Container Bleeding to Right Screen Edge (No right padding on Mobile or Desktop) -->
        <div class="relative w-[calc(100%+50vw)]">
          <div class="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scroll-smooth scrollbar-none pb-4 snap-x snap-mandatory pr-0">
            <div
              v-for="(item, index) in promoItems"
              :key="index"
              class="w-[236.046875px]  sm:w-[380px] lg:w-[484px] flex-shrink-0 snap-start group cursor-pointer space-y-3 sm:space-y-4"
            >
              <!-- Card Image Box -->
              <div class="relative w-full h-[131.11497497558594px] aspect-[16/9] sm:h-[269px] rounded-[8px] overflow-hidden bg-slate-900 shadow-xl border border-white/10">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover grayscale brightness-90 contrast-105 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <!-- Card Title -->
              <h3 class="text-[16px] sm:text-xl lg:text-[24px] font-normal text-gray-200 leading-snug group-hover:text-blue-400 transition-colors line-clamp-2 w-full max-w-[420px]">
                {{ item.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const promoItems = ref([
  {
    title: 'Diskon Hingga 70% Karena #KitaBanggaLokal',
    image: '/promo-1.png'
  },
  {
    title: 'Brand Lokal Jadi Fenomenal, Diskon Hingga 30% #KitaBanggaLokal',
    image: '/promo-2.png'
  },
  {
    title: 'Brand Lokal Jadi Fenomenal, Tunjukan #KitaBanggaLokal',
    image: '/promo-3.png'
  }
])
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
