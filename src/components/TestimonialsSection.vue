<template>
  <!-- MOBILE -->
  <section class="container block my-24 md:hidden">
    <template
      v-for="(testimonial, index) in testimonials"
      :key="`testimonial-${testimonial.name}`"
    >
      <div
        v-if="index === currentTestimonial"
        v-motion
        class="flex items-center gap-4 my-24"
        :initial="{
          opacity: 0,
          x: 100,
        }"
        :enter="{
          opacity: 1,
          x: 0,
        }"
        :leave="{
          opacity: 0,
          x: -100,
        }"
      >
        <button class="flex items-center justify-center w-8 h-8 rounded-full bg-brand" @click="previousTestimonial">
          <CommonArrowIcon class="rotate-180" />
        </button>
        <div
          class="flex flex-col flex-1 gap-2 px-8 pb-8 border rounded-3xl"
        >
          <img :src="testimonial.image" alt="" class="mx-auto rounded-full h-28 w-28 -mt-14">
          <p class="pt-2 text-lg">
            {{ testimonial.name }}
          </p>
          <p class="text-lg font-semibold">
            {{ testimonial.role }}
          </p>
          <p class="text-sm">
            {{ testimonial.text }}
          </p>
        </div>
        <button class="flex items-center justify-center w-8 h-8 rounded-full bg-brand" @click="nextTestimonial">
          <CommonArrowIcon />
        </button>
      </div>
    </template>
  </section>

  <!-- DESKTOP -->
  <section class="container hidden my-24 md:block">
    <div class="flex flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" width="74" height="62" viewBox="0 0 74 62" fill="none">
        <path d="M31.3235 1.12576L31.4861 0.5H30.8396H15.4385H15.0908L14.9698 0.825983L4.76792 28.3062C3.61194 31.2763 2.71068 33.7354 2.06551 35.6814C1.41916 37.6308 0.962688 39.3322 0.700494 40.782L0.696943 40.8016L0.694968 40.8215C0.564713 42.131 0.5 43.5672 0.5 45.129C0.5 49.8905 2.01762 53.8289 5.07331 56.901C8.12921 59.9733 12.0479 61.5 16.7861 61.5C21.2696 61.5 25.0544 60.0369 28.1059 57.1023L28.106 57.1024L28.1139 57.0945C31.1722 54.0197 32.6872 50.0152 32.6872 45.129C32.6872 40.2433 31.1722 36.298 28.1059 33.3493C26.7912 32.085 25.329 31.0943 23.7224 30.3759L31.3235 1.12576ZM72.1363 1.12576L72.2989 0.5H71.6524H56.2513H55.9036L55.7826 0.825983L45.5807 28.3063C44.4247 31.2764 43.5235 33.7355 42.8783 35.6814C42.232 37.6308 41.7755 39.3322 41.5133 40.782L41.5098 40.8016L41.5078 40.8215C41.3775 42.131 41.3128 43.5672 41.3128 45.129C41.3128 49.8905 42.8304 53.8289 45.8861 56.901C48.942 59.9733 52.8607 61.5 57.5989 61.5C62.0825 61.5 65.8672 60.0369 68.9188 57.1023L68.9189 57.1024L68.9267 57.0945C71.9851 54.0197 73.5 50.0152 73.5 45.129C73.5 40.2433 71.985 36.298 68.9188 33.3493C67.604 32.085 66.1418 31.0943 64.5353 30.3759L72.1363 1.12576Z" fill="#D3C5FF" stroke="#6D3EFF" />
      </svg>
      <template
        v-for="(testimonial, index) in testimonials"
        :key="`testimonial-dt-${testimonial.name}`"
      >
        <div
          v-if="index === currentTestimonial"
          v-motion
          :initial="{
            opacity: 0,
            x: 100,
          }"
          :enter="{
            opacity: 1,
            x: 0,
          }"
          :leave="{
            opacity: 0,
            x: -100,
          }"
        >
          <p class="font-bold text-[2.5rem] text-center max-w-5xl mx-auto my-10">
            {{ testimonial.text }}
          </p>
          <div class="bg-gray-400 w-full h-[1px] my-10" />
          <div class="flex justify-between">
            <div class="flex items-center gap-4">
              <img src="~/assets/testimonials.png" alt="" class="border border-brand rounded-full h-[72px] w-[72px]">
              <div>
                <p class="text-2xl font-semibold">
                  {{ testimonial.name }}
                </p>
                <p class="text-lg">
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <button class="flex items-center justify-center w-8 h-8 rounded-full bg-brand" @click="previousTestimonial">
                <CommonArrowIcon class="rotate-180" />
              </button>
              <p>{{ currentTestimonial + 1 }} / {{ testimonials.length }}</p>
              <button class="flex items-center justify-center w-8 h-8 rounded-full bg-brand" @click="nextTestimonial">
                <CommonArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const currentTestimonial = ref(0)
const testimonials = ref([
  {
    name: 'Ana Laura P.',
    role: 'Asesor Inmobiliario de CDMX',
    text: 'Con Adelanta por Ziff he incrementado mis ingresos sólo recomendando a mis contactos y además ahora cuento con un servicio adicional que ofrecer.',
    image: '/assets/testimonials.png'
  },
  {
    name: 'José R.',
    role: 'Asesor inmobiliaria en Nuevo León',
    text: 'Me gusta mucho que puedo ganar dinero sólo enviando a mis clientes sin esfuerzos de venta extras.',
    image: '/assets/testimonials.png'

  },
  {
    name: 'Omar V.',
    role: 'Asesor Inmobiliario de Puebla',
    text: 'Adelanta por Ziff es un servicio que puedo ofrecer a mis clientes y es un producto fácil de ofrecer.',
    image: '/assets/testimonials.png'

  }
])

const nextTestimonial = () => {
  if (currentTestimonial.value === testimonials.value.length - 1) {
    currentTestimonial.value = 0
  } else {
    currentTestimonial.value++
  }
}

const previousTestimonial = () => {
  if (currentTestimonial.value === 0) {
    currentTestimonial.value = testimonials.value.length - 1
  } else {
    currentTestimonial.value--
  }
}

</script>
