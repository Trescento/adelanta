<template>
  <div class="">
    <div class="container flex justify-between py-2">
      <button class="xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 12H21"
            stroke="#150D26"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="#150D26"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="#150D26"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <NuxtLink href="/">
        <img
          src="/logo.png"
          class="h-[33px] w-[123px] xl:h-[38px] xl:w-[134px]"
        >
      </NuxtLink>
      <div class="flex items-center gap-6">
        <nav class="hidden xl:flex gap-[33px]">
          <NuxtLink href="#">Nosotros</NuxtLink>
          <NuxtLink href="#">¿Cómo funciona?</NuxtLink>
          <NuxtLink href="#">Socios Ziff</NuxtLink>
          <NuxtLink href="#">Blog</NuxtLink>
          <NuxtLink href="#">Preguntas Frecuentes</NuxtLink>
        </nav>
        <!-- Buttons -->
        <div class="flex">
          <NuxtLink href="/login">
            <button class="hidden px-6 py-2 mr-3 border rounded-lg xl:block border-brand-black">
              Iniciar Sesión
            </button>
          </NuxtLink>
          <NuxtLink href="/register">
            <button class="px-6 py-2 text-white border rounded-lg border-brand bg-brand">
              Registrarme
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
