<template>
  <footer class="bg-brand-black text-white">
    <div class="container py-16 pb-10">
      <div class="flex flex-col md:flex-row gap-12">
        <div class="flex flex-col gap-4 text-sm md:order-2 md:flex-1 text-center md:text-left">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            :class="`hover:underline ${route.path === item.href ? 'text-brand' : ''}`"
          >
            {{ item.name }}
          </NuxtLink>
          <NuxtLink
            href="/terminos-condiciones"
            :class="`hover:underline ${route.path === '/terminos-condiciones' ? 'text-brand' : ''}`"
          >
            Términos y condiciones
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-4 text-sm md:order-3 md:flex-1 text-center md:text-left">
          <p class="text-lg font-bold">
            Contáctanos
          </p>
          <a href="mailto:ventas@ziff.com.mx">ventas@ziff.com.mx</a>
          <a href="tel:+525570689383">+52 55 7068 9383</a>
        </div>
        <div class="flex flex-col gap-6 items-center md:order-1 md:items-start md:flex-1">
          <NuxtLink href="/" aria-label="Ir al inicio">
            <nuxt-img format="webp" src="/logo-white.png" alt="Adelanta por Ziff Logo" class="h-20 object-contain" />
          </NuxtLink>
          <CommonBaseButton as-anchor href="https://app.arrenda.mx/register" target="_blank">
            <span class="font-normal">Registrarme</span>
          </CommonBaseButton>
          <div class="flex gap-2">
            <NuxtLink aria-label="Ir a LinkedIn de Ziff" href="https://www.linkedin.com/company/ziffmx/" target="_blank" class="rounded-full bg-brand-purple-dark-light flex items-center justify-center w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 0.25C2.58696 0.25 1.95107 0.513392 1.48223 0.982233C1.01339 1.45107 0.75 2.08696 0.75 2.75L0.75 15.25C0.75 15.913 1.01339 16.5489 1.48223 17.0178C1.95107 17.4866 2.58696 17.75 3.25 17.75H15.75C16.413 17.75 17.0489 17.4866 17.5178 17.0178C17.9866 16.5489 18.25 15.913 18.25 15.25V2.75C18.25 2.08696 17.9866 1.45107 17.5178 0.982233C17.0489 0.513392 16.413 0.25 15.75 0.25L3.25 0.25ZM4.6275 5.62125C5.02367 5.62125 5.40361 5.46387 5.68374 5.18374C5.96387 4.90361 6.12125 4.52367 6.12125 4.1275C6.12125 3.73133 5.96387 3.35139 5.68374 3.07126C5.40361 2.79113 5.02367 2.63375 4.6275 2.63375C4.23133 2.63375 3.85139 2.79113 3.57126 3.07126C3.29113 3.35139 3.13375 3.73133 3.13375 4.1275C3.13375 4.52367 3.29113 4.90361 3.57126 5.18374C3.85139 5.46387 4.23133 5.62125 4.6275 5.62125ZM5.8775 15.0162L5.8775 6.7925H3.3775L3.3775 15.0162H5.8775ZM7.5375 6.7925L10.0375 6.7925V7.89375C10.4062 7.31625 11.2163 6.53875 12.7225 6.53875C14.52 6.53875 15.4963 7.73 15.4963 9.99625C15.4963 10.105 15.5063 10.6012 15.5063 10.6012L15.5063 15.015L13.0063 15.015L13.0063 10.6025C13.0063 9.99625 12.8787 8.805 11.5312 8.805C10.1825 8.805 10.0688 10.3025 10.0375 11.2825L10.0375 15.015H7.5375L7.5375 6.7925Z" fill="white" />
              </svg>
            </NuxtLink>
            <NuxtLink aria-label="Ir a Facebook de Ziff" href="https://www.facebook.com/ziffmx/" target="_blank" class="rounded-full bg-brand-purple-dark-light flex items-center justify-center w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6045 17.3333L11.6045 10.8792H13.7712L14.0953 8.36417H11.6037V6.75833C11.6037 6.03 11.8062 5.53333 12.8512 5.53333H14.1828V3.28333C13.5379 3.2147 12.8897 3.18132 12.2412 3.18333C10.3212 3.18333 9.00699 4.35583 9.00699 6.50833V8.36417H6.83366V10.8792H9.00616L9.00616 17.3333H1.08699C0.578659 17.3333 0.166992 16.9217 0.166992 16.4133L0.166992 1.58667C0.166992 1.07833 0.578659 0.666667 1.08699 0.666667L15.9137 0.666667C16.422 0.666667 16.8337 1.07833 16.8337 1.58667V16.4133C16.8337 16.9217 16.422 17.3333 15.9137 17.3333H11.6045Z" fill="white" />
              </svg>
            </NuxtLink>
            <NuxtLink aria-label="Ir a Instagram de Ziff" href="https://www.instagram.com/ziffmx/" target="_blank" class="rounded-full bg-brand-purple-dark-light flex items-center justify-center w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path d="M6.5875 9.00039C6.5875 10.6129 7.9 11.9129 9.5 11.9129C11.1 11.9129 12.4125 10.6004 12.4125 9.00039C12.4125 7.40039 11.1 6.08789 9.5 6.08789C7.9 6.08789 6.5875 7.40039 6.5875 9.00039ZM9.5 0.25039C8.2875 0.25039 7.1 0.25039 5.8875 0.31289C4.4875 0.37539 3.2375 0.700391 2.225 1.72539C1.2 2.75039 0.875 3.98789 0.8125 5.38789C0.75 6.60039 0.75 7.78789 0.75 9.00039C0.75 10.2129 0.75 11.4004 0.8125 12.6129C0.875 14.0129 1.2 15.2629 2.225 16.2754C3.25 17.3004 4.4875 17.6254 5.8875 17.6879C7.1 17.7504 8.2875 17.7504 9.5 17.7504C10.7125 17.7504 11.9 17.7504 13.1125 17.6879C14.5125 17.6254 15.7625 17.3004 16.775 16.2754C17.8 15.2504 18.125 14.0129 18.1875 12.6129C18.25 11.4004 18.25 10.2129 18.25 9.00039C18.25 7.78789 18.25 6.60039 18.1875 5.38789C18.125 3.98789 17.8 2.73789 16.775 1.72539C15.75 0.700391 14.5125 0.37539 13.1125 0.31289C11.9125 0.237891 10.7125 0.25039 9.5 0.25039ZM13.9875 9.00039C13.9875 11.4879 11.9875 13.4879 9.5 13.4879C7.0125 13.4879 5.0125 11.4879 5.0125 9.00039C5.0125 6.51289 7.0125 4.51289 9.5 4.51289C11.9875 4.51289 13.9875 6.51289 13.9875 9.00039ZM5.875 4.32539C5.875 4.90039 5.4125 5.37539 4.825 5.37539C4.2375 5.37539 3.775 4.91289 3.775 4.32539C3.775 3.73789 4.2375 3.27539 4.825 3.27539C4.96192 3.27223 5.09803 3.29722 5.22489 3.34883C5.35176 3.40043 5.46667 3.47755 5.5625 3.57539C5.66034 3.67122 5.73746 3.78613 5.78906 3.913C5.84067 4.03986 5.86566 4.17597 5.8625 4.31289L5.875 4.32539Z" fill="white" />
              </svg>
            </NuxtLink>
          </div>
          <p>©️ 2024 Ziff. Todos los derechos reservados.</p>
          <div class="block md:hidden">
            <CommonMadeWithAwesomic />
          </div>
        </div>
      </div>
      <div class="hidden md:flex justify-center py-4">
        <div>
          <CommonMadeWithAwesomic />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface NavItem {
  name: string
  href: string
}
const navItems = useState<NavItem[]>('navItems')
const route = useRoute()
</script>
