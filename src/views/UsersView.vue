<template>
  <div class="flex flex-col gap-[15px]">
    <div class="w-full">
      <div
        class="flex justify-between items-center w-full p-[30px] bg-white rounded-lg shadow-mainShadow px-5 py-5"
      >
        <div class="flex gap-4">
          <div
            class="bg-lightGrey text-textSecond rounded-lg flex items-center justify-center text-sm font-medium px-6 py-3"
          >
            Автомобили
          </div>
          <button
            class="bg-primary text-white rounded-lg flex items-center justify-center text-sm font-medium px-6 py-3 hover:opacity-75"
          >
            Добавить
          </button>
        </div>
        <div class="flex gap-4">
          <div
            class="bg-lightGrey cursor-pointer rounded-lg h-10 w-10 flex items-center justify-center text-textSecond hover:text-primary"
          >
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
          <div
            class="bg-lightGrey cursor-pointer rounded-lg h-10 w-10 flex items-center justify-center text-textSecond hover:text-primary"
          >
            <font-awesome-icon icon="fa-solid fa-filter" />
          </div>
          <div
            class="bg-lightGrey cursor-pointer rounded-lg h-10 w-10 flex items-center justify-center text-textSecond hover:text-primary"
          >
            <font-awesome-icon icon="fa-solid fa-trash" />
          </div>
        </div>
      </div>
    </div>
    <TabelLarge :table-headers="tableHeaders" :table-body="tableBody" />
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import TabelLarge from '../components/table-large/TabelLarge.vue';

const tableData = ref([
  {
    id: '412421421',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Иван',
    телефон: '+7 925 380 25 66',
  },
  {
    id: 'rgherherhe',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Иван',
    телефон: '+7 925 380 25 66',
  },
  {
    id: '41253terherh',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Иван',
    телефон: '+7 925 380 25 66',
  },
  {
    id: '4125343gjterherh',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Иван',
    телефон: '+7 925 380 25 66',
  },
  {
    id: '41253ttterherh',
    статус: 'Подтвержден',
    записи: '0',
    автомобили: '2',
    имя: 'Иван',
    телефон: '+7 925 380 25 66',
  },
]);

// header таблицы
const tableHeaders = ref(['имя', 'телефон', 'записи', 'автомобили', 'статус']);

// сортировка колонн
const tableBody = computed(() =>
  tableData.value.map((item: any) =>
    tableHeaders.value.map((header: string) => item[header])
  )
);
</script>
