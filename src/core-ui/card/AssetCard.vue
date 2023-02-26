<script setup lang="ts">
  import { CardProps } from './card.type'
  import Card from './Card.vue'
  import { Icon } from '@iconify/vue'
  import { toCurrency, toNumber } from '@/utils/number'

  defineProps({
    data: {
      type: Object as PropType<CardProps>,
      required: true,
    },
  })
</script>

<template>
  <Card>
    <div class="flex">
      <div>
        <p class="text-sm mb-0 capitalize">
          {{ data.title }}
        </p>

        <h5 class="font-bold text-xl">
          {{ toCurrency(data.value, 2) }}
        </h5>

        <div
          class="text-sm font-bold"
          :class="[
            { 'text-[#82d616]': data.percent >= 0 },
            { 'text-[#ea0606]': data.percent < 0 },
          ]"
        >
          {{ toNumber(data.percent, 2) }}%
        </div>
      </div>
      <div class="card-icon bg-gradient-primary">
        <Icon :icon="data.icon" />
      </div>
    </div>
  </Card>
</template>

<style scoped>
  .card-icon {
    @apply shadow rounded-[0.5rem] w-12 h-12 ml-auto items-center flex justify-center text-white;
  }
</style>
