<script setup lang="ts">
  import DataTable from '@/core-ui/table/DataTable.vue'
  import { toCurrency, toNumber } from '@/utils/number'
  import { Assets } from '../entities'

  defineProps({
    assetsItems: {
      type: Object as PropType<Assets[]>,
      required: true,
    },
    page: {
      type: Number,
      required: false,
      default: 1,
    },
  })

  const emit = defineEmits<{
    (eventName: 'handleChangePage', page: number): void
  }>()

  const columns = [
    {
      header: 'No',
      trStyle: 'w-[80px] text-center capitalize',
      field: 'rank',
      tdStyle: 'text-center',
    },
    {
      header: 'Name',
      trStyle: 'w-[400px] text-center capitalize',
      field: 'name',
      tdStyle: 'text-center',
    },
    {
      header: 'Symbol',
      trStyle: 'w-[200px] text-center capitalize',
      field: 'symbol',
      tdStyle: 'text-center',
    },
    {
      header: 'Supply/ Max Supply',
      trStyle: 'w-[400px] text-right capitalize',
      field: 'supply',
      tdStyle: 'text-right',
    },
    {
      header: 'usd',
      trStyle: 'text-right w-[100px] capitalize',
      field: 'priceUsd',
      tdStyle: 'text-right',
    },
    {
      header: '24Hr',
      trStyle: 'text-right w-[100px] capitalize',
      field: 'changePercent24Hr',
      tdStyle: 'text-right',
    },
  ]
</script>

<template>
  <div class="mt-4">
    <DataTable
      title="Cryptocurrencies"
      :items="assetsItems"
      :page="page"
      :columns="columns"
      @handleChangePage="emit('handleChangePage', $event)"
    >
      <template #priceUsd="slotProps">
        <span>{{ toCurrency(slotProps.data.priceUsd, 2) }}</span>
      </template>

      <template #supply="slotProps">
        <span
          >{{ toNumber(slotProps.data.supply, 0) }} /
          {{ toNumber(slotProps.data.maxSupply, 0) }}</span
        >
      </template>

      <template #changePercent24Hr="slotProps">
        <span
          :class="[
            { 'text-[#82d616]': slotProps.data.changePercent24Hr >= 0 },
            { 'text-[#ea0606]': slotProps.data.changePercent24Hr < 0 },
          ]"
          >{{ toNumber(slotProps.data.changePercent24Hr, 2) }}%</span
        >
      </template>
    </DataTable>
  </div>
</template>
