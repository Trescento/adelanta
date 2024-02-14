<template>
  <main class="bg-brand-gray90">
    <div class="container flex flex-col gap-8 py-24">
      <h1 class="text-5xl font-bold text-center">
        Términos y condiciones
      </h1>
      <TCSectionsItem
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        :title="section.title"
        :content="section.content"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  headerColor: 'gray90'
})
useSeoMeta({
  title: 'Términos y condiciones | Adelanta por Ziff',
  description: 'Entérate de toda la información del sector inmobiliario en México.'
})

const sections = [
  {
    id: 1,
    title: 'Términos y Condiciones Generales',
    content: 'A través del registro de usuario (el “Usuario”) en la plataforma localizada en legal@arrenda.mx (la “Plataforma”), éste reconoce haber leído y estar de acuerdo con los Términos y Condiciones contenidos en dicha página web, así como someterse a las leyes y regulaciones aplicables. De igual manera, y una vez realizado el registro por el Usuario, el presente documento será vinculante tanto para dicho Usuario, como para Ziff. En caso de que el Usuario no acepte los Términos y Condiciones, no podrá continuar navegando y haciendo uso de la Plataforma. De igual manera, no podrá acceder a los servicios que Ziff ofrece a través de la Plataforma (los “Servicios”) ni de la información contenida en dicha Plataforma.'
  },
  {
    id: 2,
    title: 'Personalidad y Capacidad Jurídica',
    content: 'Los Servicios únicamente podrán ser contratados por personas mayores de edad (las “Personas”) que tengan capacidad jurídica suficiente y capacidad de ejercicio. Con motivo de lo anterior, no podrán acceder a los Servicios ofrecidos por Ziff aquellas Personas incapaces ni aquellas que hayan sido suspendidos temporalmente o inhabilitados definitivamente, independientemente de que se hayan registrado en la Plataforma y sean por lo tanto Usuarios de Ziff. Para aquellos casos en los que el Usuario sea una persona moral (las “Empresas”), se entenderá que el representante legal de dicha Empresa, quien suscriba y acepte los Términos y Condiciones, cuenta con poderes y facultades suficientes para actuar en nombre y representación de la Empresa y/o Usuario, mismas que no le han sido modificadas, revocadas o limitadas de forma alguna al momento de aceptar dichos Términos y Condiciones, así como de obligar a la Empresa y/o Usuario a las disposiciones contenidas en este documento.'
  },
  {
    id: 3,
    title: 'Aceptación',
    content: 'El Usuario en este acto declara, reconoce y acepta haber leído por vía electrónica y comprendido el contenido íntegro de los Términos y Condiciones Generales, y que, una vez llevado a cabo su registro en la Plataforma, acepta irrevocablemente los Términos y Condiciones. Ziff archivará en la base de datos correspondiente una versión digital de lo anterior.'
  },
  {
    id: 4,
    title: 'Datos Personales',
    content: 'Con la finalidad de poder acceder a los Servicios que brinda Ziff a través de la Plataforma, el Usuario deberá completarlo con los datos personales y los datos personales sensibles que, según sea el caso, ahí se solicitan (los “Datos Personales”). El Usuario, independientemente de que el mismo sea Persona o Empresa, tendrá la obligación de actualizar los Datos Personales de tiempo en tiempo y en caso de que sea necesario. Ziff, asimismo, podrá utilizar diversos medios para identificar a sus Usuarios, en el entendido, sin embargo, que el Usuario entiende, acepta y está de acuerdo que Ziff no es ni será en ningún momento responsable de ninguna manera por la veracidad y certeza de los Datos Personales suministrados por dichos Usuarios. Los Usuarios aceptan, reconocen y garantizan, en cualquier caso, respecto de la legalidad, veracidad, exactitud, vigencia y autenticidad de los Datos Personales ingresados en la Plataforma. Asimismo, Ziff se reserva el derecho de solicitar algún comprobante y/o dato adicional a efecto de corroborar los Datos Personales ingresados por el Usuario en la Plataforma, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. Una vez realizado el registro correspondiente y habiendo ingresado los Datos Personales antes descritos, el Usuario accederá a su cuenta (la “Cuenta”) mediante el ingreso de su correo electrónico y contraseña elegida (la “Contraseña”). El Usuario se obliga a mantener la confidencialidad de su Contraseña, y acepta y entiende que la Cuenta es personal, única e intransferible. El Usuario no podrá contar con más de una Cuenta. En caso de que existan Cuentas que tengan Datos Personales idénticos o relacionados, Ziff podrá, de manera discrecional, cancelar, suspender o inhabilitar las mismas. El Usuario será responsable por todas las operaciones efectuadas en su Cuenta, pues el acceso a la misma está restringido por el ingreso y uso de su Contraseña, misma que debe ser del conocimiento exclusivo del Usuario. El Usuario reconoce que cualquier manifestación de consentimiento realizada en la Plataforma mediante el uso de su Cuenta y Contraseña tiene el carácter de una firma electrónica, conforme a lo previsto en los artículos 89 y siguientes del Código de Comercio. En virtud de lo anterior, Ziff actuará en todo momento como una Parte que Confía (según dicho término se define en el Código de Comercio) al momento de recibir cualquier Mensaje de Datos (según dicho término se define en el Código de Comercio) o instrucción por parte del Usuario a través de la Plataforma, cuando éste hubiere accedido a la misma mediante el uso de su Cuenta y Contraseña. El Usuario se obliga a notificar a Ziff en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su Cuenta, así como el ingreso por terceros no autorizados a la misma. También está prohibida la venta, cesión o transferencia de la Cuenta (incluyendo la reputación y calificaciones) bajo cualquier título. Ziff se reserva el derecho de rechazar cualquier solicitud de inscripción o de cancelar una inscripción previamente aceptada, sin que esté obligada a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento. En caso de que el Usuario introduzca en la Plataforma Datos Personales erróneos, deberá notificar a Ziff a través del correo electrónico legal@arrenda.mx, solicitando la corrección que para tales efectos sea necesaria. '
  },
  {
    id: 5,
    title: 'Aviso de Privacidad',
    content: 'Para utilizar los Servicios ofrecidos por Ziff en la Plataforma, el Usuario deberá proporcionar Datos Personales. Dichos Datos Personales son tratados, procesados y almacenados en servidores o medios magnéticos que cuentan con los más altos estándares de seguridad y de protección, tanto física como digitalmente. Para más información, favor de revisar el Aviso de Privacidad de Ziff.'
  },
  {
    id: 6,
    title: 'Transgresión a la Plataforma',
    content: 'Queda expresamente prohibida cualquier acción o uso de dispositivo, software, u otro medio tendiente a interferir tanto en las actividades y operación de Ziff, como en su base de datos. Cualquier acción u omisión que conlleve la intromisión, tentativa o actividad violatoria o contraria a las leyes en materia de propiedad industrial e intelectual o de derechos de autor y/o a las prohibiciones estipuladas en estos Términos y Condiciones por parte del Usuario o de un Usuario potencial, lo hará responsable y Ziff ejercerá las acciones legales pertinentes, sometiéndose también a las sanciones previstas por estos Términos y Condiciones, obligándose a pagar una indemnización por los daños y perjuicios ocasionados. El Usuario o el Usuario potencial no podrán (i) retirar cualquier material de derechos de autor, marca registrada u otra nota de propiedad de cualquier parte de los Servicios; (ii) reproducir, modificar, y/o preparar obras derivadas sobre los Servicios, distribuir, licenciar, arrendar, revender, transferir, exhibir públicamente, presentar públicamente, transmitir, retransmitir o explotar de otra forma los Servicios; (iii) descompilar, realizar ingeniería inversa o desmontar los Servicios, excepto como se permita por la ley aplicable; (iv) enlazar, reflejar o enmarcar cualquier parte de los Servicios; (v) causar o lanzar cualquier programa o script con el objeto de extraer, indexar, analizar o de otro modo realizar prospección de datos de cualquier parte de los Servicios o sobrecargar o bloquear indebidamente la operación y/o funcionalidad de cualquier aspecto de los Servicios; o (vi) intentar obtener un acceso no autorizado o dañar cualquier aspecto de los Servicios o sus sistemas o redes relacionados.'
  }, {
    id: 7,
    title: 'Sanciones',
    content: 'Sin perjuicio de cualesquier otras medidas o acciones legales legales que decida ejercer Ziff, ésta tendrá el derecho de advertir, suspender en forma temporal y/o inhabilitar definitivamente, la Cuenta del Usuario o del potencial Usuario, así como aplicar una sanción que impacte negativamente en la reputación de dicho Usuario, en caso de que, de manera enunciativa más no limitativa, (i) se incumpla con alguna disposición legal o con cualquiera de las disposiciones y estipulaciones contenidas en los presentes Términos y Condiciones y demás políticas de Ziff; (ii) si el Usuario incumpliera con cualquiera de sus obligaciones como Usuario; (iii) si, a criterio de Ziff, el Usuario incurriera en conductas o actos dolosos o fraudulentos; (iv) si no pudiera verificarse la identidad del Usuario o cualquier información entregada por éste, o que dicha información fuere falsa o errónea; o (v) a juicio de Ziff, ésta entendiera que las publicaciones u otras acciones pueden ser causa de responsabilidad civil o penal para el Usuario.'
  }
]
</script>
