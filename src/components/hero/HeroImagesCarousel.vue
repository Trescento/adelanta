<template>
  <div class="max-w-[580px] overflow-hidden relative bg-white">
      <div
        class="flex flex-nowrap"
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
        <!-- <img src="~/assets/images/hero/hero-3.png" alt="Placeholder" class="rounded-3xl" /> -->
        <img v-for="image in images" :src="`/images/hero/${image}`" alt="Placeholder" class="rounded-3xl h-[588px] mr-4" />
        <img v-for="image in images" :src="`/images/hero/${image}`" alt="Placeholder" class="rounded-3xl h-[588px] mr-4" />
        <!-- <img v-for="n in 3" src="https://via.placeholder.com/391x588" alt="Placeholder" class="rounded-3xl" /> -->
      </div>
      <div class="absolute bg-gradient-to-r from-white to-transparent inset-y-0 left-0 w-6" />
      <div class="absolute bg-gradient-to-l from-white to-transparent inset-y-0 right-0 w-6" />
    </div>
</template>

<script setup lang="ts">
const images = [
  'hero-1.png',
  'hero-2.png',
  'hero-3.png',
]
</script>