<template>
      <div
        class="hidden md:flex flex-nowrap"
        id="hero-img-carousel"
        v-motion="{
          initial: { x: 0 },
          enter: { x: -(392 + 16) * images.length,
            transition: {
              duration: 20000,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            },
          },
        }"
      >
        <img v-for="image in images" :src="`/images/hero/${image}`" alt="Placeholder" class="rounded-3xl md:h-[588px] mr-4" />
        <img v-for="image in images" :src="`/images/hero/${image}`" alt="Placeholder" class="rounded-3xl md:h-[588px] mr-4" />
        <!-- <img v-for="n in 3" src="https://via.placeholder.com/391x588" alt="Placeholder" class="rounded-3xl" /> -->
      </div>
      <div
        class="flex md:hidden flex-nowrap "
        v-motion="{
          initial: { x: 0 },
          enter: { x: -(234 + 16) * images.length,
            transition: {
              duration: 20000,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            },
          },
        }"
      >
        <!-- <img src="~/assets/images/hero/hero-3.png" alt="Placeholder" class="rounded-3xl" /> -->
        <img v-for="image in images" :src="`/images/hero/${image}`" alt="Placeholder" class="rounded-3xl h-[351px] mr-4" />
        <img v-for="image in images" :src="`/images/hero/${image}`" alt="Placeholder" class="rounded-3xl h-[351px] mr-4" />
        <!-- <img v-for="n in 3" src="https://via.placeholder.com/391x588" alt="Placeholder" class="rounded-3xl" /> -->
      </div>
      <div class="hidden md:block absolute bg-gradient-to-r from-white to-transparent inset-y-0 left-0 w-6" />
      <div class="hidden md:block absolute bg-gradient-to-l from-white to-transparent inset-y-0 right-0 w-6" />
</template>

<script setup lang="ts">
const images = [
  'hero-1.png',
  'hero-2.png',
  'hero-3.png',
]
</script>