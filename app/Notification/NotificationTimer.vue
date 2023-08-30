<template>
  <div :class="fade" class="notificationTimer"></div>
</template>

<script setup>
const props = defineProps({
  timer: {
    type: Number,
    required: true
  },
  closeNotification: {
    type: Function,
    required: true
  }
})
const fade = ref('')

setTimeout(() => {
  props.closeNotification()
}, props.timer + 600);
</script>

<style lang="scss" scoped>

</style>
