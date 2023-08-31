import ProfileHeader from 'components/profile/ProfileHeader.vue';
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
          <div class="profileTabsItem">
  
          </div>
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

  const profile = useProfile()

</script>

<style lang="scss" scoped>

</style>
