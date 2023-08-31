<template>
  <div class="bg-gray-100">
    <Header />
    <div class="flex">
      <Sidebar :name="data.profile.username"/>
      <div class="lg:container py-6 pl-40 mx-auto">
        <slot />
      </div>
    </div>
    <NotificationContainer />
  </div>
</template>

<script setup>
  import Header from '@/app/Header'
  import Sidebar from '@/app/Sidebar'

  import { useProfile } from '@/store/profile'

  const data = useProfile()
  
</script>

<style lang="scss" scoped>

</style>
