<template>
  <section class="container mb-24 mt-48">
    <div class="grid grid-cols-2 rounded-3xl overflow-hidden">
      <div class="flex flex-col justify-center items-center bg-brand-purple-secondary text-white p-12">
        <h2 class="lg:text-6xl lg:leading-[81px] font-bold mb-6">Sé 
        <span class="relative">el primero
          <img src="~/assets/line-3.svg" class="hidden lg:block absolute -bottom-5 w-full h-auto left-0 object-fill"/> 
        </span> <br />en enterarte</h2>
        <p class="text-lg mb-8">Suscríbete a nuestro boletín para recibir noticias, ofertas y contenido exclusivo.</p>
        <form class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">Nombre</label>
            <input type="email" id="email" class="border border-gray-300 rounded-md p-2" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">Apellido</label>
            <input type="email" id="email" class="border border-gray-300 rounded-md p-2" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">Correo electrónico</label>
            <input type="email" id="email" class="border border-gray-300 rounded-md p-2" />
          </div>
          <div class="flex gap-2 items-center">
            <input type="checkbox" id="terms" class="border border-gray-300 rounded-md h-6 w-6 accent-brand" />
            <label for="terms" class="text-sm">Estoy de acuerdo con la política de privacidad y los términos de uso</label>
          </div>
          <BaseButton>
            <div class="flex justify-between w-full items-center">
              <span class="text-lg font-semibold">Enviar</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </BaseButton>
        </form>
      </div>
      <img src="/images/value.jpeg" width="100%" class="object-cover h-full" />
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