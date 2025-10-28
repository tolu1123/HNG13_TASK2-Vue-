<template>
  <section class="pt-20 relative">
    <!-- Decorative circle -->
    <div
      class="w-full md:w-1/2 max-w-2xl bg-[#403294]/10 aspect-square rounded-full absolute -left-[10%] -top-[30%] md:-left-[10%] md:-top-[50%] z-1"
    />

    <div
      class="lg:max-w-[1440px] px-5 pb-30 md:pb-0 mx-auto flex flex-col justify-center items-center z-2"
    >
      <h2 class="text-2xl! md:text-4xl! !font-black font-roboto text-center">
        Effortless Ticket
        <br class="hidden lg:block">
        Management
      </h2>

      <p class="text-center my-5!">
        The ultimate solution for streaming customer support and managing
        tickets
        <br class="hidden lg:block">
        with ease, all in one intuitive platform.
      </p>

      <div class="flex gap-6">
        <Button as-child class="bg-black text-white! hover:bg-black/90">
          <NuxtLink to="/login">Get Started</NuxtLink>
        </Button>

        <Button class="bg-black text-white! hover:bg-black/90 px-5 py-1" as-child>
          <NuxtLink to="#about">Learn More</NuxtLink>
        </Button>
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class=""
    >
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,64L48,85.3C96,107,192,149,288,138.7C384,128,480,64,576,58.7C672,53,768,107,864,122.7C960,139,1056,117,1152,138.7C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </section>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
</script>
