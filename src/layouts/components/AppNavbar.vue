<script setup lang="ts">
  import AppBreadcrumb from './AppBreadcrumb.vue'
  import { Icon } from '@iconify/vue'
  import { CSSProperties } from 'vue'

  const emit = defineEmits<{
    (eventName: 'toggleSidebar'): void
  }>()

  const { meta } = useRoute()
  const isScrollToBottom = ref<boolean>(false)
  const currentPosition = ref(0)
  const navbarClass = computed(() => {
    if (isScrollToBottom.value) return 'mx-4 py-2 navbar-sticky'
    return 'py-2 mx-4'
  })

  const navbarTop = computed(() => {
    if (isScrollToBottom.value) return `${currentPosition.value + 10}px`
    return 0
  })
  const onScroll = ($event: any) => {
    currentPosition.value = window.scrollY
    if (window.scrollY > 0) isScrollToBottom.value = true
    else isScrollToBottom.value = false
  }

  onMounted(async () => {
    window.addEventListener('scroll', onScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
</script>

<template>
  <div :style="{ top: navbarTop }" :class="navbarClass">
    <div class="flex justify-between py-1 px-3 items-center">
      <div>
        <AppBreadcrumb />
        <h6>{{ meta.title }}</h6>
      </div>
      <div class="flex gap-2 items-center">
        <Icon icon="material-symbols:person" /><span class="hidden md:block">
          Araya Choothong</span
        >
        <Icon
          icon="ph:list-bold"
          class="md:hidden cursor-pointer"
          @click="emit('toggleSidebar')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .navbar-sticky {
    position: sticky;
    z-index: 1020;
    border-radius: 1rem;
    transition: box-shadow 0.25s ease-in, background-color 0.25s ease-in;
    box-shadow: inset 0 0px 1px 1px rgb(254 254 254 / 90%),
      0 20px 27px 0 rgb(0 0 0 / 5%) !important;
    backdrop-filter: saturate(200%) blur(30px);
    background-color: rgba(255, 255, 255, 0.8) !important;
  }
</style>
