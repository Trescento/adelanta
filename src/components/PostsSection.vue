<template>
  <section class="lg:container flex flex-col lg:flex-row py-12 gap-6 pr-0 overflow-x-visible">
    <div class="max-w-sm w-full px-6">
      <h3 class="text-[2.5rem] font-bold mb-6">
        Publicaciones en medios
      </h3>
      <p class="text-lg">
        Estas menciones son un recordatorio de nuestro compromiso con la excelencia y un impulso para alcanzar nuevas alturas. ¡Gracias por ser parte de nuestro viaje!
      </p>
    </div>
    <div class="flex flex-col overflow-x-auto">
      <div class="flex flex-col">
        <div ref="carouselContainer" class="flex overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth lg:scroll-bar-hidden px-4">
          <NosotrosPostsItem v-for="post in posts" :key="post.title" :title="post.title" :description="post.description" :url="post.url" />
        </div>
      </div>
      <div class="lg:hidden mt-4 px-4 lg:px-0">
        <CommonBaseButton>
          <span>¿Cómo funciona?</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </CommonBaseButton>
      </div>
      <div class="hidden lg:flex items-center justify-center gap-4 mt-4">
        <button class="bg-brand rounded-full w-8 h-8 flex items-center justify-center" @click="scrollLeft">
          <CommonArrowIcon type="white" class="rotate-180" />
        </button>
        <button class="bg-brand rounded-full w-8 h-8 flex items-center justify-center" @click="scrollRight">
          <CommonArrowIcon type="white" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const carouselContainer = ref<HTMLElement | null>(null)

const posts = ref([
  {
    title: 'Arrenda emerges with Adelanta, a financing offering for landlords in Latin America',
    description: 'Arrenda, a Mexico City-based fintech company, is offering digital financial services to the real estate market of Latin America and closed on $26.5 million in a pre-seed round of equity and debt.',
    url: 'https://techcrunch.com/2022/07/20/arrenda-emerges-with-adelanta-a-financing-offering-for-landlords-in-latin-america'
  },
  {
    title: '¿Es posible cobrar las rentas por adelantado? Arrenda nace para darle liquidez a propietarios',
    description: 'La firma cerró una ronda por 26.5 millones de dólares para iniciar con su primer producto y el objetivo es crear una oferta más amplia para el mercado de vivienda en renta',
    url: 'https://www.eleconomista.com.mx/econohabitat/Es-posible-cobrar-las-rentas-por-adelantado-Arrenda-nace-para-darle-liquidez-a-propietarios--20220719-0117.html'
  },
  {
    title: 'Mexico’s Arrenda, aimed at making renting easy, raises $26.5 mln in early round.',
    description: 'MEXICO CITY, July 20 (Reuters) - Mexican startup Arrenda, which offers advance payments to landlords upfront to lower barriers to renting in the country, raised $26.5 million in equity and debt financing in an early funding round, the company said Wednesday.',
    url: 'https://www.nasdaq.com/articles/mexicos-arrenda-aimed-at-making-renting-easy-raises-%2426.5-mln-in-early-round'
  },
  {
    title: 'Ziff y Adelanta Anuncian Avances Tecnológicos en la Banca Digital',
    description: 'La alianza entre Ziff y Adelanta marca un hito en la evolución de la banca digital. A través de la implementación de tecnologías innovadoras, esta colaboración busca redefinir la forma en que las personas gestionan sus finanzas. Conoce los detalles de las últimas soluciones tecnológicas que revolucionarán la experiencia bancaria.',
    url: 'https://contxto.com/es/mexico-es/fintech-arrenda-que-ofrece-creditos-a-arrendadores-en-mexico-levanta-us26-5-millones/'
  }
])

const scrollLeft = () => {
  if (carouselContainer.value != null) {
    carouselContainer.value.scrollLeft -= 350 // Ajusta este valor según sea necesario
  }
}

const scrollRight = () => {
  if (carouselContainer.value != null) {
    carouselContainer.value.scrollLeft += 350 // Ajusta este valor según sea necesario
  }
}

</script>
