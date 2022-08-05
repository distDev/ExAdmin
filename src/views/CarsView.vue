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
    model: 'Opel',
    brand: 'Astra',
    vin: '482FGSJ78WHFYW943',
    name: 'Иван',
    phone: '+7 925 380 25 66',
  },
  {
    id: 'rgherherhe',
    model: 'Opel',
    brand: 'Astra',
    vin: '482FGSJ78WHFYW943',
    name: 'Иван',
    phone: '+7 925 380 25 66',
  },
  {
    id: '41253terherh',
    model: 'Opel',
    brand: 'Astra',
    vin: '482FGSJ78WHFYW943',
    name: 'Иван',
    phone: '+7 925 380 25 66',
  },
  {
    id: '4125343gjterherh',
    model: 'Opel',
    brand: 'Astra',
    vin: '482FGSJ78WHFYW943',
    name: 'Иван',
    phone: '+7 925 380 25 66',
  },
  {
    id: '41253ttterherh',
    model: 'Opel',
    brand: 'Astra',
    vin: '482FGSJ78WHFYW943',
    name: 'Иван',
    phone: '+7 925 380 25 66',
  },
]);

// получение header таблицы
const tableHeaders = ref(['model', 'vin', 'brand', 'name', 'phone']);

// сортировка колонн
const tableBody = computed(() =>
  tableData.value.map((item: any) =>
    tableHeaders.value.map((header: string) => item[header])
  )
);
</script>

<script lang="ts">
interface IData {
  model: string;
  brand: string;
  vin: string;
  name: string;
  phone: string;
}
</script>

