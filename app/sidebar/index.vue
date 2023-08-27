import { NuxtLink, Icon } from '../../.nuxt/components';
<template>
  <aside class="fixed flex flex-col justify-between h-full bg-light-1 pt-4">
    <nav>
      <NuxtLink 
        v-for="item in menu" 
        :key="item" 
        :to="item.path"
        class="flex py-2 px-3"
      >
        {{ item.title }}
      </NuxtLink>
    </nav>
    <NuxtLink to="/auth/login" class="block py-2 px-3">
      <Icon scale="2" name="ic:baseline-log-out"/>
    </NuxtLink>
  </aside>
</template>

<script setup>
  const menu = [
    {title: 'Домой', path: '/'},
    {title: 'Профиль', path: '/profile'},
    {title: 'Сообщения', path: '/message'},
    {title: 'Друзья', path: '/friend'},
    {title: 'Музыка', path: '/music'},
    {title: 'Видео', path: '/video'},
    {title: 'Новости', path: '/news'},
  ]
</script>

<style lang="scss" scoped>
  

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
