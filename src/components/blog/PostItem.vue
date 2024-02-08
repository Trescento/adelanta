<template>
  <div class="rounded-3xl flex flex-col bg-white overflow-hidden">
    <div class="w-full h-72 relative">
      <img src="https://placehold.it/400x400" alt="Blog Hero Image" class="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover">
    </div>
    <div class="flex flex-col p-6 gap-6">
      <p class="font-bold text-2xl">
        {{ post.title }}
      </p>
      <p class=" line-clamp-3">
        {{ post.description }}
      </p>
      <CommonBaseButton type="ghost" as-anchor :href="post.slug">
        <span class="font-medium">Leer más</span>
        <CommonArrowIcon type="primary" />
      </CommonBaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type HeroPostProps } from '../../interfaces/HeroPost'
defineProps<{
  post: HeroPostProps
}>()
</script>