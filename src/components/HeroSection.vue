<template>
  <section class="container  flex flex-col lg:flex-row justify-between items-center mb-24 mt-4 lg:mt-24">
    <div class="max-w-[580px] lg:order-2 lg:overflow-hidden relative bg-white mb-6 lg:mb-0 z-10">
      <HeroImagesCarousel />
    </div>
    <div class="lg:mr-16 max-w-[700px] w-full flex flex-col lg:order-1">
      <h1 class="text-4xl xl:text-[4rem] font-bold leading-[normal] text-balance mt-4 mb-6">
        Accede capital para crecer tu negocio sin endeudarte
      </h1>
      <div>
        <HeroTextCarousel />
      </div>
      <div class="mt-6">
        <BaseButton>
            <span class="block lg:hidden">Solicitar capital</span>
            <span class="hidden lg:block">Solicita capital por adelantado</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M5 12.5H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 5.5L19 12.5L12 19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </BaseButton>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import BaseButton from '~/components/common/BaseButton.vue';

export default {
  components: {
    BaseButton
  }
}

</script>