<template>
  <div class="flex flex-col gap-[15px]">
    <TableControls title="Пользователи" />
    <TabelLarge :table-headers="tableHeaders" :table-data="tableData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TabelLarge from '../components/table-large/TabelLarge.vue';
import TableControls from '../components/table-controls/TableControls.vue';

const tableData = ref([
  {
    id: '412421421',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Иван',
    телефон: '+7 925 380 53 55',
  },
  {
    id: 'rgherherhe',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Дмитрий',
    телефон: '+7 925 380 25 66',
  },
  {
    id: '41253terherh',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Олег',
    телефон: '+7 925 386 25 61',
  },
  {
    id: '4125343gjterherh',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Иван',
    телефон: '+7 926 380 22 66',
  },
  {
    id: '41253ttterherh',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Иван',
    телефон: '+7 925 330 25 66',
  },
]);
const tableHeaders = ref(['имя', 'телефон', 'записи', 'автомобили', 'статус']);
</script>
