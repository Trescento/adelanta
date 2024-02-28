<template>
  <section class="container my-24 max-w-8xl">
    <div class="relative grid grid-cols-1 p-10 overflow-hidden md:grid-cols-2 bg-metallic rounded-3xl pb-14">
      <div class="absolute top-0 right-0 rotate-180 md:rotate-0 md:top-auto md:right-auto md:bottom-0 md:left-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="348" height="348" viewBox="0 0 506 380" fill="none">
          <g filter="url(#filter0_f_290_763)">
            <path d="M-42 300C-42 244.772 2.77153 200 58 200H206C261.228 200 306 244.772 306 300V448C306 503.228 261.228 548 206 548H58C2.77153 548 -42 503.228 -42 448V300Z" fill="url(#paint0_linear_290_763)" />
          </g>
          <defs>
            <filter
              id="filter0_f_290_763"
              x="-242"
              y="0"
              width="748"
              height="748"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_290_763" />
            </filter>
            <linearGradient
              id="paint0_linear_290_763"
              x1="132"
              y1="200"
              x2="132"
              y2="548"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#6D3EFF" stop-opacity="0.01" />
              <stop offset="1" stop-color="#D3C5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p class="text-brand text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold text-balance mb-8">
        No te pierdas ninguna novedad: <br><span class="text-brand-black">suscríbete a nuestro boletín informativo.</span>
      </p>
      <div>
        <p class="mb-8 text-lg">
          Suscríbete a nuestro boletín para recibir noticias, ofertas y contenido exclusivo.
        </p>
        <div class="flex flex-col gap-4">
          <div>
            <label for="name">Nombre</label>
            <input id="name" type="text" class="w-full p-3 mt-2 rounded-lg" placeholder="Entra tu nombre">
          </div>
          <div>
            <label for="last-name">Apellido</label>
            <input id="last-name" type="text" class="w-full p-3 mt-2 rounded-lg" placeholder="Entra tu apellido">
          </div>
          <div>
            <label for="email">Correo electrónico</label>
            <input id="email" type="email" class="w-full p-3 mt-2 rounded-lg" placeholder="Entra tu correo electrónico">
          </div>
          <!-- Checkbox -->
          <div class="flex items-center gap-2">
            <input id="terms" type="checkbox" class="w-6 h-6 rounded-lg accent-brand">
            <label for="terms" class="text-sm leading-[1.125rem] text-[#5A576D]">He leído, entiendo y acepto los términos del <a class="text-brand hover:underline" href="/aviso-de-privacidad">Aviso de Privacidad</a>.</label>
          </div>
        </div>
        <CommonBaseButton class="flex justify-between w-full mt-6">
          <span class="text-lg font-semibold">Enviar</span>
          <CommonArrowIcon />
        </CommonBaseButton>
      </div>
    </div>
  </section>
</template>
