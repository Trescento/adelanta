<template>
  <section v-motion-fade class="container flex flex-col lg:flex-row justify-between items-end mb-24 mt-4 lg:mt-12">
    <div class="max-w-[580px] lg:order-2 lg:overflow-hidden relative bg-white mb-6 lg:mb-0 z-10">
      <HeroImagesCarousel with-fade />
    </div>
    <div class="lg:mr-16 max-w-[700px] w-full flex flex-col lg:order-1">
      <div class="mt-4 mb-6">
        <h1 class="text-4xl lg:text-[4rem] font-bold leading-[normal] text-balance">
          Recibe por adelantado tus rentas sin endeudarte.
        </h1>
        <p class="font-bold px-1 text-lg lg:text-2xl">
          Hasta 36 meses, en unos solos días
        </p>
      </div>
      <div>
        <HeroTextCarousel />
      </div>
      <div class="mt-6 lg:mt-20">
        <div class="flex">
          <CommonBaseButton as-anchor href="https://app.arrenda.mx/register/" target="_blank" class="w-full flex justify-center lg:w-auto">
            <span class="block lg:hidden">Solicitar capital</span>
            <span class="hidden lg:block">Solicita capital por adelantado</span>
            <CommonArrowIcon />
          </CommonBaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
