import { useProfile } from '@/store/profile'

export default defineNuxtRouteMiddleware((to, from) => {
  const profile = useProfile()
  const isLoggedIn = profile.checkLogin()

  if (!isLoggedIn && to.path !== '/auth/login') {
    return navigateTo('/auth/login')
  } 
})
