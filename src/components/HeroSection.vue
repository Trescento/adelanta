<template>
  <section class="container flex flex-col items-center my-24">
    <h1 class="font-bold text-6xl text-center max-w-5xl leading-[normal] mb-10">
      <span class="text-brand">Accede capital para crecer</span> tu negocio sin endeudarte
    </h1>
    <BaseButton>
      <div class="flex items-center space-x-4">
        <span>Solicita capital por adelantado</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M5.5 12H19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.5 5L19.5 12L12.5 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </BaseButton>
    <div class="flex flex-nowrap overflow-hidden" ref="carouselContainer">
      <div class="flex space-x-6 text-2xl font-bold items-center mt-36"
        ref="carousel"
        v-motion="{
          initial: { x: 0 },
          enter: {
            x: -4348 / 2,
            transition: {
              duration: 16000,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop'
            }
          }
        }"
      >
        <div class="flex space-x-6 items-center" v-for="n in 3" :key="n">
          <template v-for="(word, index) in words" :key="`word-${index}-${n}`">
            <span class="text-nowrap whitespace-nowrap">{{ word }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_260_464)">
                <path d="M12.0305 24C11.652 24 11.332 23.7259 11.2404 23.3587C10.9482 22.1884 10.3889 20.9437 9.5625 19.625C8.58334 18.0416 7.1875 16.573 5.375 15.2188C3.79859 14.0273 2.22217 13.2148 0.645766 12.7813C0.272406 12.6787 0 12.3476 0 11.9604C0 11.5808 0.261928 11.2535 0.626968 11.1493C2.17254 10.708 3.66146 9.99157 5.09375 9C6.73958 7.85417 8.11458 6.47916 9.21875 4.875C10.1955 3.44598 10.8661 2.03266 11.2304 0.635048C11.3258 0.268914 11.6481 0 12.0265 0C12.4091 0 12.7337 0.27487 12.8268 0.645996C13.037 1.48385 13.3656 2.34144 13.8125 3.21875C14.375 4.30208 15.0937 5.34374 15.9688 6.34375C16.8646 7.32292 17.8646 8.20834 18.9688 9C20.4116 10.0228 21.8784 10.7413 23.3693 11.1557C23.735 11.2573 24 11.5829 24 11.9625C24 12.3478 23.727 12.6761 23.3555 12.778C22.4105 13.037 21.4378 13.4549 20.4376 14.0312C19.2292 14.7396 18.1042 15.5833 17.0624 16.5625C16.0208 17.5208 15.1667 18.5312 14.5 19.5937C13.672 20.9152 13.112 22.1694 12.8204 23.3567C12.73 23.725 12.4096 24 12.0305 24Z" fill="#D3C5FF"/>
              </g>
              <defs>
                <clipPath id="clip0_260_464">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </template>
        </div>
      </div>
    </div>
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
</script>

<script lang="ts">
import BaseButton from '~/components/common/BaseButton.vue';

export default {
  components: {
    BaseButton
  }
}

</script>