<script setup lang="ts">
  import { navbarItems } from '@/layouts/constants/navbarItem'
  import { Icon } from '@iconify/vue'
  import DocumentPanel from '@/components/document/components/DocumentPanel.vue'
  import Logo from '@/assets/img/logo.png'

  defineProps({
    isOpenSidebar: {
      type: Boolean,
      required: true,
    },
  })

  const emit = defineEmits<{
    (eventName: 'closeSidebar'): void
  }>()
</script>

<template>
  <div
    class="sidenav flex flex-col overflow-auto"
    :class="{ 'sidenav-overlay': isOpenSidebar }"
  >
    <div class="px-4 pt-4 flex justify-end md:hidden">
      <Icon
        icon="material-symbols:close-rounded"
        class="cursor-pointer"
        @click="emit('closeSidebar')"
      />
    </div>
    <div
      class="sidenav-header flex py-6 px-8 items-center gap-2 whitespace-nowrap"
    >
      <img :src="Logo" alt="company-logo" class="w-10 h-10" />
      <span class="font-weight-bold w-full">Komgrip Texhnologies</span>
    </div>
    <hr class="horizontal dark mt-0" />
    <div class="flex flex-col">
      <div v-for="item in navbarItems" :key="item.to" class="mt-1">
        <router-link
          :to="item.to"
          class="nav-item flex gap-4 items-center mx-4 p-3"
        >
          <div
            class="bg-white rounded-md w-8 h-8 flex justify-center items-center shadow-md nav-item-icon"
          >
            <Icon :icon="item.icon" />
          </div>
          <div class="text-[#67748e]">
            {{ item.name }}
          </div>
        </router-link>
      </div>
    </div>
    <div class="sidebar-footer mt-auto mb-4 pb-4">
      <DocumentPanel />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .sidenav {
    @apply ml-4 my-4 p-0 shadow-none overflow-y-auto w-full max-w-[15.625rem] fixed h-full top-0 bottom-0;
  }
  .nav-item {
    &.router-link-active {
      @apply bg-white shadow-md text-[#344767] rounded-md;
      .nav-item-icon {
        background-image: linear-gradient(310deg, #cb0c9f 0%, #cb0c9f 100%);
        @apply text-white;
      }
    }
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }
  hr.horizontal.dark {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    );
  }

  hr.horizontal {
    background-color: transparent;
  }

  hr:not([size]) {
    height: 1px;
  }

  @media (max-width: 1199.98px) {
    .sidenav {
      transform: translateX(-17.125rem);
    }
  }

  .sidenav-overlay {
    transform: translateX(0);
    left: 0;
    z-index: 999;
    @apply bg-white shadow-md text-[#344767] rounded-lg m-4 h-auto;
  }
</style>
