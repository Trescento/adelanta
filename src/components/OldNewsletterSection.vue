<template>
  <section class="container my-24">
    <div class="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden">
      <div class="flex flex-col justify-center bg-brand-purple-secondary text-white p-12">
        <div class="relative mb-6">
          <h2 class="text-[2.5rem] leading-[3.125rem] lg:text-6xl lg:leading-[5.06rem] font-bold">
            Sé
            <span class="relative">el primero
              <img src="~/assets/line-3.svg" class="absolute -bottom-3 lg:-bottom-5 w-full h-auto left-0 object-fill">
            </span> <br>en enterarte
          </h2>
          <!-- Mobile -->
          <div class="flex md:hidden absolute left-64 bottom-0 gap-1">
            <img src="~/assets/star.svg" class="hidden w-6 h-6">
            <img src="~/assets/star.svg" class="hidden h-10 w-10">
            <img src="~/assets/star.svg" class="h-6 w-6">
            <img src="~/assets/star.svg" class="h-2 w-2">
          </div>
          <!-- Desktop -->
          <div class="lg:flex hidden absolute right-0 top-0 gap-1">
            <img src="~/assets/star.svg" class="h-6 w-6">
            <img src="~/assets/star.svg" class="h-10 w-10">
          </div>
        </div>
        <p class="text-lg mb-8">
          Suscríbete a nuestro boletín para recibir noticias, ofertas y contenido exclusivo.
        </p>
        <form class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">Nombre</label>
            <input id="email" type="email" class="border border-gray-300 rounded-md p-2">
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">Apellido</label>
            <input id="email" type="email" class="border border-gray-300 rounded-md p-2">
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">Correo electrónico</label>
            <input id="email" type="email" class="border border-gray-300 rounded-md p-2">
          </div>
          <div class="flex gap-2 items-center">
            <input id="terms" type="checkbox" class="border border-gray-300 rounded-md h-6 w-6 accent-brand">
            <label for="terms" class="text-sm">Estoy de acuerdo con la política de privacidad y los términos de uso</label>
          </div>
          <BaseButton>
            <div class="flex justify-between w-full items-center">
              <span class="text-lg font-semibold">Enviar</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </BaseButton>
        </form>
      </div>
      <img src="/images/value.jpeg" width="100%" class="hidden md:block object-cover h-full">
    </div>
  </section>
</template>

<script>
import BaseButton from '~/components/common/BaseButton.vue'
export default {
  components: {
    BaseButton
  }
}
</script>
