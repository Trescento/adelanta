<template>
  <div class="snap-center lg:snap-start flex-none flex flex-col min-h-[420px] w-[calc(65vw)] max-w-96 p-4 lg:p-8 pb-6 bg-brand-purple-light rounded-3xl">
    <p class="font-bold text-brand text-lg mb-6">
      {{ props.title }}
    </p>
    <p class="text-sm">
      {{ props.description }}
    </p>
    <div class="mt-auto">
      <CommonBaseButton type="black">
        <span>Descubre más</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19" stroke="#150D26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 5L19 12L12 19" stroke="#150D26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
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
