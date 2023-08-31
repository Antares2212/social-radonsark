import { NuxtLink, Icon } from '../../.nuxt/components';
<template>
  <div class="fixed flex flex-col items-center w-40 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
		<NuxtLink class="flex items-center w-full px-3 mt-3" to="/">
      <Icon class="w-8 h-8 fill-current" name="ph:codesandbox-logo"/>
			<div class="ml-2 text-sm font-bold">Радонсарк</div>
		</NuxtLink>
    <div class="w-full px-2">
      <div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">
        <NuxtLink 
          v-for="item in menu" 
          :key="item" 
          :to="item.path"
          class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
          <Icon class="w-6 h-6 fill-current"  :name="item.icon" />
          <div class="ml-2 text-sm font-medium">
            {{ item.title }}
          </div>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">
        <NuxtLink to="/profile" class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300">
          <Icon class="w-6 h-6 fill-current" name="material-symbols:account-circle"/>
          <span class="ml-2 text-sm font-medium">Account</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  })
  const menu = [
    {title: 'Домой', path: '/', icon: 'material-symbols:home-rounded'},
    {title: 'Сообщения', path: '/message', icon: 'material-symbols:android-messages'},
    {title: 'Друзья', path: '/friend', icon: 'carbon:friendship'},
    {title: 'Музыка', path: '/music', icon: 'material-symbols:library-music'},
    {title: 'Видео', path: '/video', icon: 'material-symbols:slow-motion-video'},
    {title: 'Новости', path: '/news', icon: 'material-symbols:newspaper'},
  ]
</script>

<style lang="scss" scoped>
  

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
