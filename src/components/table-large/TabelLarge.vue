<template>
  <div class="w-full bg-white rounded-lg">
    <table class="w-full text-sm text-left">
      <!-- шапка таблицы -->
      <thead class="text-xs text-textSecond uppercase border-b border-border">
        <tr>
          <th scope="col" class="p-4">
            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4" />
          </th>
          <th
            scope="col"
            class="py-3 px-6"
            v-for="item in props.tableHeaders"
            :key="item"
          >
            {{ item }}
          </th>
          <th scope="col" class="py-3 px-6" v-if="checkImage.length > 0">
            img
          </th>
        </tr>
      </thead>
      <!-- тело таблицы -->
      <tbody>
        <!-- колонна -->
        <tr
          class="text-base border-b border-border hover:bg-lightGrey cursor-pointer"
          v-for="(item, index) in tableData"
          :key="index"
        >
          <!-- чекбокс -->
          <td class="p-4 w-4">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              class="w-4 h-4"
              v-model="selectedItem"
              :value="item.id"
            />
          </td>
          <td class="py-4 px-6" v-for="header in tableHeaders" :key="header">
            {{ item[header] }}
          </td>
          <td v-if="checkImage.length > 0 && item.img">
            <img :src="item.img" class="h-12 w-22 rounded-md m-auto" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  tableHeaders: string[];
  tableData: any;
}>();

const tableHeader = ref(props.tableHeaders);
const data = ref(props.tableData);
const selectedItem = ref<any>([]);

// проверка на присутвие изображения для раздела "Услуги"
const checkImage = computed(() => data.value.filter((e: any) => e.img));
</script>
