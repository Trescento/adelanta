<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    :class="className"
  >
    <path d="M5 12.5H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 5.5L19 12.5L12 19.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup lang="ts">
type arrowType = 'white' | 'black' | 'primary'
const props = defineProps<{
  type?: arrowType
}>()

const type = props.type ?? 'white'
const classes = {
  white: 'stroke-white',
  black: 'stroke-black',
  primary: 'stroke-brand'
}

const className = classes[type]

</script>
