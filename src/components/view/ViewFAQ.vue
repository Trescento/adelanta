<template>
  <section class="bg-brand-gray90">
    <div class="md:hidden relative">
      <select class="rounded-none w-full bg-brand-purple-light text-brand pl-6 pr-16 font-bold text-lg py-6 no-select-icon" @change="handleChange">
        <option v-for="topic in topics" :key="topic.name">
          {{ topic.name }}
        </option>
      </select>
      <div class="absolute bg-brand rounded-full h-8 w-8 grid place-content-center right-4 top-1/2 -translate-y-1/2">
        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 1L8 8L1 0.999999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="container grid md:grid-cols-12 gap-16 py-24">
      <div class="md:col-span-5 flex flex-col gap-6">
        <h1 class="font-bold text-[2.5rem]">
          Preguntas frecuentes
        </h1>
        <p class="text-lg text-balance">
          Nos hace muy felices poder ayudarte. Esperamos que estas preguntas resuelvan tus dudas.
        </p>
        <div class="hidden md:flex flex-col gap-2">
          <FaqTopicButton
            v-for="topic in topics"
            :key="topic.name"
            :active="topic.name === selectedTopic.name"
            @click="selectedTopic = topic"
          >
            {{ topic.name }}
          </FaqTopicButton>
        </div>
      </div>
      <div class="md:col-span-7 flex flex-col gap-4">
        <h2 class="text-brand text-[2rem] font-bold">
          {{ selectedTopic.name }}
        </h2>
        <p class="text-lg">
          {{ selectedTopic.description }}
        </p>
        <div
          v-for="question in selectedTopic.questions"
          :key="question.question"
          class="collapse collapse-arrow bg-white"
        >
          <input type="radio" name="my-accordion-2" class="peer">
          <div class="collapse-title text-xl font-medium p-8">
            <p class="text-2xl font-bold peer-checked:text-brand">
              {{ question.question }}
            </p>
          </div>
          <div class="collapse-content">
            <p class="text-lg px-5 whitespace-pre-wrap">
              {{ question.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Question {
  question: string
  answer: string
}
interface Topic {
  name: string
  description?: string
  questions: Question[]
}

const topics: Topic[] = [
  {
    name: 'Acerca de Ziff',
    questions: [
      {
        question: '¿Qué es Ziff?',
        answer: 'Somos una financiera mexicana que brinda opciones de liquidez a los dueños de propiedades comerciales en renta a través del adelanto de sus rentas, y a los emprendedores que tienen cuentas por cobrar de ingresos recurrentes.'
      },
      {
        question: '¿Qué servicios brindamos en Ziff?',
        answer: 'Nuestro producto principal lleva el nombre de Adelanta por Ziff, brindándote la posibilidad de solicitar un adelanto de hasta 36 meses en el pago de tus cuentas por cobrar, conforme a los términos del contrato vigente.'
      },
      {
        question: '¿Qué no es Ziff?',
        answer: 'Ziff no es un Banco, ni una inmobiliaria que compre y venda bienes inmuebles, tampoco nos dedicamos a rentar y/o gestionar los inmuebles de los propietarios.'
      },
      {
        question: '¿Por qué elegir Ziff en vez de otros tipos de financiamiento?',
        answer: 'Ziff ofrece soluciones financieras a propietarios de inmuebles que cuenten con contratos de arrendamiento vigentes sin necesidad de dejar alguna garantía o hipotecar algún activo. El proceso de solicitud es muy sencillo y garantizamos tu adelanto en menos de 72 horas a partir de la revisión y aprobación de documentos.'
      },
      {
        question: '¿Cuál es la zona de cobertura?',
        answer: 'Dentro de nuestra cobertura está contemplada toda la República Méxicana.'
      },
      {
        question: '¿Cómo puedo contactar a Adelanta por Ziff?',
        answer: `Tenemos diversos medios para que nos puedas contactar de acuerdo al que utilices preferentemente:
Por correo electrónico hola@ziff.com.mx
Por whatsapp +52 55 7068 9383`
      }
    ]
  },
  {
    name: 'Productos para propietarios: Adelanta por Ziff',
    description: 'En esta sección encontrarás toda la información necesaria sobre los productos que ofrecemos para propietarios.',

    questions: [
      {
        question: '¿Qué es Adelanta por Ziff?',
        answer: 'Adelanta por Ziff es una opción de financiamiento para propietarios de inmuebles que permite cobrar por adelantado hasta 36 meses de renta de cualquier tipo de inmueble comercial e industrial que cuente con contrato de arrendamiento vigente.'
      },
      {
        question: '¿Cómo funciona?',
        answer: `Para solicitar tu adelanto de rentas:
- Regístrate en Adelanta por Ziff y obtén tu preaprobación en 2 minutos.
- Continúa con tu solicitud y sube tus documentos.
- Verificamos y aprobamos tu solicitud.
- Firmas tu contrato.
- Recibes tu adelanto.
- Tu inquilino o deudor paga el adelanto a Ziff.`
      },
      {
        question: '¿Cómo funciona el esquema de comisión?',
        answer: 'Adelanta de Ziff  sólo requiere el pago de una Comisión Única que varía en función de la duración y riesgo de la operación financiera, según lo determine nuestro equipo de suscripción.'
      }
    ]
  },
  {
    name: 'Requisitos para solicitar un adelanto',
    description: 'Es importante que conozcas los requisitos necesarios al momento de solicitar un Adelanto, en esta sección te lo explicamos.',
    questions: [
      {
        question: '¿Qué documentos necesito para iniciar mi solicitud?',
        answer: `Personas morales:
Acta constitutiva de tu organización.
Último 2 años de estado financieros.
Los tres últimos estados de cuenta bancarios de tu organización.
Declaración anual emitida por el SAT.
Constancia de situación fiscal.
Contrato para financiar vigente
Comprobante de propiedad, si buscas adelanto de rentas.
INE y pasaporte de representante legal.`
      },
      {
        question: '¿Cuáles son los requisitos para solicitar un Adelanto?',
        answer: `Ser mayor de edad.
Ser representante legal del negocio que buscas financiar su contrato.
Ser dueño de la propiedad en renta, si buscas adelanto de rentas.
Tener un contrato válido, legal y vigente.
Que la propiedad es de uso comercial o industrial y esté dentro de la República Mexicana.
Tener una cuenta de banco en México
No tener antecedentes por delitos contra el patrimonio.
Aceptar nuestros Términos y Condiciones, así como firmar los documentos legales correspondientes.`
      },
      {
        question: '¿Necesito aval para pedir mi adelanto?',
        answer: 'El adelanto de rentas usualmente no requiere aval, dependerá de la evaluación financiera de tu propiedad y comportamiento crediticio.'
      },
      {
        question: '¿Puedo pedir el adelanto de más de un inmueble en renta?',
        answer: 'Sí, pero deberás realizar una solicitud individual para cada inmueble.'
      },
      {
        question: '¿Revisan Buró de Crédito?',
        answer: 'Si, Ziff, a través de un tercero, realiza la consulta de tu buró de crédito, sin embargo, esto no es determinante para la aprobación del adelanto.'
      },
      {
        question: '¿Mi inmueble queda en garantía?',
        answer: 'No, nuestro modelo estándar no contempla dejar garantías hipotecarias. En algunos casos, cuando no podamos otorgar financiamiento, le brindaremos la opción de dejar una propiedad en garantía.'
      },
      {
        question: '¿Puedo renovar mi contrato con Ziff?',
        answer: 'Podrás volver a solicitar un financiamiento con nosotros las veces que quieras, para las propiedades que quieras, siempre y cuando vuelvas a realizar el proceso en nuestra plataforma.'
      },
      {
        question: '¿Me pueden adelantar rentas si es un local u oficina?',
        answer: 'Sí, adelantamos las rentas de inmuebles comerciales, oficinas, naves industriales o terrenos.'
      }
    ]
  },
  {
    name: '¿Cómo se paga?',
    description: 'En esta sección te informamos todo respecto a los pagos que se deberán cubrir derivados al Adelantado solicitado.',

    questions: [
      {
        question: '¿Qué días son los que se debe depositar a la cuenta de Ziff?',
        answer: 'Los periodos de pago a Ziff son los mismos que están establecidos en tu contrato que buscas financiamiento, usualmente, entre el primero y quinto día del mes.'
      },
      {
        question: 'Si pido mi adelanto de rentas, ¿Quién paga yo o mi cliente?',
        answer: 'Con la finalidad de hacer el proceso mucho más eficiente, el pago deberá ser depositado directamente por el deudor (el inquilino) a la cuenta bancaria que le indique Ziff.'
      },
      {
        question: '¿Cuáles son los métodos de pago?',
        answer: 'Por el momento sólo contamos con pago a través de transferencia electrónica a la cuenta de Ziff especificada en tu contrato de adelanto de rentas. Si el método de pago llegará a cambiar, te avisaremos con tiempo de anticipación.'
      },
      {
        question: '¿Mi cliente debe de ser notificado de que solicite un adelanto?',
        answer: 'Si, será notificado de la cesión de derechos así como toda la información necesaria para que pueda cumplir con los pagos.'
      },
      {
        question: '¿Hay pago de interés por el atraso de un pago?',
        answer: 'Si, existe un interés moratorio sobre el monto total del financiamiento adeudado.'
      },
      {
        question: '¿Afecta que mi cliente no pague a tiempo?',
        answer: 'Sí afectará directamente en tu deuda con Ziff, ya que si no se paga en tiempo y forma comienzan a correr los intereses moratorios, por lo que se te notificará si no se ha recibido el pago del inquilino/deudor durante los primeros cinco días. Como beneficiario del adelanto, usted es responsable de garantizar que se cumplan los pagos.'
      },
      {
        question: '¿Mi historial crediticio se verá afectado si el inquilino no hace los pagos a tiempo?',
        answer: 'Es importante que evites dar una mala impresión a las compañías que te pueden ofrecer financiamiento. Por este motivo es vital que se hagan los pagos en tiempo y forma. Recuerda que una mala referencia te puede llegar a impedir el acceso a nuevos créditos o contratos de arrendamiento en cualquier institución.'
      },
      {
        question: 'Yo como propietario, ¿puedo liquidar el total de mi adelanto de rentas antes de la fecha establecida o debe ser mi inquilino quien lo haga?',
        answer: 'Sí, puedes liquidar el total del adelanto en cualquier momento. Sólo debes comunicarte previamente con un asesor de Ziff.'
      },
      {
        question: '¿Qué pasa si en el inter de mi adelanto fallezco?',
        answer: 'Sabemos que son sucesos inesperados, atenderemos el caso en concreto basado en la información del contrato que cuentas. Para más información escribenos al correo hola@ziff.com.mx.'
      },
      {
        question: '¿Puedo tener en venta mi inmueble durante el plazo de la deuda que tengo con ustedes?',
        answer: 'Uno de los requisitos indispensables para obtener el adelanto de rentas con nosotros es contar con un contrato de arrendamiento vigente, válido y legal. Es decir, podrás acceder a nuestros servicios siempre y cuando tu propiedad se encuentre en arrendamiento.'
      }
    ]
  },
  {
    name: 'Proceso de aprobación',
    description: 'En esta sección encontrarás información complementaria y de interés sobre el proceso de solicitud del Adelanto.',
    questions: [
      {
        question: '¿Cómo y cuándo se firma el contrato?',
        answer: 'El contrato se firma en el momento en que la solicitud queda aprobada y la firma se lleva a cabo de forma electrónica o a mano.'
      },
      {
        question: 'Mis documentos no han sido validados, ¿Qué hago?',
        answer: 'Una vez que tu envías tus documentos para validar tu solicitud, nuestros especialistas se encargan de revisarlos con extremo cuidado. El horario de operación que actualmente tienen estos especialistas es de lunes a viernes de 9:00 a 18:00 horas (excepto días feriados por ley).'
      },
      {
        question: '¿Dónde reviso el estatus de mi proceso de aprobación?',
        answer: 'El estatus de tu solicitud lo podrás revisar directamente en el portal de Ziff, ingresando a tu cuenta.'
      },
      {
        question: '¿En qué se basan para aprobar mi solicitud?',
        answer: 'En que la documentación enviada a Ziff sea fidedigna y en contar con un buen historial de crédito.'
      },
      {
        question: '¿Qué otra documentación oficial puedo aportar que no sea el INE?',
        answer: 'Pasaporte vigente y/o Cédula profesional con fotografía.'
      },
      {
        question: '¿Se necesita título de propiedad?',
        answer: 'Sí, es importante que sepas que únicamente el propietario legal del inmueble es quien puede acceder a nuestros servicios de adelanto de rentas. Si no eres el propietario legal del inmueble y pretendes obtener un beneficio de nuestros servicios, es probable que enfrentes consecuencias legales.'
      },
      {
        question: '¿Cuáles son los requisitos a considerar para que mi documentación sea aceptada?',
        answer: 'Para que tu solicitud de financiamiento sea aceptada, tomamos distintos factores en cuenta cómo lo son tu historial en buró de crédito, tus ingresos, tu situación ante autoridades fiscales, tus datos personales y los del inmueble que se encuentra en arrendamiento, así como tus antecedentes.'
      }
    ]
  },
  {
    name: 'Depósito de tu adelanto',
    description: 'Aquí podrás encontrar información importante referente al depósito de tu adelanto solicitado una vez aprobado.',
    questions: [
      {
        question: '¿Cómo recibo el pago de mi adelanto?',
        answer: 'Esté lo recibes en la cuenta bancaria mexicana que deberás agregar a tu cuenta desde nuestro portal.'
      },
      {
        question: '¿Cuánto tarda mi dinero en llegar?',
        answer: 'El dinero llegará a tu cuenta una vez aprobada tu solicitud y validando tu cuenta en un tiempo no mayor a 72 horas naturales, siempre y cuando se haya cumplido todos los requisitos.'
      },
      {
        question: '¿Puedo recibir el adelanto de mis rentas en una cuenta que no esté a mi nombre?',
        answer: 'No, el titular es el que debe de recibir su pago dentro de una cuenta propia.'
      },
      {
        question: 'Han pasado 24 horas y no he recibido el dinero, ¿qué hago?',
        answer: 'Será importante validar que la cuenta proporcionada sea correcta y que sea día hábil para hacer el pago.'
      }
    ]
  },
  {
    name: 'Inquilinos',
    questions: [
      {
        question: 'Se me notificó que mi arrendador solicitó el servicio del adelanto de sus rentas, ¿Mi contrato ahora será con Ziff?',
        answer: 'No, tu contrato de arrendamiento es el mismo que firmaste con tu arrendador, lo único que cambia es que ahora podrás depositar el pago de tu renta cada mes a la cuenta bancaria proporcionada por arrenda. Esté lo recibes en la cuenta bancaria mexicana que deberás agregar a tu cuenta desde nuestro portal.'
      },
      {
        question: '¿Debo firmar algún contrato con ustedes?',
        answer: 'No, si eres inquilino de un bien inmueble que es sujeto de una relación jurídica de Ziff con tu arrendador, no hay obligación para el inquilino de firmar ningún tipo de documentación. Se te hará llegar una notificación con toda la información correspondiente a los pagos que deberás cubrir.'
      },
      {
        question: '¿Qué días son los que debo depositar a la cuenta de Ziff?',
        answer: 'Los periodos de pago a Ziff son los mismos que están establecidos en tu contrato de arrendamiento con tu inquilino.'
      },
      {
        question: '¿Cómo sé por cuánto tiempo debo depositar a la cuenta de Ziff?',
        answer: 'En el correo de notificación que te enviamos aparecerá toda la información que necesitas saber sobre el pago de tu renta.'
      },
      {
        question: '¿Se me emite algún comprobante del pago y cuál sería?',
        answer: 'El comprobante de pago, tu recibo de renta y cualquier otra documentación que haya sido pactada con tu arrendador, seguirá siendo responsabilidad de éste el proporcionarlo.'
      },
      {
        question: '¿Cómo me puedo asegurar de que el pago se recibió exitosamente?',
        answer: 'Si realizaste el pago en tiempo y forma, verificando que los datos fueran exactos y correctos, tu pago por transferencia probablemente fue exitoso. Si hubiese algún problema, nos contactaremos con tu arrendador. Te recomendamos guardar todos tus comprobantes de pago.'
      },
      {
        question: '¿En qué horario puedo hacer mi pago?',
        answer: 'El pago se puede realizar las 24 horas del día, si tu banco así lo permite.'
      },
      {
        question: '¿Ustedes le dan aviso al arrendador sobre los pagos realizados?',
        answer: 'El arrendador tiene acceso a toda la información desde su cuenta con nosotros.'
      },
      {
        question: '¿Qué pasa si no estoy de acuerdo en realizar el pago a Adelanta por Ziff?',
        answer: 'Realizar el pago de tu renta directamente con nosotros no cambia nada ¡tu pago sigue siendo válido! Si tienes cualquier duda o pregunta te aconsejamos acercarte con tu arrendador.'
      },
      {
        question: '¿Qué pasa si un mes se me complica realizar el pago?',
        answer: 'En este caso de un pago demorado se generan intereses moratorios, por lo que para evitar cargos adicionales es importante cubrir cada pago mensual en tiempo y forma.'
      },
      {
        question: '¿Cómo me afecta el no depositar en tiempo la renta?',
        answer: 'Hacer el pago de tus rentas en tiempo y forma es una obligación contemplada en tu contrato de arrendamiento.'
      },
      {
        question: 'Si yo facturo, ¿quién me entrega mi factura Ziff o mi arrendador?',
        answer: 'En caso de requerir factura, deberás hablar con tu arrendador ya que él es el responsable de emitir este documento a tu favor.'
      },
      {
        question: '¿Si en mi contrato incluye el pago de renta con mantenimiento, Ziff paga el mantenimiento?',
        answer: 'Si en tu contrato de arrendamiento se incluye el pago del mantenimiento con la renta, tendrás que depositar a Ziff únicamente el monto que corresponde a la renta del inmueble; el pago del mantenimiento podrás hacerlo directo a la administración o con tu casero. Te invitamos a mantener los canales de comunicación abiertos con tu arrendador para poder encontrar una dinámica que les funcione a ambos.'
      },
      {
        question: '¿Puedo depositarle a Ziff desde una cuenta que no sea propia o en un oxxo?',
        answer: 'Puedes hacer el pago de tu renta como lo prefieras siempre y cuando sea a través de una transferencia electrónica bancaria y cuente con los datos correspondientes tales como número de folio.'
      },
      {
        question: '¿Aceptan transferencias internacionales?',
        answer: 'No, todos los pagos deberán realizarse desde una cuenta bancaria mexicana.'
      },
      {
        question: '¿Qué pasa si el arrendador que me renta el inmueble fallece?, ¿Yo sigo cubriendo la deuda?',
        answer: 'Deberás seguir cubriendo el pago de tus rentas por el período acordado con el arrendador. Si tienes alguna duda puedes contactarnos en el correo hola@ziff.com.mx.'
      }
    ]
  }

]

const selectedTopic = useState<Topic>('faq-topic', () => topics[0])

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const sTopic = topics.find(topic => topic.name === target.value)
  if (sTopic !== undefined) {
    selectedTopic.value = sTopic
  }
}
</script>
