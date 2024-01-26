<template>
  <section class="my-48 container max-w-[1066px] space-y-24">
    <p class="text-[2.5rem] font-bold leading-normal">
      <span class="text-brand">No dejes</span> que las preocupaciones financieras afectan tu negocio. Con nuestras opciones de financiamiento, puedes concentrarte en lo importante:
      <span class="relative">
        hacer crecer tu empresa
        <img src="~/assets/line-3.svg" class="absolute w-full h-auto left-0"/> 
      </span>
    </p>
    <BaseButton type="secondary">
      <div class="flex items-center space-x-4">
        <span>Solicita un adelanto</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19" stroke="#6D3EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="#6D3EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </BaseButton>
  </section>
</template>

<script>
import BaseButton from '~/components/common/BaseButton.vue';
export default {
  components: {
    BaseButton
  }
}
</script>