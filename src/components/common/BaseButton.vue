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
        'text-lg text-white bg-brand font-semibold px-6 py-4 rounded-lg flex items-center space-x-4': this.type === 'primary',
        'text-lg border border-brand text-brand font-semibold px-6 py-4 rounded-lg flex items-center space-x-4': this.type === 'secondary',
        'text-lg border border-transparent text-brand font-semibold px-6 py-4 rounded-lg flex items-center space-x-4': this.type === 'ghost',
        'text-lg border border-white text-white font-semibold px-6 py-4 rounded-lg flex items-center space-x-4': this.type === 'white',
      }
    }
  }
}
</script>