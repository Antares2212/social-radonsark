<template>
  <div class="flex flex-col justify-between mb-4 w-full">
    <label class="text-left text-lg text-text font-medium" :for="id">{{ label }}</label>
    <VeeField 
      class="p-4 rounded-xl outline-none" 
      :placeholder="placeholder" 
      :id="id" 
      :name="name" 
      :rules="rules" 
    />
    <VeeErrorMessage 
      class="text-left text-xs text-error" 
      :name="name" />
  </div>
</template>

<script setup>
  defineProps(['name', 'label', 'rules', 'id', 'placeholder'])
</script>

<style lang="scss" scoped>

</style>
