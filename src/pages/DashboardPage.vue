<template>
  <q-page class="q-pa-md">
    <q-table flat title="Products table" :columns="columns" :rows="rows" row-key="id" bordered>
      <template v-slot:body-cell="props">
        <q-td :props="props">
          {{ props.row[props.col.name] || '' }}
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { QTableProps } from 'quasar';

const columns = ref<QTableProps['columns']>([
  { name: 'col1', label: 'Quantity', field: 'col1', align: 'left' },
  { name: 'col2', label: 'Category', field: 'col2', align: 'left' },
  { name: 'col3', label: 'Products', field: 'col3', align: 'left' },
  { name: 'col4', label: 'Price', field: 'col3', align: 'left' },
]);

const rows = ref([
  { id: 1, col1: '3 kg', col2: 'Fruits', col3: 'Peach', col4: '10$' },
  { id: 2, col1: '', col2: '', col3: '', col4: '' },
  { id: 3, col1: '', col2: '', col3: '', col4: '' },
  { id: 4, col1: '', col2: '', col3: '', col4: '' },
  { id: 5, col1: '', col2: '', col3: '', col4: '' },
]);
</script>
