
<template>
  <div class="profile">
    <ProfileHeader :profile="profile.profile"/>
    <div class="profileContent">
      <div class="profileSide">
        <ProfilePopular />
        <ProfileSkills />
        <ProfileAbout />
      </div>
      <div class="profileMain">
        <div class="profileTabs">
          <TabsContent :tabs="tabs" />
        </div>
        <div class="profileNews">
          <div class="profilePost">
  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useProfile } from '@/store/profile'
  import TabsContent from '@/components/TabsContent'
  import ProfileAbout from '@/components/profile/ProfileAbout'

  const profile = useProfile()

  const tabs = [
    { name: 'Вкладка 1' },
    { name: 'Вкладка 2' },
    { name: 'Вкладка 3' },
  ]

</script>

<style lang="scss" scoped>

</style>
