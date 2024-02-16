<template>
  <section class="my-24 flex flex-col container gap-16">
    <h2 class="max-w-2xl text-[2.5rem] text-center font-bold text-balance mx-auto container">
      La manera más fácil de reactivar tu cartera de clientes
    </h2>
    <ImageInfo img="/how-nuestros-productos.jpeg" type="primary">
      <p class="font-bold text-[1.5rem] sm:text-[2rem] max-w-lg">
        Refiere a través de Whatsapp o nuestra plataforma de Socios
      </p>
      <CommonBaseButton type="white" as-anchor href="https://api.whatsapp.com/message/LCGOMAOTKZM4E1?autoload=1&app_absent=0&utm_source=hs_email" target="_blank">
        <span>Comenzar a referir</span>
        <CommonArrowIcon />
      </CommonBaseButton>
    </ImageInfo>
    <ImageInfo img="/images/generic1.jpg" type="secondary" img-left>
      <p class="font-bold text-[1.5rem] sm:text-[2rem] max-w-lg">
        Nosotros nos encargamos de la venta
      </p>
      <CommonBaseButton type="secondary" as-anchor href="https://api.whatsapp.com/message/LCGOMAOTKZM4E1?autoload=1&app_absent=0&utm_source=hs_email" target="_blank">
        <span>Comenzar a referir</span>
        <CommonArrowIcon type="primary" />
      </CommonBaseButton>
    </ImageInfo>
    <div class="flex justify-center">
      <CommonBaseButton as-anchor href="https://api.whatsapp.com/message/LCGOMAOTKZM4E1?autoload=1&app_absent=0&utm_source=hs_email" target="_blank">
        <span>Quiero ser socio</span>
        <CommonArrowIcon />
      </CommonBaseButton>
    </div>
  </section>
</template>
