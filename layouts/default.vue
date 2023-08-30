<template>
  <div class="bg-gray-100">
    <Header :name="data.profile.username"/>
    <div class="flex">
      <Sidebar />
      <div class="lg:container py-6 mx-auto">
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
