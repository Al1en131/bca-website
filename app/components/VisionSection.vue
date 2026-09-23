<template>
  <section
    class="text-slate-900 py-[61.94px] lg:pt-[172px] font-sans"
    style="background: linear-gradient(180deg, #ffffff 75%, #f1f5f8 25%)"
  >
    <div class="max-w-[1440px] mx-auto px-[20.03px] sm:px-6 lg:px-12 space-y-16 lg:space-y-[133px]">
      <!-- Upper Grid: Vision & Mission Statement -->
      <div class="grid grid-cols-1 max-sm:px-[35px] lg:grid-cols-12 gap-6 lg:gap-12 items-start">
        <!-- Left: Hashtag Tagline -->
        <div class="lg:col-span-6">
          <span
            class="text-[#0066AE] font-normal text-lg sm:text-xl tracking-tight"
          >
            #KitaBanggaLokal
          </span>
        </div>

        <!-- Right: Vision Headline, Description & Action -->
        <div class="lg:col-span-6 space-y-8 max-w-[650px]">
          <h2
            class="text-[30px] sm:text-4xl lg:text-[56px] font-normal text-[#0E1A2C] max-w-4xl leading-[30px] sm:leading-[52px] lg:leading-[62px] tracking-[-0.02em]"
          >
            To be the bank of choice and a major pillar of the Indonesian
            economy
          </h2>

          <p
            class="text-[#0E1A2C]/70 max-w-[530px] text-[18px] sm:text-[18px] font-normal leading-[24px] sm:leading-relaxed tracking-[0%]"
          >
            Committed to delivering innovative financial solutions that empower
            individuals and businesses across Indonesia. Through strong
            governance, digital transformation, and a customer-first approach,
            we aim to build lasting trust and drive sustainable growth for the
            nation's economy.
          </p>

          <div class="pt-3">
            <a
              href="#learn-more"
              class="inline-flex items-center gap-3 text-base text-[#0E1A2C] hover:text-blue-600 transition-colors group"
            >
              <span>Learn More</span>
              <svg
                class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Lower Featured Card Banner -->
      <div
        class="relative w-full rounded-2xl lg:rounded-xl overflow-hidden shadow-2xl group cursor-pointer min-h-[673px] sm:min-h-[480px] lg:min-h-[640px] flex items-end p-5 sm:p-10 lg:p-12"
      >
        <!-- Background Image -->
        <img
          src="/vision.png"
          alt="Mother and daughter using laptop"
          class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        <!-- Subtle Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
        ></div>

        <!-- Floating White Card (Bottom-Left) -->
        <div
          class="relative z-10 bg-slate-50/95 backdrop-blur-md rounded-xl p-5 sm:p-8 w-full max-w-sm sm:max-w-[564px] border border-white/60 shadow-xl transition-transform duration-300 group-hover:-translate-y-1"
        >
          <h3
            class="text-[28px] sm:text-2xl lg:text-[32px] w-full max-w-[374px] font-normal text-[#031120] leading-snug mb-6 sm:mb-8"
          >
            6 Ways to Choose a Reliable Insurance
          </h3>

          <div
            class="flex items-center justify-between text-[12px] sm:text-sm text-[#B0B5BC] pt-2"
          >
            <span>September 30, 2024</span>
            <div
              class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Vision & Featured Article component
</script>
