<template>
  <div class="rounded-3xl flex flex-col lg:flex-row bg-white overflow-hidden">
    <div class="w-full h-72 lg:w-1/2 lg:h-auto relative">
      <nuxt-img format="webp" :src="post.featuredImage" alt="Blog Hero Image" class="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover" />
    </div>
    <div class="flex flex-col p-6 gap-6 lg:w-1/2">
      <p class="font-bold text-2xl">
        {{ post.name }}
      </p>
      <p class=" line-clamp-3">
        {{ post.metaDescription }}
      </p>
      <CommonBaseButton type="ghost" as-anchor :href="`https://blog.arrenda.mx/${post.slug.replace('blog/', '')}`" target="_blank">
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
