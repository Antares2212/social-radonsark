import { useNotification } from "@/store/notification"

export const useNotifications = () => {
  const notification = useNotification()

  const notifications = {
    loginSuccess: () => notification.addNotifiacation({
      id: Date.now(),
      type: 'success',
      title: 'Вход',
      message: `Пользователь вошел в аккаунта`,
    }),
    loginError: (res) => notification.addNotifiacation({
      id: Date.now(),
      type: 'error',
      title: 'Ошибка входа',
      message: res.message,
    }),
    loggedOut: () => notification.addNotifiacation({
      id: Date.now(),
      type: 'success',
      title: 'Выход',
      message: `Пользователь вышел из аккаунта`,
    }),
  
    registrationSuccess: () => notification.addNotifiacation({
      id: Date.now(),
      type: 'success',
      title: 'Успешная регистрация',
      message: `Пользователь был зарегистрирован`,
    }),
    registrationError: (res) => notification.addNotifiacation({
      id: Date.now(),
      type: 'error',
      title: 'Регистрация не удалась',
      message: res.message,
    })
  }

  return {
    notifications
  }
}
