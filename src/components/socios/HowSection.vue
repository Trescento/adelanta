<template>
  <section class="container my-24">
    <div class="flex flex-col xl:flex-row lg:items-center gap-16">
      <div class="flex flex-col gap-6 items-start">
        <h3 class="font-bold text-balance text-[1.5rem] md:text-[2.5rem] text-brand">
          Refiere propietarios con contrato de arrendamiento vigente y gana comisiones.
        </h3>
        <ul class=" list-disc pl-4 text-lg">
          <li>Clientes con contrato para monetizar vigentes</li>
          <li>Ingresos de contrato mensual mas que $5,000 MXN</li>
          <li>Cuando financiamos a tu referido, te pagamos tu comisión</li>
        </ul>
        <CommonBaseButton type="secondary" as-anchor href="https://api.whatsapp.com/message/LCGOMAOTKZM4E1?autoload=1&app_absent=0&utm_source=hs_email" target="_blank">
          <span class="font-medium">Comenzar a referir</span>
          <CommonArrowIcon type="primary" />
        </CommonBaseButton>
      </div>

      <!-- Steps -->
      <div class="grid md:grid-cols-2 auto-rows-fr gap-6">
        <div class="bg-brand p-8 pb-12 rounded-3xl flex flex-col items-start gap-6">
          <div class="bg-white h-11 w-11 rounded-full flex items-center justify-center">
            <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 15.5V3.54688H4.5V14C4.5 14.8438 3.79688 15.5 3 15.5H0ZM2.25 12.5469C1.82812 12.5469 1.5 12.875 1.5 13.2969C1.5 13.6719 1.82812 14.0469 2.25 14.0469C2.625 14.0469 3 13.6719 3 13.2969C3 12.875 2.625 12.5469 2.25 12.5469ZM16.3125 0.5H16.7344C19.4531 0.5 22.0312 1.57812 23.9531 3.5V12.5938C23.8594 12.4531 23.7188 12.3594 23.625 12.2188L16.7812 6.6875L18 5.5625C18.3281 5.28125 18.3281 4.8125 18.0469 4.53125C17.7656 4.20312 17.2969 4.20312 16.9688 4.48438L13.2656 7.90625C13.2188 7.90625 13.2188 7.90625 13.2188 7.90625C12.4219 8.60938 11.2031 8.375 10.5938 7.76562C9.9375 7.0625 9.9375 5.89062 10.6875 5.14062L15.3281 0.921875C15.6094 0.640625 15.9375 0.5 16.3125 0.5ZM15.6562 7.71875L22.6406 13.3906C23.2969 13.9062 23.3906 14.8438 22.875 15.5L22.4531 16.0625C21.8906 16.7188 20.9531 16.8125 20.3438 16.2969L20.0625 16.0625L18.6094 17.8906C18 18.6406 16.875 18.6875 16.125 18.125L15.2812 17.4219C14.25 18.6875 12.375 18.9219 11.0625 17.8438L6.84375 14H6V3.5C7.92188 1.625 10.5 0.5 13.2188 0.5H13.5469L9.70312 4.01562C8.34375 5.28125 8.25 7.4375 9.46875 8.79688C10.7344 10.1562 12.8438 10.25 14.25 8.98438L15.6562 7.71875ZM25.5 3.54688H30V15.5L26.9531 15.5469C26.1562 15.5469 25.5 14.8438 25.5 14V3.54688ZM27.75 14C28.125 14 28.5 13.6719 28.5 13.2969C28.5 12.875 28.125 12.5469 27.75 12.5469C27.3281 12.5469 27 12.875 27 13.2969C27 13.6719 27.3281 14 27.75 14Z" fill="#6D3EFF" />
            </svg>
          </div>
          <p class="font-bold text-2xl text-brand-purple-light">
            Paso 1
          </p>
          <p class="text-xl text-brand-gray90 text-balance">
            Encuentre un cliente que haya cerrado una transacción comercial
          </p>
        </div>

        <div class="bg-brand p-8 pb-12 rounded-3xl flex flex-col items-start gap-6">
          <div class="bg-white h-11 w-11 rounded-full flex items-center justify-center">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0.5C12.2344 0.5 12.5156 0.59375 12.75 0.734375L22.3125 4.76562C22.8281 5 23.2031 5.46875 23.2031 6.07812C23.4844 10.5312 21.8438 20.2812 12.75 24.3125C12.5156 24.4531 12.2344 24.5469 12 24.5C11.7188 24.5469 11.4375 24.4531 11.2031 24.3125C2.10938 20.2812 0.46875 10.5312 0.75 6.07812C0.796875 5.46875 1.125 5 1.6875 4.76562L11.25 0.734375C11.4844 0.59375 11.7188 0.5 12 0.5ZM12.4688 17.5625L17.0625 12.875C18.375 11.5156 18.2812 9.26562 16.7812 8C15.5156 6.875 13.6406 7.10938 12.4688 8.32812L12 8.79688L11.4844 8.32812C10.3594 7.10938 8.4375 6.875 7.17188 8C5.67188 9.26562 5.57812 11.5156 6.89062 12.875L11.4375 17.5625C11.7656 17.8438 12.1875 17.8438 12.4688 17.5625Z" fill="#6D3EFF" />
            </svg>
          </div>
          <p class="font-bold text-2xl text-brand-purple-light">
            Paso 2
          </p>
          <p class="text-xl text-brand-gray90 text-balance">
            Refiere al cliente a través de socio Ziff
          </p>
        </div>

        <div class="bg-brand p-8 pb-12 rounded-3xl flex flex-col items-start gap-6">
          <div class="bg-white h-11 w-11 rounded-full flex items-center justify-center">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 10.25C19.5 12.4062 18.7969 14.4219 17.5781 16.0156L23.5312 21.9688C24.1406 22.5312 24.1406 23.5156 23.5312 24.0781C22.9688 24.6875 21.9844 24.6875 21.4219 24.0781L15.4688 18.125C13.875 19.3438 11.8594 20 9.75 20C4.35938 20 0 15.6406 0 10.25C0 4.90625 4.35938 0.5 9.75 0.5C15.0938 0.5 19.5 4.90625 19.5 10.25ZM4.875 13.625C4.875 14.2812 5.34375 14.75 6 14.75C6.60938 14.75 7.125 14.2812 7.125 13.625V10.625C7.125 10.0156 6.60938 9.5 6 9.5C5.34375 9.5 4.875 10.0156 4.875 10.625V13.625ZM8.625 13.625C8.625 14.2812 9.09375 14.75 9.75 14.75C10.3594 14.75 10.875 14.2812 10.875 13.625V6.125C10.875 5.51562 10.3594 5 9.75 5C9.09375 5 8.625 5.51562 8.625 6.125V13.625ZM12.375 13.625C12.375 14.2812 12.8438 14.75 13.5 14.75C14.1094 14.75 14.625 14.2812 14.625 13.625V9.125C14.625 8.51562 14.1094 8 13.5 8C12.8438 8 12.375 8.51562 12.375 9.125V13.625Z" fill="#6D3EFF" />
            </svg>
          </div>
          <p class="font-bold text-2xl text-brand-purple-light">
            Paso 3
          </p>
          <p class="text-xl text-brand-gray90 text-balance">
            Analizamos al cliente
          </p>
        </div>

        <div class="bg-brand p-8 pb-12 rounded-3xl flex flex-col items-start gap-6">
          <div class="bg-white h-11 w-11 rounded-full flex items-center justify-center">
            <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.625 16.2969C27.2344 17.1406 27.0469 18.3125 26.1562 18.9219L19.7812 23.5625C18.9844 24.1719 17.9531 24.5 16.9219 24.5H0.703125C0.328125 24.5 0 24.1719 0 23.75V19.25C0 18.875 0.328125 18.5 0.703125 18.5L3.28125 18.5469L5.4375 16.7656C6.42188 15.9688 7.73438 15.5469 8.95312 15.5469H16.4531C17.3906 15.5469 18.0938 16.3438 17.9531 17.2812C17.8125 18.0312 17.1094 18.5469 16.4062 18.5469H12.7031C12.375 18.5469 12 18.875 12 19.2969C12 19.6719 12.3281 20.0469 12.7031 20.0469H18.375L24 15.875C24.8438 15.2656 26.0156 15.4531 26.625 16.2969ZM13.0781 8.70312C13.875 8.84375 14.5312 8.70312 14.5781 8.375C14.625 8.14062 14.6719 8.04688 13.1719 7.625L12.8438 7.53125C12 7.25 9.75 6.59375 10.125 4.29688C10.3594 3.17188 11.1562 2.42188 12.375 2.14062V1.625C12.375 1.01562 12.8438 0.5 13.5 0.5C14.1094 0.5 14.625 1.01562 14.625 1.625V2.1875C14.8594 2.23438 15.1875 2.32812 15.5156 2.42188C16.125 2.65625 16.4062 3.26562 16.2188 3.875C16.0312 4.48438 15.375 4.76562 14.8125 4.57812C14.3906 4.4375 14.1094 4.34375 13.875 4.29688C13.0781 4.20312 12.4219 4.34375 12.375 4.67188C12.3281 4.85938 12.2812 5 13.5 5.375L13.7344 5.42188C14.9531 5.79688 17.1562 6.40625 16.7812 8.75C16.5938 9.875 15.7969 10.625 14.625 10.9062V11.375C14.625 12.0312 14.1094 12.5 13.5 12.5C12.8438 12.5 12.375 12.0312 12.375 11.375V10.8125C11.9062 10.7188 11.4844 10.5781 11.0625 10.4375L10.8281 10.3438C10.2656 10.1562 9.98438 9.45312 10.1719 8.9375C10.3594 8.375 11.0156 8.04688 11.625 8.28125L11.8125 8.375C12.2344 8.51562 12.7031 8.65625 13.0781 8.70312Z" fill="#6D3EFF" />
            </svg>
          </div>
          <p class="font-bold text-2xl text-brand-purple-light">
            Paso 4
          </p>
          <p class="text-xl text-brand-gray90 text-balance">
            ¡Recibe tu comisión!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
