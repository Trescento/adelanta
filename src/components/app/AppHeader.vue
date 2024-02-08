<template>
  <header :class="`relative ${classBackground}`">
    <div class="container flex justify-between py-4 relative z-[9999]">
      <button class="xl:hidden" @click="toggleNav">
        <img v-if="!navOpen" src="~/assets/menu.svg" class="h-6 w-6">
        <img v-if="navOpen" src="~/assets/close.svg" class="h-6 w-6">
      </button>
      <NuxtLink href="/" @click="navOpen ? toggleNav() : null">
        <img src="/logo.png" class="h-[33px] w-[123px] xl:h-[38px] xl:w-[134px]">
      </NuxtLink>
      <div class="flex items-center gap-6">
        <nav class="hidden xl:flex gap-[33px]">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            :class="`transition-colors ${route.path === item.href ? 'text-brand' : ''}`"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
        <!-- Buttons -->
        <div class="flex">
          <a href="https://app.arrenda.mx/login/" target="_noblank" class="hidden px-6 py-2 mr-3 border rounded-lg xl:block border-brand-black">
            Iniciar Sesión
          </a>
          <a href="https://app.arrenda.mx/register/" target="_noblank" class="px-6 py-2 text-white border rounded-lg border-brand bg-brand">
            Registrarme
          </a>
        </div>
      </div>
    </div>
    <div
      v-if="navOpen"
      class="bg-white fixed top-0 inset-x-0 h-dvh pt-24 overflow-hidden z-[9998]"
    >
      <div class="flex flex-col container h-full">
        <nav class="flex flex-col gap-6">
          <a href="https://app.arrenda.mx/login/" target="_noblank" class=" text-center text-lg py-4 mr-3 border rounded-lg xl:block border-brand-black">
            Iniciar Sesión
          </a>
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-[2rem] font-bold text-balance"
            :class="route.path === item.href ? 'text-brand' : ''"
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
    </div>
  </header>
</template>

<script setup lang="ts">
const navOpen = useState('isNavOpen', () => false)
const route = useRoute()
const { headerColor } = useHeaderColor()

const backgroundColors = {
  white: 'bg-white',
  purple: 'bg-brand',
  gray90: 'bg-brand-gray90'
}

// @ts-expect-error
const classBackground = computed(() => backgroundColors[headerColor.value])

interface NavItem {
  name: string
  href: string
}

const navItems = useState<NavItem[]>('navItems', () => ([
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
]))

const toggleNav = () => {
  navOpen.value = !navOpen.value
  if (navOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}
</script>
