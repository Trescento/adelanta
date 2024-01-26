<template>
  <!-- MOBILE -->
  <section class="block md:hidden my-24 container">
    <h2 class=" text-[1.75rem] text-center text-balance font-bold">¿Cómo funciona Adelanta por Ziff?</h2>
    <div class="flex gap-4 my-24 items-center">
      <button class="rounded-full bg-brand w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="rotate-180">
          <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="flex-1 border rounded-3xl px-8 gap-2 flex flex-col pb-8">
        <img src="~/assets/testimonials.png" alt="" class="rounded-full h-28 w-28 mx-auto -mt-14">
        <p class="text-lg pt-2">Ana Laura P.</p>
        <p class="text-lg font-semibold">Asesor Inmobiliario de CDMX</p>
        <p class="text-sm">"Con Arrenda he incrementado mis ingresos sólo conectando a mis contactos y además ahora cuento con otro servicio para ofrecer."</p>
      </div>
      <button class="rounded-full bg-brand w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </section>

  <!-- DESKTOP -->
  <section class="hidden md:block container my-24">
    <div class="flex flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" width="74" height="62" viewBox="0 0 74 62" fill="none">
        <path d="M31.3235 1.12576L31.4861 0.5H30.8396H15.4385H15.0908L14.9698 0.825983L4.76792 28.3062C3.61194 31.2763 2.71068 33.7354 2.06551 35.6814C1.41916 37.6308 0.962688 39.3322 0.700494 40.782L0.696943 40.8016L0.694968 40.8215C0.564713 42.131 0.5 43.5672 0.5 45.129C0.5 49.8905 2.01762 53.8289 5.07331 56.901C8.12921 59.9733 12.0479 61.5 16.7861 61.5C21.2696 61.5 25.0544 60.0369 28.1059 57.1023L28.106 57.1024L28.1139 57.0945C31.1722 54.0197 32.6872 50.0152 32.6872 45.129C32.6872 40.2433 31.1722 36.298 28.1059 33.3493C26.7912 32.085 25.329 31.0943 23.7224 30.3759L31.3235 1.12576ZM72.1363 1.12576L72.2989 0.5H71.6524H56.2513H55.9036L55.7826 0.825983L45.5807 28.3063C44.4247 31.2764 43.5235 33.7355 42.8783 35.6814C42.232 37.6308 41.7755 39.3322 41.5133 40.782L41.5098 40.8016L41.5078 40.8215C41.3775 42.131 41.3128 43.5672 41.3128 45.129C41.3128 49.8905 42.8304 53.8289 45.8861 56.901C48.942 59.9733 52.8607 61.5 57.5989 61.5C62.0825 61.5 65.8672 60.0369 68.9188 57.1023L68.9189 57.1024L68.9267 57.0945C71.9851 54.0197 73.5 50.0152 73.5 45.129C73.5 40.2433 71.985 36.298 68.9188 33.3493C67.604 32.085 66.1418 31.0943 64.5353 30.3759L72.1363 1.12576Z" fill="#D3C5FF" stroke="#6D3EFF"/>
      </svg>
      <p class="font-bold text-[2.5rem] text-center max-w-5xl mx-auto my-10">"<span class="text-brand">Con Arrenda he incrementado mis ingresos</span> sólo conectando a mis contactos y además ahora cuento con otro servicio para ofrecer."</p>
      <div class="bg-gray-400 w-full h-[1px] my-10"/>
      <div class="flex justify-between">
        <div class="flex items-center gap-4">
          <img src="~/assets/testimonials.png" alt="" class="border border-brand rounded-full h-[72px] w-[72px]">
          <div>
            <p class="text-2xl font-semibold">Ana Laura P.</p>
            <p class="text-lg">Asesor Inmobiliario de CDMX</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button class="rounded-full bg-brand w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="rotate-180">
              <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <p>01 / 05</p>
          <button class="rounded-full bg-brand w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = ref([
  {
    name: 'Ana Laura P.',
    role: 'Asesor Inmobiliario de CDMX',
    text: 'Con Arrenda he incrementado mis ingresos sólo conectando a mis contactos y además ahora cuento con otro servicio para ofrecer.',
  }
])
</script>