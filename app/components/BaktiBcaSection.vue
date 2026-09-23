<template>
  <section class="relative w-full min-h-[874px] sm:min-h-[540px] lg:min-h-[780px] flex items-end overflow-hidden bg-[#06111e] text-white font-sans border-t border-white/10">
    <!-- Background Image with Gradient Overlay -->
    <div class="absolute inset-0 z-0">
      <!-- High contrast monochrome professional / community image matching reference -->
      <img
        src="/Events.png"
        alt="BuktiBakti BCA Commitment"
        class="w-full h-full object-cover object-center filter grayscale brightness-90 contrast-110"
      />
      <!-- Vignette Gradient for Text Contrast -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#06111e] via-[#06111e]/60 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#06111e]/80 via-transparent to-transparent"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-[1440px] mx-auto w-full px-[31.56px] sm:px-6 lg:px-12 pb-12 sm:pb-20 lg:pb-[147px] pt-12 sm:pt-20">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
        <!-- Left Content -->
        <div class="space-y-3 sm:space-y-4 max-w-2xl">
          <!-- Tagline -->
          <span class="text-xs sm:text-base font-normal tracking-wide text-gray-300">
            #BuktiBakti BCA
          </span>

          <!-- Headline -->
          <h2 class="text-[32px] sm:text-4xl lg:text-6xl font-light text-white leading-tight lg:leading-[1.15] tracking-tight">
            Our commitment to Indonesia's sustainable development
          </h2>
        </div>

        <!-- Right Content: Learn More Button -->
        <div class="flex-shrink-0">
          <a
            href="#bukti-bakti"
            class="inline-block bg-[#0066cc] hover:bg-blue-600 text-white text-xs sm:text-sm font-medium px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-xl shadow-blue-950/40 hover:shadow-blue-600/30 focus:outline-none"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// BaktiBcaSection component
</script>
