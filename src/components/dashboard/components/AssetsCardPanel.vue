<script setup lang="ts">
  import { CardProps } from '@/core-ui/card/card.type'
  import AssetCard from '@/core-ui/card/AssetCard.vue'

  defineProps({
    assetsCardItems: {
      type: Object as PropType<CardProps[]>,
      required: true,
    },
  })
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <AssetCard v-for="item in assetsCardItems" :key="item.title" :data="item" />
  </div>
</template>
