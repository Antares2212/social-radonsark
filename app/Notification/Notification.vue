<template>
  <div class="notificationItem" :class="[notificationClasses, fade]">
    <div class="notificationContent">
      <div>{{ title }}</div>
      <button class="absolute top-1 right-2" @click="closeManual">
        <Icon class="text-xl" name="material-symbols:cancel-outline"/>
      </button>
    </div>
    <div>{{ message }}</div>
    <NotificationTimer :closeNotification="close" :timer="timer"/>
  </div>
</template>

<script setup>
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
    },
    timer: {
      type: Number,
      required: true,
      default: 10000
    }
  })

  const fade = ref('animate-notification')

  const success = ["bg-success","border-success","text-success"]
  const error = ["bg-error","border-error","text-error"]
  const warning = ["bg-warning","border-warning","text-warning"]
  const info = ["bg-info","border-info","text-info"]

  const notificationClasses = computed(() => {return `font-medium bg-highlight border-l-4 border-${props.type}-500 text-${props.type} p-4 mb-4`})

  const close = () => {
    props.onClose(props.id)
  }

  const closeManual = () => {
    fade.value = 'animate-notification-out'
    setTimeout(() => {
      close()
    }, 600);
  }

  setTimeout(() => {
    fade.value = 'animate-notification-out'
  }, props.timer);
</script>

<style scoped>

</style>
