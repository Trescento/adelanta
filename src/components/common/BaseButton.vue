<template>
  <button v-if="!asAnchor" :class="buttonClass">
    <slot />
  </button>
  <a v-else :class="buttonClass" :href="href">
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: 'primary' | 'secondary' | 'ghost' | 'white' | 'black' | 'black-ghost'
  asAnchor?: boolean
  href?: string
}>()

const baseClass = 'text-lg font-semibold px-6 py-4 rounded-lg flex items-center space-x-4 border'

const classes = {
  primary: 'text-white bg-brand border-brand',
  secondary: 'border-brand text-brand',
  ghost: 'border-transparent text-brand',
  white: 'border-white text-white',
  black: 'border-black text-black',
  'black-ghost': 'border-transparent text-black'
}
const customClass = classes[props.type!] ?? classes.primary
const buttonClass = `${baseClass} ${customClass}`

</script>
