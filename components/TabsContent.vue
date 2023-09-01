<template>
  <div>
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === tab.name }"
        @click="changeTab(tab.name)"
      >
        {{ tab.name }}
      </div>
    </div>
    
    <div class="content">
      <client-only>
        <div v-for="(tab, index) in tabs" :key="index">
          <div v-if="activeTab === tab.name">
            <slot :name="tab.name"></slot>
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    tabs: {
      type: Array,
      required: true
    }
  })
  const tabs = ref([])
  const activeTab = ref(null)

  const changeTab = (tab) => {
    activeTab.value = tab
  }
</script>

<style scoped>
  .tabs {
    display: flex;
  }

  .tabs > div {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
  }

  .tabs > div.active {
    font-weight: bold;
  }

  .content {
    margin-top: 10px;
  }
</style>
