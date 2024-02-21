<template>
  <section class="my-24 container">
    <h2 class="font-bold text-4xl text-center mb-8">
      Calcula tu adelanto de rentas
    </h2>
    <div class="flex flex-col bg-brand-gray90 rounded-3xl p-12 gap-6">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-2">
            <label for="payment">¿Cuánto cobras de renta al mes?</label>
            <div class="relative">
              <input id="payment" v-model="formattedPayment" @input="updatePayment" name="payment" type="text" class="bg-white rounded-xl pl-2 pr-16 py-2 text-right w-full">
              <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">MXN</span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="period">¿Cuántos meses quieres adelantar?</label>
            <div class="relative">
              <input v-model="period" type="text" class="bg-white rounded-xl pl-2 pr-16 py-2 text-right w-full" disabled>
              <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">meses</span>
            </div>
            <div class="flex flex-col gap-1 pt-2">
              <input
              id="period"
              v-model="period"
              type="range"
              name="period"
              class=" accent-brand-primary"
              step="1"
              min="6"
              max="36"
              >
              <div class="flex justify-between items-center text-gray-400">
                <p>6</p>
                <p>36</p>
              </div>
            </div>
          </div>
        </div>
        <div class="md:max-w-[250px] lg:md:max-w-[350px] w-full text-3xl leading-normal">
          <p >Te adelantamos hasta</p>
          <p class="text-nowrap"><span class="font-bold">${{ formatNumber(total) }}</span> <span class="text-xl">MXN</span></p>
          <p class="text-sm font-bold pt-4">Queremos ser tu aliado, ponte en contacto con nosotros</p>
        </div>
      </div>
      <CommonBaseButton class="self-end" as-anchor href="https://app.arrenda.mx/register">
        <p>Solicitar adelanto</p>
        <CommonArrowIcon />
      </CommonBaseButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import formatNumber from '@/helpers/formatNumber'
const period = ref(17)
const payment = ref(10000)
const formattedPayment = computed(() => `$${formatNumber(payment.value)}`)
const total = computed(() => calculateTotal())

const rates = [
  { maxPeriod: 36, percent: 40 }
]

const updatePayment = (event: Event) => {
  const target = event.target as HTMLInputElement
  const unformattedValue = target.value.replace(/[^0-9]/g, '')
  payment.value = parseInt(unformattedValue) || 0
}

const calculateTotal = () => {
  let percent = 0
  rates.forEach(rate => {
      if (period.value > rate.maxPeriod) {
          return false
      }
      percent = rate.percent
  })

  let rate = (percent / 100) / 12
  let presentValue = PV(rate, period.value, payment.value)
  return Math.abs(presentValue)
}

const PV = (rate: number, periods: number, payment: number, future = 0, type = 0) => {
  if (rate === 0) {
      return - payment * periods - future
  } else {
      return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 +rate * type) - future) / Math.pow(1 + rate, periods)
  }
}
</script>
