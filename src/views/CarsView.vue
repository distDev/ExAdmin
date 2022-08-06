<template>
  <div class="flex flex-col gap-[15px]">
    <TableControls title="Автомобили"/>
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

const tableHeaders = ref(['model', 'vin', 'brand', 'name', 'phone']);


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
