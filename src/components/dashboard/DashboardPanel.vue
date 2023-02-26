<script setup lang="ts">
  import AssetsCardPanel from './components/AssetsCardPanel.vue'
  import AssetsTablePanel from './components/AssetsTablePanel.vue'
  import { getAssetsApi } from '@/components/dashboard/infrastructure/api'
  import { Assets, AssetsRequest } from './entities'
  import { CardProps } from '@/core-ui/card/card.type'
  import mockupData from './mockup/mockup.json'

  const assetsRequest = ref({
    search: '',
    ids: [],
    limit: 5,
    offset: 1,
  } as AssetsRequest)

  const assetsItems = ref<Assets[]>(mockupData.data as Assets[])

  const assetsCardItems = computed(() => {
    if (assetsItems.value.length === 0) return []
    const items = [...assetsItems.value].slice(0, 4) as Assets[]
    const cardItems = items.map((asset: Assets) => {
      return {
        title: asset.name,
        value: parseFloat(asset.priceUsd),
        icon: 'fa-solid:coins',
        percent: parseFloat(asset.changePercent24Hr),
      } as CardProps
    })
    return cardItems
  })

  const getAssetsList = async () => {
    try {
      const res = await getAssetsApi(assetsRequest.value)
      assetsItems.value = res.data.data as Assets[]
    } catch (error) {
      assetsItems.value = [] as Assets[]
    }
  }

  const handleChangePage = (newPage: number) => {
    assetsRequest.value.offset = newPage
    getAssetsList()
  }

  onBeforeMount(async () => {
    // await getAssetsList()
  })
</script>

<template>
  <div>
    <AssetsCardPanel :assetsCardItems="assetsCardItems" />
    <AssetsTablePanel
      :assetsItems="assetsItems"
      :page="assetsRequest.offset"
      @handleChangePage="handleChangePage($event)"
    />
  </div>
</template>
