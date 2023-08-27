<template>
  <div class="bg-gray-100">
    <Header />
    <div class="flex">
      <Sidebar />
      <div class="lg:container py-6 mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Header from '@/app/Header'
  import Sidebar from '@/app/Sidebar'
</script>

<style lang="scss" scoped>

</style>
