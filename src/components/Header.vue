<template>
  <div class="bg-brand-gray90">
    <div class="container flex justify-between py-2">
      <button class="xl:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12H21" stroke="#150D26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 6H21" stroke="#150D26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 18H21" stroke="#150D26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <NuxtLink href="/">
        <img src="/logo.png" class="h-[33px] w-[123px] xl:h-[38px] xl:w-[134px]"/>
      </NuxtLink>
      <div class="flex items-center gap-6">
        <nav class="hidden xl:flex gap-[33px]">
          <NuxtLink>Nosotros</NuxtLink>
          <NuxtLink>¿Cómo funciona?</NuxtLink>
          <NuxtLink>Socios Ziff</NuxtLink>
          <NuxtLink>Blog</NuxtLink>
          <NuxtLink>Preguntas Frecuentes</NuxtLink>
        </nav>
        <!-- Buttons -->
        <div class="flex">
          <NuxtLink href="/login">
            <button class="hidden xl:block border rounded-lg border-brand-black px-6 py-2 mr-3">Iniciar Sesión</button>
          </NuxtLink>
          <NuxtLink href="/register">
            <button class="border rounded-lg border-brand bg-brand text-white px-6 py-2">Registrarme</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>