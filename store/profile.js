import { defineStore } from 'pinia'
import { useNotifications } from '@/utils/notifications'

export const useProfile = defineStore('profile', () => {
  const profile = ref({})
  const isLoggedIn = ref('')

  const router = useRouter()
  const { notifications } = useNotifications()
  
  const updateProfile = (data) => {
    profile.value = data
  }

  const login = async (data) => {
    request('/auth/login', 'POST', data)
    .then(res => {
      localStorage.setItem('Token', res.token)
      checkLogin()
      updateProfile(res.profile)
      router.push('/')
      notifications.loginSuccess()
    })
    .catch(res => {
      notifications.loginError(res)
      throw res
    })
  }

  const registration = async (data) => {
    request('/auth/registration', 'POST', data)
    .then(() => {
      router.push('/auth/login')
      notifications.registrationSuccess()
    })
    .catch(res => {
      notifications.registrationError(res)
      throw res
    })
  }

  const logout = async () => {
    localStorage.removeItem('Token')
    checkLogin()
    router.push('/auth/login')
    notifications.loggedOut()
  }

  const checkLogin = () => isLoggedIn.value = process.server ? false : !!localStorage.getItem('Token')

  return {
    login,
    logout,
    registration,
    checkLogin,
    profile,
    isLoggedIn
  }
})
