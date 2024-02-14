<template>
    <div class="rounded-3xl flex flex-col bg-white overflow-hidden">
      <div class="w-full h-72 relative">
        <img :src="post.featuredImage" :alt="post.featuredImageAltText" class="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover">
      </div>
      <div class="flex flex-col p-6 gap-6">
        <p class="font-bold text-2xl">
          {{ post.name }}
        </p>
        <p class=" line-clamp-3">
          {{ post.metaDescription }}
        </p>
        <CommonBaseButton type="ghost" as-anchor :href="`https://blog.arrenda.mx/${post.slug.replace('blog/', '')}`">
          <span class="font-medium">Leer más</span>
          <CommonArrowIcon type="primary" />
        </CommonBaseButton>
      </div>
    </div>
</template>

<script setup lang="ts">
import { type Post } from '../../interfaces/Post'
defineProps<{
  post: Post
}>()
</script>