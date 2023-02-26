<script lang="ts" setup>
  import AppSidebar from '@/layouts/components/AppSidebar.vue'
  import AppNavbar from '@/layouts/components/AppNavbar.vue'
  import AppFooter from '@/layouts/components/AppFooter.vue'

  const isOpenSidebar = ref(false)
</script>

<template>
  <div class="bg-[#f8f9fa] flex h-full relative">
    <AppSidebar
      :isOpenSidebar="isOpenSidebar"
      @close-sidebar="isOpenSidebar = false"
    />
    <div class="app-content">
      <AppNavbar @toggle-sidebar="isOpenSidebar = !isOpenSidebar" />
      <div class="flex flex-col flex-1 p-6">
        <router-view v-slot="{ Component, route }">
          <transition name="slide">
            <component :is="Component" :key="route" />
          </transition>
        </router-view>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .app-content {
    @apply flex-1 flex flex-col ml-[17.125rem] relative w-full;
  }
  @media (max-width: 1199.98px) {
    .app-content {
      transition: all 0.2s ease-in-out;
      @apply ml-0;
    }
  }
</style>
