<template>
  <div class="auth">
    <VeeForm class="auth-form" @submit="onSubmit">
      <div class="auth-btn">Регистрация</div>
      <AppInput 
        :name="'name'" 
        :rules="'required|name'" 
        :label="'Логин:'"
        :id="'name'"
        :placeholder="'Введите логин...'"/>

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

      <AppButton class="mt-3">Зарегистрироваться</AppButton>
    </VeeForm>
  </div> 
</template>

<script setup>
  definePageMeta({
    layout: 'auth'
  })

  const onSubmit = (val) => {
    console.log(val);
  }
</script>

<style lang="scss" scoped>

</style>
