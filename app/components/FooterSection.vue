<template>
  <footer class="bg-[#050e18] text-white pt-[44px] sm:pt-20 lg:pt-[94px] pb-12 font-sans border-t border-white/10">
    <div class="max-w-[1440px] mx-auto px-[55.2px] sm:px-8 lg:px-12 space-y-8 sm:space-y-12">
      <!-- Top Row: Brand Logo -->
      <div class="flex items-center justify-between mb-[92.8px] sm:mb-12">
        <a href="#" class="flex items-center gap-3 focus:outline-none group">
          <div class="flex items-center gap-2">
            <img src="/logo-bca-white.svg" alt="BCA Logo" class="h-9 sm:h-10 w-auto" />
          </div>
        </a>
      </div>

      <!-- Divider Line -->
      <div class="w-full h-[1px] bg-white/20 my-6 sm:my-8"></div>

      <!-- Middle Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-2">
        <!-- Column 1: Promo Newsletter Signup (Left 6 Cols) -->
        <div class="lg:col-span-6 space-y-6">
          <h3 class="text-xl sm:text-[24px] font-light text-white leading-snug max-w-[380px]">
            Get promos and best deals from BCA
          </h3>

          <!-- Email Subscription Input -->
          <form @submit.prevent="handleSubscribe" class="space-y-4 max-w-[380px]">
            <div class="relative">
              <input
                v-model="email"
                type="email"
                placeholder="Email address"
                required
                class="w-full bg-transparent border-b border-white/20 focus:border-blue-400 text-[#F1F5F8]/70 placeholder:text-[#F1F5F8]/70 pb-2.5 text-sm sm:text-base focus:outline-none transition-colors"
              />
            </div>
            <p v-if="subscribed" class="text-xs text-green-400 font-medium">
              Thank you for subscribing!
            </p>
          </form>

          <!-- Privacy & ReCAPTCHA Notice -->
          <p class="text-[12px] text-[#F1F5F8]/70 leading-[18px] max-w-[340px]">
            This site is protected by reCAPTCHA and the Google
            <a href="#" class="underline hover:text-gray-400">Privacy Policy</a> and
            <a href="#" class="underline hover:text-gray-400">Terms of Service</a> apply.
          </p>
        </div>

        <!-- Right Side Links (2 columns on mobile, right 6 Cols on desktop) -->
        <div class="lg:col-span-6 grid grid-cols-2 gap-6 sm:gap-8 text-sm pt-4 lg:pt-0">
          <!-- Column 2A: Sitemap & Contact Us -->
          <div class="space-y-8 sm:space-y-[67px]">
            <!-- Sitemap Block -->
            <div class="space-y-3 sm:space-y-5">
              <h4 class="text-[#F1F5F8]/60 font-normal text-sm sm:text-[16px]">
                Sitemap
              </h4>
              <ul class="space-y-2 font-light text-[#F1F5F8] text-sm sm:text-[16px]">
                <li><a href="#individual" class="hover:text-white transition-colors">Individual</a></li>
                <li><a href="#business" class="hover:text-white transition-colors">Business</a></li>
                <li><a href="#about-bca" class="hover:text-white transition-colors">About BCA</a></li>
                <li><a href="#careers" class="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <!-- Contact Us Block -->
            <div class="space-y-3 sm:space-y-5">
              <h4 class="text-[#F1F5F8]/60 font-normal text-sm sm:text-[16px]">
                Contact Us
              </h4>
              <ul class="space-y-2 font-light text-[#F1F5F8] text-sm sm:text-[16px]">
                <li><a href="tel:1500888" class="hover:text-white transition-colors">Halo BCA 1500888</a></li>
                <li><a href="mailto:halobca@bca.co.id" class="hover:text-white transition-colors">halobca@bca.co.id</a></li>
                <li><a href="https://wa.me/628111500998" target="_blank" class="hover:text-white transition-colors">+62 811 1500 998</a></li>
              </ul>
            </div>
          </div>

          <!-- Column 2B: BCA Headquarter & Social Media -->
          <div class="space-y-8 sm:space-y-[67px]">
            <!-- BCA Headquarter Block -->
            <div class="space-y-3 sm:space-y-5">
              <h4 class="text-[#F1F5F8]/60 font-normal text-sm sm:text-[16px]">
                BCA Headquarter
              </h4>
              <address class="not-italic font-light text-[#F1F5F8] text-sm sm:text-[16px] leading-relaxed">
                Menara BCA, Grand Indonesia<br />
                Jl. MH Thamrin No. 1<br />
                Jakarta 10310
              </address>
            </div>

            <!-- Social Media Block -->
            <div class="space-y-3 sm:space-y-5">
              <h4 class="text-[#F1F5F8]/60 font-normal text-sm sm:text-[16px]">
                Social Media
              </h4>
              <div class="flex flex-col space-y-2 font-light text-[#F1F5F8] text-sm sm:text-[16px]">
                <a href="#" class="hover:text-white transition-colors">Instagram</a>
                <a href="#" class="hover:text-white transition-colors">Facebook</a>
                <a href="#" class="hover:text-white transition-colors">Youtube</a>
                <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Disclaimer & Regulatory Info Grid -->
      <div class="pt-8 sm:pt-12 space-y-6 sm:space-y-8 text-[11px] sm:text-xs text-gray-400 font-light leading-relaxed">
        <!-- Disclaimers -->
        <div class="space-y-4 max-w-xl">
          <p>
            BCA is licensed and supervised by Financial Services Authority (Otoritas Jasa Keuangan) & Bank Indonesia
          </p>
          <p>
            BCA is a member of Indonesia Deposit Insurance Corporation (Lembaga Penjamin Simpanan)
          </p>
        </div>

        <!-- Right Links & Branch Selector -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div class="hidden sm:block">
            <a href="#branches" class="underline text-sm sm:text-[16px] underline-offset-4 text-white hover:text-blue-400 transition-colors font-normal">
              Other BCA Branch
            </a>
          </div>
          <div class="flex items-center gap-6 text-[#F1F5F8] font-normal text-sm sm:text-[16px]">
            <a href="#sbdk" class="hover:text-white transition-colors">SBDK</a>
            <a href="#policy" class="hover:text-white transition-colors">Policy</a>
            <a href="#terms" class="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)

function handleSubscribe() {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => {
      subscribed.value = false
    }, 4000)
  }
}
</script>
