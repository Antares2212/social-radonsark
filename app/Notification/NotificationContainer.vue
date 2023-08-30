<template>
  <div class="notificationWrapper notificationWrapper-xs">
    <div v-for="notification in store.notifications" :key="notification.id">
      <Notification 
        :id="notification.id" 
        :type="notification.type" 
        :title="notification.title" 
        :message="notification.message" 
        :onClose="store.removeNotification" 
        :timer="store.timer"
        />
    </div>
  </div>
</template>

<script setup>
  import { useNotification } from '@/store/notification'
  const store = useNotification()
</script>

<style scoped>

</style>
