<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#06121e]/90 backdrop-blur-md border-b border-white/10 text-white/60"
  >
    <div
      class="max-w-[1440px] mx-auto px-[31.56px] sm:px-6 lg:px-12 h-20 flex items-center justify-between"
    >
      <!-- Left: Brand Logo -->
      <a href="#" class="flex items-center gap-3 group focus:outline-none">
        <!-- BCA SVG Logo Emblem -->
        <div class="flex items-center gap-2">
          <img src="/logo-bca-white.svg" alt="BCA" class="h-8 sm:h-9 md:h-10 w-auto" />
        </div>
      </a>

      <!-- Center: Desktop Navigation Links -->
      <nav class="hidden md:flex items-center space-x-8 text-sm font-normal leading-[-1%] tracking-wide">
        <a
          v-for="(item, index) in navItems"
          :key="index"
          :href="item.href"
          @click="activeNav = item.name"
          class="relative py-2 transition-colors duration-200 hover:text-white"
          :class="
            activeNav === item.name
              ? 'text-white font-normal'
              : 'text-white/60 hover:text-white'
          "
        >
          {{ item.name }}
          <!-- <span
            v-if="activeNav === item.name"
            class="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
          ></span> -->
        </a>
      </nav>

      <!-- Right: Action Buttons (Login, Search, Lang) -->
      <div class="hidden md:flex items-center space-x-6">
        <!-- Login Button with Dropdown -->
        <div class="relative" ref="loginDropdownRef">
          <button
            @click="isLoginOpen = !isLoginOpen"
            class="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-400/60 hover:border-white text-sm font-medium transition-all duration-200 hover:bg-white/10 focus:outline-none"
          >
            <span>Login</span>
            <svg
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': isLoginOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Login Dropdown Menu -->
          <transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 scale-95 -translate-y-1"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 -translate-y-1"
          >
            <div
              v-if="isLoginOpen"
              class="absolute right-0 mt-3 w-56 bg-[#0c1c2e] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2 text-sm text-gray-200 z-50"
            >
              <a
                href="#"
                class="block px-4 py-2.5 hover:bg-blue-600/30 hover:text-white transition-colors"
              >
                myBCA
              </a>
              <a
                href="#"
                class="block px-4 py-2.5 hover:bg-blue-600/30 hover:text-white transition-colors"
              >
                KlikBCA Individual
              </a>
              <a
                href="#"
                class="block px-4 py-2.5 hover:bg-blue-600/30 hover:text-white transition-colors"
              >
                KlikBCA Bisnis
              </a>
              <a
                href="#"
                class="block px-4 py-2.5 hover:bg-blue-600/30 hover:text-white transition-colors"
              >
                BCA mobile
              </a>
            </div>
          </transition>
        </div>

        <!-- Search Icon Button -->
        <button
          @click="isSearchOpen = !isSearchOpen"
          aria-label="Search"
          class="p-2 text-gray-300 hover:text-white transition-colors focus:outline-none"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <!-- Language Selector Dropdown -->
        <div class="relative">
          <button
            @click="isLangOpen = !isLangOpen"
            class="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none"
          >
            <span>{{ currentLang }}</span>
            <svg
              class="w-3.5 h-3.5 transition-transform duration-200"
              :class="{ 'rotate-180': isLangOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="isLangOpen"
              class="absolute right-0 mt-2 w-28 bg-[#0c1c2e] border border-white/10 rounded-lg shadow-xl py-1 text-sm text-gray-200"
            >
              <button
                @click="selectLang('En')"
                class="w-full text-left px-4 py-1.5 hover:bg-blue-600/30 hover:text-white transition-colors"
              >
                English (En)
              </button>
              <button
                @click="selectLang('Id')"
                class="w-full text-left px-4 py-1.5 hover:bg-blue-600/30 hover:text-white transition-colors"
              >
                Indonesia (Id)
              </button>
            </div>
          </transition>
        </div>
      </div>

      <!-- Mobile Controls: Search & Hamburger Menu Buttons -->
      <div class="md:hidden flex items-center space-x-3">
        <!-- Mobile Search Button -->
        <button
          @click="isSearchOpen = !isSearchOpen"
          aria-label="Search"
          class="p-2 text-gray-300 hover:text-white transition-colors focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <!-- Mobile Hamburger Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Search Overlay Box -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isSearchOpen"
        class="bg-[#091828] border-t border-white/10 px-4 py-4 sm:px-8"
      >
        <div class="max-w-3xl mx-auto flex items-center gap-3">
          <svg
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Cari layanan, produk, atau informasi BCA..."
            class="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-base"
          />
          <button
            @click="isSearchOpen = false"
            class="text-xs text-gray-400 hover:text-white uppercase font-bold tracking-wider"
          >
            Tutup
          </button>
        </div>
      </div>
    </transition>

    <!-- Mobile Drawer Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-[#0a1827] border-b border-white/10 px-6 py-6 space-y-4"
      >
        <nav class="flex flex-col space-y-3 font-medium text-base">
          <a
            v-for="(item, index) in navItems"
            :key="index"
            :href="item.href"
            @click="
              activeNav = item.name;
              isMobileMenuOpen = false;
            "
            class="py-2 border-b border-white/5 transition-colors"
            :class="
              activeNav === item.name
                ? 'text-blue-400 font-semibold'
                : 'text-gray-300'
            "
          >
            {{ item.name }}
          </a>
        </nav>
        <div class="pt-4 flex flex-col gap-3">
          <button
            class="w-full py-2.5 rounded-full border border-gray-400 text-center font-medium hover:bg-white/10"
          >
            Login
          </button>
          <div
            class="flex justify-between items-center pt-2 text-sm text-gray-400"
          >
            <span>Bahasa:</span>
            <div class="flex gap-4">
              <button
                @click="selectLang('En')"
                :class="{ 'text-blue-400 font-bold': currentLang === 'En' }"
              >
                EN
              </button>
              <button
                @click="selectLang('Id')"
                :class="{ 'text-blue-400 font-bold': currentLang === 'Id' }"
              >
                ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const activeNav = ref("Individual");
const isLoginOpen = ref(false);
const isLangOpen = ref(false);
const isSearchOpen = ref(false);
const isMobileMenuOpen = ref(false);
const currentLang = ref("En");

const navItems = [
  { name: "Individual", href: "#individual" },
  { name: "Business", href: "#business" },
  { name: "About BCA", href: "#about-bca" },
  { name: "Career", href: "#career" },
];

function selectLang(lang) {
  currentLang.value = lang;
  isLangOpen.value = false;
}
</script>
