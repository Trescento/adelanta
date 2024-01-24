<template>
  <section class="container max-w-7xl my-48">
    <!-- Head -->
    <div class="flex justify-between items-center space-x-4">
      <h2 class="font-bold text-4xl"><span class="text-brand">¿Cómo funciona</span> Adelanta <br />por Ziff?</h2>
      <BaseButton type="secondary">
        <div class="flex items-center space-x-4">
          <span>Obtén una cotización de inmediato</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke="#6D3EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="#6D3EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </BaseButton>
    </div>
    <div class="grid grid-cols-3 mt-12 gap-4">
      <div class="flex flex-col">
        <span class="bg-brand text-lg font-bold text-white rounded-full h-10 w-10 flex items-center justify-center">
          1
        </span>
        <h3 class="text-2xl mt-4 mb-6 font-bold text-balance">Firma tu contrato con tu cliente o inquilino</h3>
        <p class="text-lg text-balance mt-auto">Para solicitar tu adelanto, deberás tener una contrato comercial que emita pagos mensuales y tenga al menos 6 meses de vigencia.</p>
      </div>
      <div class="flex flex-col">
        <span class="bg-brand text-lg font-bold text-white rounded-full h-10 w-10 flex items-center justify-center">
          2
        </span>
        <h3 class="text-2xl mt-4 mb-6 font-bold text-balance">Crea tu cuenta en Adelanta por Ziff y completa tu solicitud</h3>
        <p class="text-lg text-balance mt-auto">Para solicitar tu adelanto, deberás tener una contrato comercial que emita pagos mensuales y tenga al menos 6 meses de vigencia.</p>
      </div>
      <div class="flex flex-col">
        <span class="bg-brand text-lg font-bold text-white rounded-full h-10 w-10 flex items-center justify-center">
          3
        </span>
        <h3 class="text-2xl mt-4 mb-6 font-bold text-balance">Recibes tu Adelanto en tu cuenta bancaria</h3>
        <p class="text-lg text-balance mt-auto">Para solicitar tu adelanto, deberás tener una contrato comercial que emita pagos mensuales y tenga al menos 6 meses de vigencia.</p>
      </div>
    </div>
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