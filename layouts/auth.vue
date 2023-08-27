<template>
  <div class="relative">
    <div class="fixed w-full">
      <Header />
    </div>
    <div>
      <NotificationContainer />
      <slot />
    </div>
  </div>
</template>

<script setup>
  import Header from '@/app/Header'
</script>

<style lang="scss" scoped>

</style>
