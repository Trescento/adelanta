<template>
  <header>
    <div
      v-if="navOpen"
      class="bg-white absolute inset-0 flex flex-col pt-24 container overflow-hidden z-[9998]"
    >
      <nav class="flex flex-col gap-6">
        <CommonBaseButton type="black">
          <span class="font-medium mx-auto">Iniciar Sesión</span>
        </CommonBaseButton>
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-[2rem] font-bold text-balance"
          @click="toggleNav"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <!-- Social Links -->
      <div class="mt-auto mb-8 flex gap-6">
        <NuxtLink href="#" class="w-10 h-10 text-white border rounded-full flex items-center justify-center border-brand bg-brand">
          <CommonSocialIcon icon="linkedin" :width="18" :height="18" />
        </NuxtLink>
        <NuxtLink href="#" class="w-10 h-10 text-white border rounded-full flex items-center justify-center border-brand bg-brand">
          <CommonSocialIcon icon="facebook" :width="18" :height="18" />
        </NuxtLink>
        <NuxtLink href="#" class="w-10 h-10 text-white border rounded-full flex items-center justify-center border-brand bg-brand">
          <CommonSocialIcon icon="instagram" :width="18" :height="18" />
        </NuxtLink>
        <NuxtLink href="#" class="w-10 h-10 text-white border rounded-full flex items-center justify-center border-brand bg-brand">
          <CommonSocialIcon icon="twitter" :width="18" :height="18" />
        </NuxtLink>
        <NuxtLink href="#" class="w-10 h-10 text-white border rounded-full flex items-center justify-center border-brand bg-brand">
          <CommonSocialIcon icon="tiktok" :width="18" :height="18" />
        </NuxtLink>
      </div>
    </div>

    <div class="container flex justify-between py-4 relative bg-white z-[9999]">
      <button class="xl:hidden" @click="toggleNav">
        <img v-if="!navOpen" src="~/assets/menu.svg" class="h-6 w-6">
        <img v-if="navOpen" src="~/assets/close.svg" class="h-6 w-6">
      </button>
      <NuxtLink href="/">
        <img src="/logo.png" class="h-[33px] w-[123px] xl:h-[38px] xl:w-[134px]">
      </NuxtLink>
      <div class="flex items-center gap-6">
        <nav class="hidden xl:flex gap-[33px]">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
          >
            {{ item.name }}
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
  </header>
</template>

<script setup lang="ts">
const navOpen = useState('isNavOpen', () => false)

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  {
    name: 'Nosotros',
    href: '/nosotros'
  },
  {
    name: '¿Cómo funciona?',
    href: '/como-funciona'
  },
  {
    name: 'Socios Ziff',
    href: '/socios'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Preguntas Frecuentes',
    href: '/faq'
  }
]

const toggleNav = () => {
  navOpen.value = !navOpen.value
}
</script>
