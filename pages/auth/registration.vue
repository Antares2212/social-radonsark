<template>
  <div class="lg:container flex justify-center items-center h-screen mx-auto">
    <VeeForm class="flex flex-col items-center justify-between mx-auto p-4 bg-items max-w-md w-full rounded-xl" @submit="onSubmit">
      <div class="text-center text-2xl text-text font-medium">Регистрация</div>
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
