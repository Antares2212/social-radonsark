<template>
  <div class="fixed md:max-lg:bottom-4 md:max-lg:right-4 xs:bottom-4 xs:right-1 xs:left-1">
    <div v-for="notification in store.notifications" :key="notification.id">
      <Notification 
        :id="notification.id" 
        :type="notification.type" 
        :title="notification.title" 
        :message="notification.message" 
        :onClose="store.removeNotification" 
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
