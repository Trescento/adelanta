<template>
  <section class="bg-brand-gray90 pb-24">
    <div class="bg-brand-purple-light">
      <h2 class="text-[2rem] font-bold text-brand text-center py-12">
        Últimas publicaciones
      </h2>
    </div>
    <div class="flex flex-col container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr py-24 gap-8">
        <BlogPostItem v-for="post in posts" :key="post.title" :post="post" />
      </div>
      <div class="flex gap-2 justify-center">
        <button class="bg-brand rounded-full w-8 h-8 grid place-content-center">
          <CommonArrowIcon type="white" class="rotate-180" />
        </button>
        <button class="bg-brand rounded-full w-8 h-8 grid place-content-center">
          <CommonArrowIcon type="white" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    title: 'Declaración anual por renta bienes inmuebles',
    description: 'Presenta tu declaración anual por renta de bienes inmuebles sin complicaciones El flujo de efectivo es esencial para cualquier negocio. Las rentas por adelantado no solo ofrecen liquidez inmediata, sino también beneficios fiscales que pueden ser cruciales para tu estabilidad',
    image: 'https://placehold.it/400x400',
    slug: '/blog/como-revalorizar-tu-local-comercial-7-consejos-clave'
  },
  {
    title: 'Factoraje financiero en el sector inmobiliario',
    description: 'El factoraje financiero en el mundo inmobiliario, como Ziff puede ayudarte El sector inmobiliario es dinámico y requiere de soluciones financieras innovadoras para mantener un flujo de efectivo saludable y aprovechar oportunidades de crecimiento. El factoraje financiero, especialmente en',
    image: 'https://placehold.it/400x400',
    slug: '/blog/como-revalorizar-tu-local-comercial-7-consejos-clave'
  },
  {
    title: 'Adelanto sin colaterales: La solución innovadora de Ziff para propietarios de locales comerciales e industriales',
    description: 'Cómo Adelantar tus Rentas sin Hipotecar El adelanto de rentas sin hipotecar está transformando el panorama financiero para los propietarios de bienes raíces. Esta innovadora solución ofrece una alternativa atractiva a las opciones de financiamiento tradicionales, eliminando la necesidad de',
    image: 'https://placehold.it/400x400',
    slug: '/blog/como-revalorizar-tu-local-comercial-7-consejos-clave'
  },
  {
    title: 'Adelantos de rentas sin hipotecar: Una nueva era de libertad financiera para propietarios',
    description: 'Cómo Adelantar tus Rentas sin Hipotecar El adelanto de rentas sin hipotecar está transformando el panorama financiero para los propietarios de bienes raíces. Esta innovadora solución ofrece una alternativa atractiva a las opciones de financiamiento tradicionales, eliminando la necesidad de',
    image: 'https://placehold.it/400x400',
    slug: '/blog/como-revalorizar-tu-local-comercial-7-consejos-clave'
  },
  {
    title: 'El fondeo de rentas por adelantado: Beneficios para propietarios con Ziff',
    description: 'El Fondeo de Rentas por Adelantado: Beneficios para Propietarios con Ziff En el mundo de la inversión y la propiedad, existen diversas estrategias y servicios que pueden ayudar a los propietarios a maximizar sus beneficios y garantizar un flujo constante',
    image: 'https://placehold.it/400x400',
    slug: '/blog/como-revalorizar-tu-local-comercial-7-consejos-clave'
  },
  {
    title: 'Adelanta tu Renta: solución financiera para locales comerciales',
    description: 'En el cambiante mundo de los negocios, la liquidez es esencial. Para muchos propietarios de locales comerciales, el pago de la renta representa una fuente significativa de ingresos. Pero, ¿qué sucede cuando necesitas ese dinero antes? Aquí es donde entra',
    image: 'https://placehold.it/400x400',
    slug: '/blog/como-revalorizar-tu-local-comercial-7-consejos-clave'
  }
]
</script>
