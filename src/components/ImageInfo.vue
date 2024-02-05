<template>
  <div class="flex items-center flex-col md:flex-row mx-auto w-full">
    <img v-if="imgLeft === false" class="md:max-w-[539px] w-full rounded-3xl -mb-[125px] md:mb-0 md:-mr-[125px]" :src="imgSrc">
    <div class="px-6 w-full md:px-0">
      <div :class="`${boxClass} rounded-3xl p-8 flex flex-col items-center text-center w-full gap-6 relative z-10`">
        <slot />
      </div>
    </div>
    <img v-if="imgLeft === true" class="-order-1 md:order-1 md:max-w-[539px] w-full rounded-3xl -mb-[125px] md:mb-0 md:-ml-[125px]" :src="imgSrc">
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: string
  imgLeft?: boolean
  type?: 'primary' | 'secondary'
}>()

const imgSrc = props.img
const type = props.type ?? 'primary'

const boxClass = computed(() => {
  return type === 'primary' ? 'bg-brand text-white' : 'bg-brand-gray90 text-brand'
})
</script>
