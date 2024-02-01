<template>
  <!-- DESKTOP -->
  <div class="relative">
    <div
      id="hero-img-carousel"
      v-motion="{
        initial: { x: 0 },
        enter: { x: -(392 + 16) * images.length,
                 transition: {
                   duration: 30000,
                   ease: 'linear',
                   repeat: Infinity,
                   repeatType: 'loop',
                 },
        },
      }"
      class="hidden lg:flex flex-nowrap min-w-[392px]"
    >
      <template v-for="n in 3">
        <img v-for="image in images" :key="`desktop-img-${n}-${image}`" :src="`/images/hero/${image}`" alt="Placeholder" class="rounded-3xl h-[588px] mr-4">
      </template>
    <!-- <img v-for="n in 3" src="https://via.placeholder.com/391x588" alt="Placeholder" class="rounded-3xl" /> -->
    </div>

    <!-- MOBILE -->
    <div
      v-motion="{
        initial: { x: 0 },
        enter: { x: -(234 + 16) * images.length,
                 transition: {
                   duration: 30000,
                   ease: 'linear',
                   repeat: Infinity,
                   repeatType: 'loop',
                 },
        },
      }"
      class="flex lg:hidden flex-nowrap min-w-[234px]"
    >
      <template v-for="n in 3">
        <img v-for="image in images" :key="`mobile-img-${n}-${image}`" :src="`/images/hero/${image}`" alt="Placeholder" class="rounded-3xl h-[351px] mr-4">
      </template>
    <!-- <img v-for="n in 3" src="https://via.placeholder.com/391x588" alt="Placeholder" class="rounded-3xl" /> -->
    </div>
    <div v-if="withFade" class="hidden lg:block absolute bg-gradient-to-r from-white inset-y-0 left-0 w-6" />
    <div v-if="withFade" class="hidden lg:block absolute bg-gradient-to-l from-white inset-y-0 right-0 w-6" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  withFade?: boolean
}>()

const withFade = props.withFade
const images = [
  'hero-1.png',
  'hero-2.png',
  'hero-3.png'
]
</script>
