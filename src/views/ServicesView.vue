<template>
  <div class="flex flex-col gap-[15px]">
    <TableControls title="Автомобили" />
    <TabelLarge :table-headers="tableHeaders" :table-data="tableData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TabelLarge from '../components/table-large/TabelLarge.vue';
import TableControls from '../components/table-controls/TableControls.vue';

const tableData = ref([
  {
    id: '4122е2421421',
    title: 'Замена масла',
    category: 'Автосервис',
    subcategory: 'Жидкости и масло',
    price: '450',
    img: 'https://scuffedentertainment.com/wp-content/uploads/2021/11/what-car-suits-you-best-quiz.jpg',
  },
  {
    id: '41242tw3t1421',
    title: 'Диагностика двигателя',
    category: 'Диагностика',
    subcategory: 'Двигатель',
    price: '2000',
    img: 'https://scuffedentertainment.com/wp-content/uploads/2021/11/what-car-suits-you-best-quiz.jpg',
  },
  {
    id: '41242ttw1421',
    title: 'Замена воздушного фильтра',
    category: 'Автосервис',
    subcategory: 'Жидкости и масло',
    price: '340',
    img: 'https://scuffedentertainment.com/wp-content/uploads/2021/11/what-car-suits-you-best-quiz.jpg',
  },
  {
    id: '4124214tw3t221',
    title: 'Замена колеса',
    category: 'Автосервис',
    subcategory: 'Колеса',
    price: '4500',
    img: 'https://scuffedentertainment.com/wp-content/uploads/2021/11/what-car-suits-you-best-quiz.jpg',
  },
]);

const tableHeaders = ref(['title', 'category', 'subcategory', 'price', ]);
</script>
