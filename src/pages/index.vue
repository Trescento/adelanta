<template>
  <HeroSection />
  <StepsSection />
  <ValueSection />
  <VideoSection />
  <TestimonialsSection />
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
        </form>
      </div>

      <img src="/images/value.jpeg" width="100%" class="object-cover h-full" />
    </div>
  </section>
</template>