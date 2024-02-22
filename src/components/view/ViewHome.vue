<template>
  <HeroSection />
  <StepsSection />
  <CalculatorSection v-motion="animations.visibleOnce.slideDown" />
  <ValueSection />
  <!-- <VideoSection /> -->
  <TestimonialsSection v-motion="animations.visibleOnce.slideUp" />
  <NewsletterSection v-motion="animations.visibleOnce.slideDown" />
</template>

<script setup lang="ts">
import { animations } from '@/helpers/animations'
</script>
