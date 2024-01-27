<template>
  <div>
    <div class="container flex justify-between py-2">
      <button class="xl:hidden">
        <img src="~/assets/menu.svg" class="h-6 w-6">
      </button>
      <NuxtLink href="/">
        <img src="/logo.png" class="h-[33px] w-[123px] xl:h-[38px] xl:w-[134px]">
      </NuxtLink>
      <div class="flex items-center gap-6">
        <nav class="hidden xl:flex gap-[33px]">
          <NuxtLink href="/nosotros">
            Nosotros
          </NuxtLink>
          <NuxtLink href="/como-funciona">
            ¿Cómo funciona?
          </NuxtLink>
          <NuxtLink href="/socios">
            Socios Ziff
          </NuxtLink>
          <NuxtLink href="/blog">
            Blog
          </NuxtLink>
          <NuxtLink href="/faq">
            Preguntas Frecuentes
          </NuxtLink>
        </nav>
        <!-- Buttons -->
        <div class="flex">
          <NuxtLink href="#" class="hidden px-6 py-2 mr-3 border rounded-lg xl:block border-brand-black">
            Iniciar Sesión
          </NuxtLink>
          <NuxtLink href="#" class="px-6 py-2 text-white border rounded-lg border-brand bg-brand">
            Registrarme
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
