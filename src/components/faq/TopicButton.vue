<template>
  <button :class="`text-left p-4 font-bold rounded-lg transition-colors ${props.active ? ' bg-brand-purple-light text-brand' : ''}`">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  active?: boolean
}>()
</script>
