import { defineStore } from 'pinia'
import { useNotification } from '@/store/notification'

export const useProfile = defineStore('profile', () => {
  const profile = ref({})

  const router = useRouter()
  const notification = useNotification()

  const updateProfile = (data) => {
    profile.value = data
  }

  const login = async (data) => {
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      localStorage.setItem('Token', res.token)
      updateProfile(res.profile)
      notification.addNotifiacation({
        id: Date.now(),
        type: 'success',
        title: 'Успешный вход',
        message: `Пользователь ${data.username} успешно вошел`,
      })
      router.push('/')
    })
    .catch(res => {
      notification.addNotifiacation({
        id: Date.now(),
        type: 'error',
        title: 'Ошибка входа',
        message: res.message,
      })
      throw res
    })
  }

  return {
    login,
    profile
  }
})
