<template>
  <div
    class="min-h-screen bg-[#06121e] text-white font-sans selection:bg-blue-500 selection:text-white"
  >
    <!-- Navbar Component (Separated) -->
    <Navbar />

    <!-- Main Content Container -->
    <main>
      <!-- Hero Banner Component (Separated) -->
      <HeroBanner />

      <!-- Vision & Featured Article Section (Separated) -->
      <VisionSection />

      <!-- News & Features Section (Separated) -->
      <NewsSection />

      <!-- Promo Section (Separated) -->
      <PromoSection />

      <!-- Product Showcase Section - myBCA (Separated) -->
      <ProductSection />

      <!-- Bakti BCA Commitment Section (Separated) -->
      <BaktiBcaSection />
    </main>

    <!-- Footer Component (Separated) -->
    <FooterSection />
  </div>
</template>

<script setup>
useHead({
  title: "PT Bank Central Asia Tbk. (BCA) - Senantiasa di Sisi Anda",
  meta: [
    {
      name: "description",
      content: "PT Bank Central Asia Tbk. Website - Senantiasa di Sisi Anda",
    },
  ],
});
</script>
