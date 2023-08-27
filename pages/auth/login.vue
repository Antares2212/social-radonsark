<template>
  <div class="lg:container flex justify-center items-center h-screen mx-auto">
    <VeeForm class="flex flex-col items-center justify-between mx-auto p-4 bg-items max-w-md w-full rounded-xl" @submit="onSubmit">
      <div class="text-center text-2xl text-text font-medium">Вход</div>
      <AppInput 
        :name="'email'" 
        :rules="'required|email'" 
        :label="'Почта:'"
        :id="'email'"
        :placeholder="'Введите почту...'"/>

      <AppInput 
        :name="'password'" 
        :rules="'required|password'" 
        :label="'Пароль:'"
        :id="'password'"
        :placeholder="'Введите пароль...'"/>

      <AppButton class="mt-3">Войти</AppButton>
    </VeeForm>
  </div> 
</template>

<script setup>

  definePageMeta({
    layout: 'auth'
  })

  import { useNotification } from '@/store/notification'

  const store = useNotification()

  const onSubmit = (val) => {
    store.addNotifiacation({
      id: Date.now(),
      type: 'success',
      title: 'Успешный вход',
      message: `Пользователь успешно ${val.email} вошел`,
    })
  }
</script>

<style scoped>

</style>
