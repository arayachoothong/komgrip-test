<script setup lang="ts">
  import Card from '@/core-ui/card/Card.vue'
  import { PropType } from 'vue'
  import { Columns } from './table.type'
  import { Icon } from '@iconify/vue'

  defineProps({
    title: {
      type: String,
      required: true,
    },
    columns: {
      type: Array as PropType<Columns[]>,
      default: [],
    },
    items: {
      type: Array as PropType<any[]>,
      required: true,
    },
    page: {
      type: Number,
      required: false,
      default: 1,
    },
    isLastPage: {
      type: Boolean,
      required: false,
      default: false,
    },
  })

  const emit = defineEmits<{
    (eventName: 'handleChangePage', page: number): void
  }>()
</script>

<template>
  <Card class="mt-4">
    <div class="flex flex-col md:flex-row justify-between py-4 gap-2">
      <div class="text-xl font-bold items-center flex" v-show="title">
        {{ title }}
      </div>
      <div class="flex gap-2">
        <button
          class="btn btn-outline-primary mb-0 !text-lg"
          :disabled="page === 1"
          @click="emit('handleChangePage', page - 1)"
        >
          <Icon icon="material-symbols:chevron-left-rounded" />
        </button>
        <button
          class="btn btn-outline-primary mb-0 !text-lg"
          :disabled="isLastPage"
          @click="emit('handleChangePage', page + 1)"
        >
          <Icon icon="material-symbols:chevron-right-rounded" />
        </button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th v-for="col in columns" :key="col.header" :class="col.trStyle">
              {{ col.header }}
            </th>
          </tr>
        </thead>

        <tbody v-if="items.length">
          <tr v-for="data in items" :key="data.id">
            <td
              v-for="column in columns"
              :key="column.field"
              :class="column.tdStyle"
            >
              <template v-if="$slots[column.field]"
                ><slot :name="column.field" :data="data"></slot
              ></template>
              <template v-else>
                <span>{{ data[column.field] }}</span>
              </template>
            </td>
            <template v-if="$slots.action">
              <td><slot name="action" :data="data"></slot></td>
            </template>
          </tr>
        </tbody>
      </table>
      <div v-if="!items.length" class="text-center w-full">Nodata</div>
    </div>
  </Card>
</template>

<style scoped>
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #67748e;
    vertical-align: top;
    border-color: #e9ecef;
  }

  .table > thead > tr > *,
  .table > * > * > * {
    padding: 0.5rem 0.5rem;
    background-color: white;
  }

  .table > thead > tr > *,
  .table > * > :not(:last-child) > * {
    border-bottom-width: 1px;
  }

  .table > tbody {
    vertical-align: inherit;
  }

  .table > thead {
    vertical-align: bottom;
  }

  .table > :not(:last-child) > :last-child > * {
    border-bottom-color: #e9ecef;
  }

  table.align-items-center td,
  .table.align-items-center th {
    vertical-align: middle;
  }

  .table td,
  .table th {
    white-space: nowrap;
  }

  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>
