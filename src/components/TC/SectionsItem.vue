<template>
  <div class="collapse collapse-arrow bg-white">
    <input type="radio" name="tc-sections" class="peer">
    <div class="collapse-title text-xl font-medium p-8">
      <p class="text-2xl font-bold peer-checked:text-brand">
        {{ id }}. {{ title }}
      </p>
    </div>
    <div class="collapse-content">
      <p class="text-lg px-5 whitespace-pre-wrap">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number
  title: string
  content: string
}>()
</script>
