<template>
  <div class="badge inline-block text-text text-sm text-center font-medium px-6 py-px rounded-2xl bg-highlight">
    {{ text }}
  </div>
</template>

<script setup>
  defineProps({
    text: {
      type: String,
      require: true
    }
  })
</script>

<style scoped>

</style>
