<template>
  <section class="container max-w-7xl my-24">
    <div class="flex items-center">
      <img
        class="rounded-lg object-cover -mr-[151px] w-5/12 shrink grow-0"
        src="/images/value.png"
        alt="Grow Together"
      />
      <div class="bg-brand rounded-3xl p-8 text-center flex flex-col items-center">
        <p class="text-brand-purple-light text-[2rem] font-bold">
          No dejes que las preocupaciones financieras afectan tu negocio.<br/>
          Con nuestras opciones de financiamiento, puedes concentrarte en lo importante:
        </p>
        <p class="text-[2.5rem] text-white font-bold mb-6">Hacer crecer tu empresa</p>
        <BaseButton type="white">
          <span>Solicita un adelanto</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M5.5 12H19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 5L19.5 12L12.5 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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