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
          En esta sección encontrarás información general sobre Arrenda.
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
            <p class="text-lg px-5">
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
  questions: Question[]
}

const topics: Topic[] = [
  {
    name: 'Acerca de Ziff',
    questions: [
      {
        question: '¿Qué es Ziff?',
        answer: 'Ziff es una plataforma de arrendamiento que ofrece soluciones para propietarios e inquilinos.'
      },
      {
        question: '¿Qué servicios brindamos en Ziff?',
        answer: 'En Ziff ofrecemos servicios de arrendamiento, administración de propiedades y garantías de arrendamiento.'
      },
      {
        question: 'Qué no es Ziff?',
        answer: 'Ziff no es una inmobiliaria, ni una empresa de bienes raíces. Ziff es una plataforma de tecnología que facilita el arrendamiento de propiedades.'
      },
      {
        question: 'Por qué elegir Arrenda en vez de otros tipos de financiamiento?',
        answer: 'Arrenda es una solución de financiamiento que no requiere de garantías hipotecarias, lo que permite a los propietarios obtener liquidez inmediata.'
      },
      {
        question: '¿Cuál es la zona de cobertura?',
        answer: 'Actualmente, Arrenda opera en la Ciudad de México y el Estado de México.'
      },
      {
        question: '¿Cómo puedo contactar a Arrenda?',
        answer: 'Puedes contactarnos a través de nuestro chat en línea, o enviándonos un correo electrónico a info@ziff.com.mx'
      }
    ]
  },
  {
    name: 'Productos para propietarios: Adelanta de Arrenda',
    questions: [
      {
        question: '¿Qué es Adelanta de Arrenda?',
        answer: 'Adelanta de Arrenda es un producto financiero que permite a los propietarios recibir por adelantado el pago de rentas futuras de sus inmuebles, mejorando su flujo de efectivo.'
      },
      {
        question: 'Beneficios de Adelanta de Arrenda',
        answer: 'Los principales beneficios incluyen liquidez inmediata, sin necesidad de esperar el pago mensual de rentas, y sin la necesidad de garantías hipotecarias o avales.'
      }
    ]
  },
  {
    name: 'Requisitos de Adelanta de Arrenda',
    questions: [
      {
        question: '¿Cuáles son los requisitos para acceder a Adelanta de Arrenda?',
        answer: 'Los requisitos incluyen ser propietario de un inmueble en la zona de cobertura, tener un contrato de arrendamiento vigente, y pasar una verificación de crédito y antecedentes del inmueble.'
      }
    ]
  },
  {
    name: '¿Cómo se paga?',
    questions: [
      {
        question: '¿Cómo se realiza el pago del adelanto de rentas?',
        answer: 'El pago se realiza mediante transferencia bancaria directa al propietario, una vez aprobada la solicitud y firmado el acuerdo de adelanto de rentas.'
      }
    ]
  },
  {
    name: 'Proceso de aprobación',
    questions: [
      {
        question: '¿Cuál es el proceso de aprobación para Adelanta de Arrenda?',
        answer: 'El proceso incluye la solicitud en línea, revisión de documentos del inmueble y del propietario, verificación de crédito, y la firma del acuerdo de adelanto.'
      }
    ]
  },
  {
    name: 'Depósito del adelanto de rentas',
    questions: [
      {
        question: '¿Cuánto tiempo toma recibir el depósito del adelanto de rentas?',
        answer: 'Una vez aprobada la solicitud y firmado el acuerdo, el depósito se realiza en un plazo de 48 a 72 horas hábiles.'
      }
    ]
  },
  {
    name: 'Inquilinos',
    questions: [
      {
        question: '¿Cómo afecta Adelanta de Arrenda a los inquilinos?',
        answer: 'Adelanta de Arrenda no afecta los términos del contrato de arrendamiento para los inquilinos, quienes continúan pagando sus rentas de manera habitual.'
      },
      {
        question: '¿Pueden los inquilinos solicitar Adelanta de Arrenda?',
        answer: 'No, Adelanta de Arrenda es un producto exclusivo para propietarios. Sin embargo, los inquilinos pueden beneficiarse de otros servicios que ofrece Ziff para mejorar su experiencia de arrendamiento.'
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
