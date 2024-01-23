<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    buttonClass() {
      return {
        'text-lg text-white bg-brand font-semibold px-6 py-4 rounded-lg mt-[40px] flex items-center space-x-4': this.type === 'primary',
        'text-lg text-brand font-semibold px-6 py-4 rounded-lg mt-[40px] flex items-center space-x-4': this.type === 'secondary'
      }
    }
  }
}
</script>