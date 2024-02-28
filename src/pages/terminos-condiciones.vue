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
  description: 'Términos y condiciones de Adelanta por Ziff'
})

const sections = [
  {
    id: 1,
    title: 'Términos y Condiciones Generales',
    content: 'A través del registro de usuario (el “Usuario”) en la plataforma localizada en hola@ziff.com.mx (la “Plataforma”), éste reconoce haber leído y estar de acuerdo con los Términos y Condiciones contenidos en dicha página web, así como someterse a las leyes y regulaciones aplicables. De igual manera, y una vez realizado el registro por el Usuario, el presente documento será vinculante tanto para dicho Usuario, como para Ziff. En caso de que el Usuario no acepte los Términos y Condiciones, no podrá continuar navegando y haciendo uso de la Plataforma. De igual manera, no podrá acceder a los servicios que Ziff ofrece a través de la Plataforma (los “Servicios”) ni de la información contenida en dicha Plataforma.'
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
    content: 'Con la finalidad de poder acceder a los Servicios que brinda Ziff a través de la Plataforma, el Usuario deberá completarlo con los datos personales y los datos personales sensibles que, según sea el caso, ahí se solicitan (los “Datos Personales”). El Usuario, independientemente de que el mismo sea Persona o Empresa, tendrá la obligación de actualizar los Datos Personales de tiempo en tiempo y en caso de que sea necesario. Ziff, asimismo, podrá utilizar diversos medios para identificar a sus Usuarios, en el entendido, sin embargo, que el Usuario entiende, acepta y está de acuerdo que Ziff no es ni será en ningún momento responsable de ninguna manera por la veracidad y certeza de los Datos Personales suministrados por dichos Usuarios. Los Usuarios aceptan, reconocen y garantizan, en cualquier caso, respecto de la legalidad, veracidad, exactitud, vigencia y autenticidad de los Datos Personales ingresados en la Plataforma. Asimismo, Ziff se reserva el derecho de solicitar algún comprobante y/o dato adicional a efecto de corroborar los Datos Personales ingresados por el Usuario en la Plataforma, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. Una vez realizado el registro correspondiente y habiendo ingresado los Datos Personales antes descritos, el Usuario accederá a su cuenta (la “Cuenta”) mediante el ingreso de su correo electrónico y contraseña elegida (la “Contraseña”). El Usuario se obliga a mantener la confidencialidad de su Contraseña, y acepta y entiende que la Cuenta es personal, única e intransferible. El Usuario no podrá contar con más de una Cuenta. En caso de que existan Cuentas que tengan Datos Personales idénticos o relacionados, Ziff podrá, de manera discrecional, cancelar, suspender o inhabilitar las mismas. El Usuario será responsable por todas las operaciones efectuadas en su Cuenta, pues el acceso a la misma está restringido por el ingreso y uso de su Contraseña, misma que debe ser del conocimiento exclusivo del Usuario. El Usuario reconoce que cualquier manifestación de consentimiento realizada en la Plataforma mediante el uso de su Cuenta y Contraseña tiene el carácter de una firma electrónica, conforme a lo previsto en los artículos 89 y siguientes del Código de Comercio. En virtud de lo anterior, Ziff actuará en todo momento como una Parte que Confía (según dicho término se define en el Código de Comercio) al momento de recibir cualquier Mensaje de Datos (según dicho término se define en el Código de Comercio) o instrucción por parte del Usuario a través de la Plataforma, cuando éste hubiere accedido a la misma mediante el uso de su Cuenta y Contraseña. El Usuario se obliga a notificar a Ziff en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su Cuenta, así como el ingreso por terceros no autorizados a la misma. También está prohibida la venta, cesión o transferencia de la Cuenta (incluyendo la reputación y calificaciones) bajo cualquier título. Ziff se reserva el derecho de rechazar cualquier solicitud de inscripción o de cancelar una inscripción previamente aceptada, sin que esté obligada a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento. En caso de que el Usuario introduzca en la Plataforma Datos Personales erróneos, deberá notificar a Ziff a través del correo electrónico hola@ziff.com.mx, solicitando la corrección que para tales efectos sea necesaria. '
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
  },
  {
    id: 7,
    title: 'Sanciones',
    content: 'Sin perjuicio de cualesquier otras medidas o acciones legales legales que decida ejercer Ziff, ésta tendrá el derecho de advertir, suspender en forma temporal y/o inhabilitar definitivamente, la Cuenta del Usuario o del potencial Usuario, así como aplicar una sanción que impacte negativamente en la reputación de dicho Usuario, en caso de que, de manera enunciativa más no limitativa, (i) se incumpla con alguna disposición legal o con cualquiera de las disposiciones y estipulaciones contenidas en los presentes Términos y Condiciones y demás políticas de Ziff; (ii) si el Usuario incumpliera con cualquiera de sus obligaciones como Usuario; (iii) si, a criterio de Ziff, el Usuario incurriera en conductas o actos dolosos o fraudulentos; (iv) si no pudiera verificarse la identidad del Usuario o cualquier información entregada por éste, o que dicha información fuere falsa o errónea; o (v) a juicio de Ziff, ésta entendiera que las publicaciones u otras acciones pueden ser causa de responsabilidad civil o penal para el Usuario.'
  },
  {
    id: 8,
    title: 'Responsabilidad',
    content: 'El Usuario reconoce y acepta que la utilización de la Plataforma es su responsabilidad, por lo que libera de toda responsabilidad a Ziff y a sus directores, consejeros, funcionarios, empleados, agentes y/o representantes (los “Funcionarios”) respecto de cualquier queja, multa, denuncia, demanda y/o acción por parte de cualquier autoridad gubernamental o tercero, derivado del uso negligente o inadecuado de la Plataforma. De igual manera, en caso de que Ziff o cualquiera de sus Funcionarios se viere obligado al pago de cualesquier multa, sanción, pena, indemnización o cualquier suma de dinero como consecuencia del uso negligente o inadecuado de la Plataforma por parte del Usuario, dicho Usuario se obliga a restituir a Ziff la totalidad de los gastos que por concepto de lo anterior se generen o se pudieran generar incluyendo pero no limitándose a gastos y costas. '
  },
  {
    id: 9,
    title: 'Fallos',
    content: 'Ziff no se responsabiliza por cualquier daño, perjuicio y/o pérdida de cualquier índole que sufra el Usuario por una falla en los sistemas de la Plataforma, sus servidores o Internet, en este mismo acto el Usuario reconoce y acepta lo mencionado anteriormente. De igual manera, Ziff tampoco será responsable por cualquier virus o software maligno que pudiera infectar el equipo del Usuario como consecuencia del acceso, uso o examen de la Plataforma o a raíz de cualquier transferencia de datos, archivos, imágenes, textos, o audio contenidos en el mismo, así como cualquier otra información enviada con el uso de medios electrónicos. Los Usuarios no podrán imputar responsabilidad alguna ni exigir indemnización por concepto alguno a Ziff, en virtud de daños o perjuicios resultantes de dificultades técnicas o fallas en los sistemas, la Plataforma o en Internet. Ziff no garantiza el acceso y uso continuado o ininterrumpido de la Plataforma. El sistema puede no estar disponible debido a dificultades técnicas o fallas de Internet, o por cualquier otra circunstancia ajena a Ziff, en cuyo caso se procurará restablecerlo con la mayor prontitud posible, sin que por ello pueda imputarse algún tipo de responsabilidad. Ziff no será responsable por ningún error u omisión del contenido en la Plataforma. Asimismo, Ziff no será responsable ni hace declaración alguna respecto de los sitios de cualesquiera terceros que no estén bajo control de Ziff a los que se pudiera acceder a través de vínculos contenidos en la Plataforma, del contenido desplegado en dichos sitios, ni de los productos y/o servicios ofrecidos bajo los mismos, en su caso. '
  },
  {
    id: 10,
    title: 'Verificación de Identidad',
    content: 'Los Datos Personales deberán ser actualizados periódicamente por los Usuarios a través de la Plataforma, con la finalidad de no generar problemas o dificultades para la verificación por parte de Ziff de dichos Usuarios. Ziff solicitará a los Usuarios comentarios y calificaciones acerca del sistema contenido en la Plataforma, los cuales serán de exclusiva responsabilidad de los Usuarios que para tales efectos los emitan. En virtud de que la información relativa a la identidad son Datos Personales, estos serán incluidos bajo exclusiva responsabilidad de los Usuarios. '
  },
  {
    id: 11,
    title: 'Contacto',
    content: 'Las comunicaciones que desee realizar el Usuario con Ziff en relación con los Servicios, se efectuarán únicamente por correo electrónico dirigido a hola@ziff.com.mx'
  },
  {
    id: 12,
    title: 'Información Crediticia',
    content: 'Una vez aceptados los Términos y Condiciones, (i) el Usuario declara bajo protesta de decir verdad que la totalidad de la información y los Datos Personales entregados a través de la Plataforma, son ciertos, veraces y precisos, por lo que en caso contrario, Ziff se reserva el derecho de rechazar dicha información y Datos Personales; (ii) el Usuario autoriza a Ziff para que, por conducto de cualesquiera de sus Funcionarios y/o las Personas Morales que Ziff designe para dicho fin (los “Terceros”), efectúe el  análisis y la revisión correspondiente acerca su comportamiento crediticio en las sociedades responsables de registros o bancos de datos personales que estime necesarias. Asimismo, el Usuario declara conocer la naturaleza y alcance de la información que solicitará Ziff a tales sociedades. Por lo anterior, el Usuario en este acto declara conocer y aceptar expresamente que el archivo electrónico y/o medio electrónico y/o mensaje de datos quede bajo propiedad de Ziff, y/o de cualquier sociedad responsable de registros o bancos de datos personales a quien solicite el servicio de información crediticia, para efectos de control y cumplimiento con la finalidad de que Ziff se encuentre en posibilidad de ofrecer los Servicios. '
  },
  {
    id: 13,
    title: 'Aceptación',
    content: 'El Usuario en este acto declara, reconoce y acepta haber leído por vía electrónica y comprendido el contenido íntegro de los Términos y Condiciones Generales, y que, una vez llevado a cabo su registro en la Plataforma, acepta irrevocablemente los Términos y Condiciones. Ziff archivará en la base de datos correspondiente lo anterior. '
  },
  {
    id: 14,
    title: 'Propiedad Intelectual',
    content: 'Los contenidos de la Plataforma, así como también los programas, bases de datos, redes o archivos que permiten al Usuario acceder y usar su Cuenta, diseños, logotipos, marcas registradas, códigos fuente, software, entre otros, así como los derechos de uso y explotación de los mismos, son de la titularidad y propiedad exclusiva de Ziff y se encuentran protegidos por la legislación en materia de propiedad intelectual e industrial y derechos de autor y por los tratados internacionales aplicables y vigentes en estas materias. El uso indebido, la reproducción total o parcial, la distribución, exhibición y en general, la explotación en cualquier forma de dichos contenidos, quedan prohibidos, salvo previa autorización expresa y por escrito por parte de Ziff. '
  },
  {
    id: 15,
    title: 'Indemnización',
    content: 'El Cliente y/o Usuario mantendrá indemne a Ziff, sus filiales, subsidiarias, empresas controladas y/o controladoras, directivos, administradores, representantes, funcionarios y empleados, por cualquier reclamo, demanda, denuncia o acción por parte de terceros por las actividades que estos realicen en la Plataforma o por el incumplimiento a los Términos y Condiciones Generales y demás políticas que se entienden incorporadas al presente instrumento o por la violación de cualesquiera leyes o derechos de terceros. Esta obligación de indemnización considera los honorarios de abogados en que incurra Ziff por este concepto. '
  },
  {
    id: 16,
    title: 'Comunicaciones',
    content: 'Ziff se reserva el derecho de enviar comunicaciones al Usuario que se relacionen con la prestación de los Servicios, que sean necesarias bajo los presentes Términos y Condiciones Generales y/o que contengan información promocional de Servicios ofrecidos por Ziff, lo cual consiente el Usuario al acceder a la Plataforma. En tal virtud, el Usuario autoriza a Ziff para enviar dichas comunicaciones, para los efectos previstos en el artículo 18 Bis de la Ley Federal de Protección al Consumidor. Ziff podrá enviar cualesquiera comunicaciones al Usuario por medio de Mensajes de Datos, a la dirección de correo electrónico proporcionada por el Usuario. '
  },
  {
    id: 17,
    title: 'Misceláneas',
    content: `Notificaciones: Ziff podrá notificar electrónicamente al Usuario a través del correo electrónico registrado por dicho Cliente en la Plataforma, o al que para tales efectos hubiere señalado al momento de suscribir los documentos correspondientes. El Cliente podrá notificar a Ziff mediante el envío de un correo electrónico dirigido a hola@ziff.com.mx . 
Cesión: El Cliente no podrá ceder ni transferir los Términos y Condiciones, en todo o en parte, sin el consentimiento previo y por escrito de Ziff. 
Divisibilidad: En caso de que cualquier disposición de los Términos y Condiciones Generales sea declarada ilegal, inexistente, nula, inválida o inexigible, ya sea en su totalidad o en parte por una autoridad o tribunal competente para ello, dicha disposición o parte de la misma, se considerará e interpretará que no forma parte de estos Términos y Condiciones, manteniendo el resto de las disposiciones la totalidad de su legalidad, validez, vigencia y exigibilidad. 
Integridad: Los presentes Términos y Condiciones Generales se considerarán como parte de todos los documentos que, en su caso, celebre el Usuario con Ziff. 
Modificaciones: Ziff podrá modificar los Términos y Condiciones Generales en cualquier momento. Dentro de los 5 (cinco) días siguientes a la publicación de las modificaciones introducidas a los Términos y Condiciones, el Usuario deberá notificar vía correo electrónico en caso de que no esté de acuerdo con las mismas. De ser así, el Usuario será inhabilitado de la Plataforma siempre que no tenga obligaciones pendientes de cumplir frente a Ziff o cualquiera de sus filiales o subsidiarias. Una vez vencido el plazo anterior, se considerará que el Usuario acepta los nuevos Términos y Condiciones. `
  },
  {
    id: 18,
    title: 'Jurisdicción; Ley Aplicable',
    content: 'Los presentes Términos y Condiciones se encuentran sujetos y regidos por las leyes vigentes en los Estados Unidos Mexicanos. Para cualquier controversia derivada o relacionada con los presentes Términos y Condiciones Generales, así como para la interpretación de los mismos, los Clientes y/o Usuarios se someten expresa e irrevocablemente a la jurisdicción de los tribunales competentes de la Ciudad de México, México. Asimismo, los Clientes y/o Usuarios renuncian expresa e irrevocablemente por este acto a cualquier otra jurisdicción a la que pudieren tener derecho por motivo de sus domicilios presentes o futuros o por cualquier otra razón. '
  }
]
</script>
