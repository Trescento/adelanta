<template>
  <!-- MOBILE -->
  <div
    id="hero-text-carousel"
    class="flex lg:hidden flex-nowrap"
    v-motion="{
      initial: { x: -3552 / 2 },
      enter: {
        x: -3576,
        transition:{
          duration: 30000,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }
    }"
  >
    <span class="text-nowrap whitespace-nowrap text-2xl font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words1">{{ word }}</span>
    <span class="text-nowrap whitespace-nowrap text-2xl font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words1">{{ word }}</span>
    <span class="text-nowrap whitespace-nowrap text-2xl font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words1">{{ word }}</span>
  </div>
  <div
    id="hero-text-carousel2"
    class="flex lg:hidden flex-nowrap"
    v-motion="{
      initial: { x: -3799 / 2 },
      enter: {
        x: -3823,
        transition:{
          duration: 27000,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }
    }"
  >
    <span class="text-nowrap whitespace-nowrap text-2xl font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words2">{{ word }}</span>
    <span class="text-nowrap whitespace-nowrap text-2xl font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words2">{{ word }}</span>
    <span class="text-nowrap whitespace-nowrap text-2xl font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words2">{{ word }}</span>
  </div>

  <!-- DESKTOP -->
  <div
    class="hidden lg:flex flex-nowrap"
    v-motion="{
      initial: { x: -5695 / 2 },
      enter: {
        x: -5719,
        transition:{
          duration: 30000,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }
    }"
  >
    <span class="text-nowrap whitespace-nowrap text-[40px] font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words1">{{ word }}</span>
    <span class="text-nowrap whitespace-nowrap text-[40px] font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words1">{{ word }}</span>
    <span class="text-nowrap whitespace-nowrap text-[40px] font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words1">{{ word }}</span>
  </div>
  <div
    class="hidden lg:flex flex-nowrap"
    v-motion="{
      initial: { x: -6108 / 2 },
      enter: {
        x: -6132,
        transition:{
          duration: 28000,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }
    }"
  >
    <span class="text-nowrap whitespace-nowrap text-[40px] font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words2">{{ word }}</span>
    <span class="text-nowrap whitespace-nowrap text-[40px] font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words2">{{ word }}</span>
    <span class="text-nowrap whitespace-nowrap text-[40px] font-bold opacity-40 mr-6 hover:opacity-100 transition-all" v-for="word in words2">{{ word }}</span>
  </div>
</template>

<script setup lang="ts">
const words1 = [
  'Locales comerciales',
  'Parques industriales',
  'Centros comerciales',
  'Antenas',
  'Self Storage',
  'Contratos de suscripción',
  'Flujos de gestión',
  'Ingresos SaaS'
]

const words2 = [
  'Almacenamiento',
  'Contratos de suscripción',
  'Flujos de gestión',
  'Centros comerciales',
  'Parques industriales',
  'Ingresos SaaS',
  'Suscripciones',
  'Locales comerciales',
]
</script>
