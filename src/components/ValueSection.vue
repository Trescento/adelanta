<template>
  <section
    v-motion
    class="container max-w-7xl lg:my-24 my-12 lg:px-4 px-0"
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
    <div class="flex flex-col lg:flex-row items-center container">
      <NuxtImg
        class="lg:rounded-3xl object-cover lg:-mr-[151px] lg:w-5/12 -mb-[151px] lg:mb-0 w-full min-h-80 rounded-3xl"
        src="/images/value.jpeg"
        alt="Grow Together"
        format="webp"
        width="500"
      />
      <div class="bg-brand rounded-3xl p-8 text-center flex flex-col items-center mx-6 lg:mx-0">
        <p class="text-brand-purple-light text-2xl lg:text-[2rem] font-bold leading-snug">
          Con nuestras opciones de financiamiento, puedes concentrarte en lo importante:
        </p>
        <p class="text-[2rem] lg:text-[2.5rem] text-white font-bold mb-6">
          Hacer crecer tu empresa
        </p>
        <CommonBaseButton type="white" as-anchor href="https://app.arrenda.mx/register/" target="_blank">
          <span>Solicita un adelanto</span>
          <CommonArrowIcon />
        </CommonBaseButton>
      </div>
    </div>
  </section>
</template>
