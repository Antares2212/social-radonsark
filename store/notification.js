import { defineStore } from 'pinia'

export const useNotification = defineStore('notification', () => {
  const notifications = ref([])

  const addNotifiacation = (notification) => {
    notifications.value.push(notification)
  }

  const removeNotification = (id) => {
    notifications.value = notifications.value.filter(notification => notification.id != id)
  }

  return { notifications, addNotifiacation, removeNotification }
})
