<template>
  <nuxt-img
    :src="`/svgs/${iconMap[props.icon]}`"
    :width="props.width"
    :height="props.height"
    :alt="`${props.icon} icon`"
    format="webp"
  />
</template>

<script setup lang="ts">

type SocialIcon = 'linkedin' | 'facebook' | 'instagram' | 'twitter' | 'tiktok'

const props = defineProps<{
  icon: SocialIcon
  width: number
  height: number
}>()

const iconMap = {
  linkedin: '/linkedin.svg',
  facebook: '/facebook.svg',
  instagram: '/instagram.svg',
  twitter: '/x.svg',
  tiktok: '/tiktok.svg'
}

</script>
