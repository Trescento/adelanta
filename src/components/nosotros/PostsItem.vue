<template>
  <div class="snap-center lg:snap-start flex-none flex flex-col min-h-[420px] w-[calc(65vw)] max-w-96 p-4 lg:p-8 pb-6 bg-brand-purple-light rounded-3xl">
    <p class="font-bold text-brand text-lg mb-6">
      {{ props.title }}
    </p>
    <p class="text-sm">
      {{ props.description }}
    </p>
    <div class="mt-auto">
      <CommonBaseButton type="black-ghost">
        <span>Descubre más</span>
        <CommonArrowIcon type="black" />
      </CommonBaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  url?: string
}>()
</script>
