<template>
  <HeaderApp />
  <HeroSection />
  <section class="container">
    <div class="flex justify-between">
      <h2 class="font-bold text-4xl"><span class="text-brand">¿Cómo funciona</span> Adelanta por Ziff?</h2>
      <BaseButton type="primary">
        Obtén una cotización de inmediato
      </BaseButton>
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