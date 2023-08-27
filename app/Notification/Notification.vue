<template>
  <div class="relative shadow-sm" :class="notificationClasses">
    <div class="flex items-center justify-between">
      <div>{{ title }}</div>
      <button class="absolute top-1 right-2" @click="close">
        <Icon class="text-xl" name="material-symbols:cancel-outline"/>
      </button>
    </div>
    <div>{{ message }}</div>
  </div>
</template>

<script setup>
  import { useNotification } from '@/store/notification'

  const store = useNotification() 
  const props = defineProps({
    id: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: (value) => ['success', 'warning', 'error', 'info'].includes(value),
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
      default: () => {}
    }
  })

  const success = ["bg-success-100","border-success-500","text-success"]
  const error = ["bg-error","border-error","text-error"]
  const warning = ["bg-warning","border-warning","text-warning"]
  const info = ["bg-info","border-info","text-info"]
  const notificationClasses = computed(() => {return `font-medium bg-highlight border-l-4 border-${props.type}-500 text-${props.type} p-4 mb-4`})

  const close = () => {
    props.onClose(props.id)
  }
</script>

<style scoped>

</style>
