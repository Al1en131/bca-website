<template>
  <section class="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-[#06101c] text-white font-sans">
    <!-- Hero Background Image & Exact Bottom Gradient Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="/hero.png"
        alt="BCA Sustainable Development"
        class="w-full h-full object-cover object-center"
      />
      <!-- Exact bottom gradient overlay requested by user -->
      <div
        class="absolute inset-0"
        style="background: linear-gradient(180deg, rgba(3, 17, 32, 0) 0%, #031120 100%);"
      ></div>
    </div>

    <!-- Content Container (Positioned at bottom with responsive padding) -->
    <div
      class="relative z-10 max-w-[1440px] mx-auto w-full px-[31.56px] sm:px-6 lg:px-12 pt-24 pb-10 sm:pb-20 lg:pb-[136px] flex flex-col justify-end flex-grow"
    >
      <!-- Top Spacer -->
      <div class="w-full h-12 sm:h-20"></div>

      <!-- Main Text & Floating e-Rate Row -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full mb-4 sm:mb-8">
        <!-- Left: Tagline, Headline, & Progress Line -->
        <div class="space-y-4 sm:space-y-[23px] max-w-[952px] flex-grow">
          <!-- Tagline Hashtag -->
          <div ref="taglineRef" class="block">
            <span class="text-base sm:text-xl lg:text-[24px] font-normal tracking-wide text-[#F1F5F8] block">
              #KitaBanggaLokal
            </span>
          </div>

          <!-- Main Title Headline -->
          <h1
            ref="headlineRef"
            class="w-full max-w-[619px] text-[32px] sm:text-5xl lg:text-[56px] font-normal sm:font-light text-white leading-[37px] sm:leading-tight lg:leading-[62px] tracking-[-0.02em]"
          >
            Our commitment to Indonesia's sustainable development
          </h1>

          <!-- Divider Line extending across (Desktop only) -->
          <div
            ref="lineRef"
            class="hidden lg:block w-full mt-[40px] h-[1px] bg-white origin-left transform scale-x-0 mb-2"
          ></div>
        </div>

        <!-- Right: e-Rate BCA Floating Card (Desktop only) -->
        <div ref="eRateRef" class="hidden lg:block flex-shrink-0 lg:ml-8">
          <ERateCard />
        </div>
      </div>

      <!-- Bottom Navigation Controls & Scroll Hint Row (Tablet/Desktop) -->
      <div class="hidden sm:flex items-center justify-between text-xs sm:text-sm text-gray-300/90 font-light">
        <!-- Left: Down Arrow Indicator -->
        <a
          href="#content"
          ref="arrowRef"
          class="inline-flex items-center justify-center p-2 text-white/90 hover:text-white transition-colors focus:outline-none"
          aria-label="Scroll down"
        >
          <img src="/arrow.svg" alt="" />
        </a>

        <!-- Center: Scroll hint -->
        <div ref="scrollTextRef" class="text-white font-light tracking-wide text-center">
          Scroll to discover more
        </div>

        <!-- Right Spacer -->
        <div class="w-8 hidden sm:block"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const taglineRef = ref(null)
const headlineRef = ref(null)
const lineRef = ref(null)
const eRateRef = ref(null)
const arrowRef = ref(null)
const scrollTextRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // GSAP fromTo animations to ensure visibility and clean entrance
  tl.fromTo(taglineRef.value, 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
  )
  .fromTo(headlineRef.value,
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.9 },
    '-=0.5'
  )
  .to(lineRef.value, {
    scaleX: 1,
    duration: 0.8
  }, '-=0.4')
  .fromTo(eRateRef.value,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration: 0.9 },
    '-=0.6'
  )
  .fromTo(scrollTextRef.value,
    { opacity: 0 },
    { opacity: 1, duration: 0.8 },
    '-=0.4'
  )

  gsap.to(arrowRef.value, {
    y: 5,
    repeat: -1,
    yoyo: true,
    duration: 1.2,
    ease: 'power1.inOut'
  })
})
</script>
