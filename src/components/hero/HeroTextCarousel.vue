<template>
  <!-- MOBILE -->
  <div
    id="hero-text-carousel"
    v-motion="{
      initial: { x: -3552 / 2 },
      enter: {
        x: -3576,
        transition:{
          duration: 55000,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }
    }"
    class="flex lg:hidden flex-nowrap"
  >
    <template v-for="n in 3">
      <span v-for="word in words1" :key="`M-${word}-${n}`" class="text-nowrap whitespace-nowrap text-2xl font-bold opacity-40 mr-6 hover:opacity-100 transition-all">{{ word }}</span>
    </template>
  </div>
  <div
    id="hero-text-carousel2"
    v-motion="{
      initial: { x: -3799 / 2 },
      enter: {
        x: -3823,
        transition:{
          duration: 50000,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }
    }"
    class="flex lg:hidden flex-nowrap"
  >
    <template v-for="n in 3">
      <span v-for="word in words2" :key="`M2-${word}-${n}`" class="text-nowrap whitespace-nowrap text-2xl font-bold opacity-40 mr-6 hover:opacity-100 transition-all">{{ word }}</span>
    </template>
  </div>

  <!-- DESKTOP -->
  <div
    v-motion="{
      initial: { x: -5695 / 2 },
      enter: {
        x: -5719,
        transition:{
          duration: 55000,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }
    }"
    class="hidden lg:flex flex-nowrap"
  >
    <template v-for="n in 3">
      <span v-for="word in words1" :key="`DT-${word}-${n}`" class="text-nowrap whitespace-nowrap text-[40px] font-bold opacity-40 mr-6 hover:opacity-100 transition-all">{{ word }}</span>
    </template>
  </div>
  <div
    v-motion="{
      initial: { x: -6108 / 2 },
      enter: {
        x: -6132,
        transition:{
          duration: 50000,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      }
    }"
    class="hidden lg:flex flex-nowrap"
  >
    <template v-for="n in 3">
      <span v-for="word in words2" :key="`DT2-${word}-${n}`" class="text-nowrap whitespace-nowrap text-[40px] font-bold opacity-40 mr-6 hover:opacity-100 transition-all">{{ word }}</span>
    </template>
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
  'Locales comerciales'
]
</script>
