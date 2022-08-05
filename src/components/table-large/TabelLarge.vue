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
        </tr>
      </thead>
      <!-- тело таблицы -->
      <tbody>
        <!-- колонна -->
        <tr
          class="text-base border-b border-border"
          v-for="tableBodyItem in props.tableBody"
          :key="tableBodyItem"
        >
          <!-- чекбокс -->
          <td class="p-4 w-4">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              class="w-4 h-4"
            />
          </td>
          <!-- данные таблицы -->
          <td
            class="py-4 px-6"
            v-for="childItem in tableBodyItem"
            :key="childItem"
          >
            {{ childItem }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  tableHeaders: string[];
  tableBody: any;
  
}>();

console.log(props.tableBody);
</script>
