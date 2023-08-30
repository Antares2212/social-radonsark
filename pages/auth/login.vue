<template>
  <div class="auth">
    <VeeForm class="auth-form" @submit="onSubmit">
      <div class="auth-btn">Вход</div>
      <AppInput 
        :name="'username'" 
        :rules="'required|name'" 
        :label="'Почта:'"
        :id="'username'"
        :placeholder="'Введите имя...'"/>

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

  import { useProfile } from '@/store/profile'

  const profile = useProfile()

  const onSubmit = (val) => {
    profile.login(val)
  }
</script>

<style scoped>

</style>
