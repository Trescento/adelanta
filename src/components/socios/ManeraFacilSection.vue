<template>
  <section class="my-24 flex flex-col md:container gap-16">
    <h2 class="max-w-2xl text-[2.5rem] text-center font-bold text-balance mx-auto container">
      La manera más fácil de reactivar tu cartera de clientes
    </h2>
    <ImageInfo img="/how-nuestros-productos.jpeg" type="primary">
      <p class="font-bold text-[2rem] max-w-lg">
        Refiere a través de Whatsapp o nuestra plataforma de Socios
      </p>
      <CommonBaseButton type="white">
        <span>Comenzar a referir</span>
        <CommonArrowIcon />
      </CommonBaseButton>
    </ImageInfo>
    <ImageInfo img="/images/generic1.jpg" type="secondary" img-left>
      <p class="font-bold text-[2rem] max-w-lg">
        Nosotros nos encargamos de la venta
      </p>
      <CommonBaseButton type="secondary">
        <span>Comenzar a referir</span>
        <CommonArrowIcon type="primary" />
      </CommonBaseButton>
    </ImageInfo>
    <div class="flex justify-center">
      <CommonBaseButton>
        <span>Quiero ser socio</span>
        <CommonArrowIcon />
      </CommonBaseButton>
    </div>
  </section>
</template>
