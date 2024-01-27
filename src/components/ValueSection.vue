<template>
  <section
    v-motion
    class="container max-w-7xl lg:my-24 -mt-24 lg:px-4 px-0"
    :initial="{ opacity: 0, y: 50 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        delay: 500,
        duration: 500,
        ease: 'easeInOut'
      }
    }"
  >
    <div class="flex flex-col lg:flex-row items-center">
      <img
        class="lg:rounded-3xl object-cover lg:-mr-[151px] lg:w-5/12 -mb-[151px] lg:mb-0 w-full min-h-80"
        src="/images/value.jpeg"
        alt="Grow Together"
      >
      <div class="bg-brand rounded-3xl p-8 text-center flex flex-col items-center mx-6 lg:mx-0">
        <p class="text-brand-purple-light text-2xl lg:text-[2rem] font-bold leading-snug">
          No dejes que las preocupaciones financieras afectan tu negocio.<br>
          Con nuestras opciones de financiamiento, puedes concentrarte en lo importante:
        </p>
        <p class="text-[2rem] lg:text-[2.5rem] text-white font-bold mb-6">
          Hacer crecer tu empresa
        </p>
        <BaseButton type="white">
          <span>Solicita un adelanto</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M5.5 12H19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.5 5L19.5 12L12.5 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import BaseButton from '~/components/common/BaseButton.vue'
export default {
  components: {
    BaseButton
  }
}
</script>
