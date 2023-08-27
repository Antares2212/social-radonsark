import { NuxtLink } from '../../.nuxt/components';
<template>
  <header>
    <div class="lg:container sm:max-lg:px-4 flex items-center justify-between mx-auto py-6 font-medium">
      <NuxtLink to="/">
        <div class="logo text-2xl">Радонсарк</div>
      </NuxtLink>
      <div class="flex justify-between w-48">
        <NuxtLink class="flex items-center justify-between" to="/auth/login">
          Войти 
          <Icon class="pl-1 text-xl" name="material-symbols:login"/>
        </NuxtLink>
        <NuxtLink class="flex items-center justify-between" to="/auth/registration">
          Регистрация
          <Icon class="pl-1 text-xl" name="ic:baseline-how-to-reg"/>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
