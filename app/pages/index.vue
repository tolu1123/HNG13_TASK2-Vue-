<template>
  <main class="min-h-screen bg-[#f4f5f7]">
    <HeaderHome />
    <Hero />
    <About />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import HeaderHome from '~/components/header/HeaderHome.vue'
import Hero from '~/components/home/Hero.vue'
import About from '~/components/home/About.vue'
import Footer from '~/components/universal/Footer.vue'
</script>
