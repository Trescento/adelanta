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
          <NosotrosPostsItem v-for="post in posts" :key="post.title" :title="post.title" :description="post.description" />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="rotate-180"
          >
            <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button class="bg-brand rounded-full w-8 h-8 flex items-center justify-center" @click="scrollRight">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const carouselContainer = ref<HTMLElement | null>(null)

const posts = ref([
  {
    title: 'Adelanta Revoluciona el Futuro Financiero con Ziff: Una Alianza Innovadora',
    description: 'Adelanta, la empresa líder en soluciones financieras, se une a Ziff en una colaboración estratégica que promete transformar el panorama financiero. Descubre cómo esta alianza pionera redefine las posibilidades, ofreciendo a los usuarios experiencias financieras más eficientes y avanzadas.'
  },
  {
    title: 'Ziff y Adelanta Anuncian Avances Tecnológicos en la Banca Digital',
    description: 'La alianza entre Ziff y Adelanta marca un hito en la evolución de la banca digital. A través de la implementación de tecnologías innovadoras, esta colaboración busca redefinir la forma en que las personas gestionan sus finanzas. Conoce los detalles de las últimas soluciones tecnológicas que revolucionarán la experiencia bancaria.'
  },
  {
    title: 'Adelanta Revoluciona el Futuro Financiero con Ziff: Una Alianza Innovadora',
    description: 'Adelanta, la empresa líder en soluciones financieras, se une a Ziff en una colaboración estratégica que promete transformar el panorama financiero. Descubre cómo esta alianza pionera redefine las posibilidades, ofreciendo a los usuarios experiencias financieras más eficientes y avanzadas.'
  },
  {
    title: 'Ziff y Adelanta Anuncian Avances Tecnológicos en la Banca Digital',
    description: 'La alianza entre Ziff y Adelanta marca un hito en la evolución de la banca digital. A través de la implementación de tecnologías innovadoras, esta colaboración busca redefinir la forma en que las personas gestionan sus finanzas. Conoce los detalles de las últimas soluciones tecnológicas que revolucionarán la experiencia bancaria.'
  },
  {
    title: 'Adelanta Revoluciona el Futuro Financiero con Ziff: Una Alianza Innovadora',
    description: 'Adelanta, la empresa líder en soluciones financieras, se une a Ziff en una colaboración estratégica que promete transformar el panorama financiero. Descubre cómo esta alianza pionera redefine las posibilidades, ofreciendo a los usuarios experiencias financieras más eficientes y avanzadas.'
  },
  {
    title: 'Ziff y Adelanta Anuncian Avances Tecnológicos en la Banca Digital',
    description: 'La alianza entre Ziff y Adelanta marca un hito en la evolución de la banca digital. A través de la implementación de tecnologías innovadoras, esta colaboración busca redefinir la forma en que las personas gestionan sus finanzas. Conoce los detalles de las últimas soluciones tecnológicas que revolucionarán la experiencia bancaria.'
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
