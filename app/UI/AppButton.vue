<template>
  <button class="rounded-xl bg-buttons text-text font-medium px-5 py-2" @click="onSubmit">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  onSubmit: {
    type: Function,
    required: false,
    default: () => {}
  }
})
</script>

<style scoped>

</style>
