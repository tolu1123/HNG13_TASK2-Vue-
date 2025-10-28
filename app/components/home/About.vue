<script setup>
</script>

<template>
  <section id="about" class="bg-white w-full pb-10">
    <div class="lg:max-w-[1440px] px-5 mx-auto flex flex-col justify-center items-center">
      <h3 class="font-roboto text-xl md:text-3xl font-bold">
        Everything you need in one platform
      </h3>
      <p class="text-center mt-5 mb-10">
        Discover the powerful features that make managing your support tickets
        simpler
        <br class="hidden lg:block">
        and more efficient than ever before.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <!-- Card 1 -->
        <div class="px-5 py-6 rounded-xl shadow-lg bg-[#f4f5f7]">
          <span class="inline-block text-2xl rounded-lg aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] px-2">
            <v-icon name="ri-inbox-archive-fill"/>
          </span>
          <div class="mt-2">
            <h6 class="font-roboto text-lg md:text-xl font-semibold">
              Unified Inbox
            </h6>
            <p>
              Bring all your customer conversations from email, chat and social media into one centralized place.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="px-5 py-6 rounded-xl shadow-lg bg-[#f4f5f7]">
          <span class="inline-block text-2xl rounded-lg aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] px-2">
            <v-icon name="hi-users"/>
          </span>
          <div class="mt-2">
            <h6 class="font-roboto text-lg md:text-xl font-semibold">
              Seamless Collaboration
            </h6>
            <p>
              Assign tickets, leave private notes, and track team performance to resolve issues faster together.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="px-5 py-6 rounded-xl shadow-lg bg-[#f4f5f7]">
          <span class="inline-block text-2xl rounded-lg aspect-square bg-[#36B37E44] backdrop-opacity-80 text-[#36B37E] px-2">
            <v-icon name="md-analytics-outlined" />
          </span>
          <div class="mt-2">
            <h6 class="font-roboto text-lg md:text-xl font-semibold">
              Powerful Analytics
            </h6>
            <p>
              Gain valuable insights with our comprehensive reporting tools to improve your support quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
