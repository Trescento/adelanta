<template>
  <section class="container flex justify-between items-center my-24">
    <div class="mr-16 max-w-[700px]">
      <h1 class="text-[4rem] font-bold">Accede capital para crecer tu negocio sin endeudarte</h1>
      <div>
        <div class="flex flex-nowrap">
          <span class="text-nowrap whitespace-nowrap" v-for="word in words">{{ word }}</span>
        </div>
        <div class="flex flex-nowrap">
          <span class="text-nowrap whitespace-nowrap" v-for="word in words">{{ word }}</span>
        </div>
      </div>
      <BaseButton>
        <div class="flex items-center space-x-4">
          <span>Solicita capital por adelantado</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M5 12.5H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5.5L19 12.5L12 19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </BaseButton>
    </div>
    <HeroImagesCarousel />
  </section>
</template>

<script setup lang="ts">
const words = [
  'Locales comerciales',
  'Parques industriales',
  'Centros comerciales',
  'Antenas',
  'Self Storage',
  'Contratos de suscripción',
  'Flujos de gestión',
  'Ingresos SaaS'
]

const images = [
  'hero-1.png',
  'hero-2.png',
  'hero-3.png',
]
</script>

<script lang="ts">
import BaseButton from '~/components/common/BaseButton.vue';

export default {
  components: {
    BaseButton
  }
}

</script>