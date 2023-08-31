<template>
  <div class="profileHeader">
    <div class="profileImg">
      <img class="rounded-2xl" :src="avatar || profile.avatar" alt="Аватар">
    </div>
    <div class="profileInfo">
      <div class="profileName">
        {{ profile.username }} <span class="text-text-2 text-lg">- Профиль</span>
      </div>
      <div class="profileStatus text-text-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi quos rerum id velit quisquam molestiae at accusamus totam amet.
      </div>
      <div class="profileSocials flex gap-2">
        <NuxtLink class="profileSocialsIcon" to="https://t.me/Alakey812">
          <Icon class="w-8 h-8" name="logos:telegram" />
        </NuxtLink>
        <NuxtLink class="profileSocialsIcon" to="https://vk.com/id757865070">
          <Icon class="w-8 h-8 text-[#0077FF] rounded-full bg-text" name="entypo-social:vk-with-circle" />
        </NuxtLink>
        <NuxtLink class="profileSocialsIcon" to="https://mail.yandex.ru/?uid=1641325502">
          <Icon class="w-8 h-8 text-highlight bg-[#0077FF] rounded-full" name="material-symbols:alternate-email" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    profile: {
      type: Object,
      required: true,
      default: {}
    }
  })

  const avatar = 'https://sneg.top/uploads/posts/2023-06/1687965154_sneg-top-p-pustaya-avatarka-stim-krasivo-65.jpg'
</script>

<style scoped>

</style>
